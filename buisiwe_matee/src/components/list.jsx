import React, { Component } from 'react'
import { v1 as uuid } from 'uuid'
import NotesInput from './NotesInput'
import NotesList from './NotesList'
import SimpleModal from "./taskModal";

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: JSON.parse(localStorage.getItem("shoppingList")),
			// todolist:JSON.parse(localStorage.getItem("shoppingList")),
			itemsToShow: "all",
			id: uuid(),
			item: '',
			editItem: false,
		}
	}
	//creating button handlers
	handleChange = event => {
		this.setState({
			item: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()

		const newItem = {
			id: this.state.id,
			title: this.state.item,
			completed: false
		}

		const updatedItems = [...this.state.items, newItem]

		if (this.state.item.length > 0) {
			let local = JSON.parse(localStorage.getItem("shoppingList"))
			local.push({
				id: uuid(),
				title: this.state.item,
				description: ''
			})
			localStorage.clear()
			localStorage.setItem("shoppingList", JSON.stringify(local))
			this.setState({
				items: updatedItems,
				id: uuid(),
				item: '',
				editItem: false
			})
		}
	}

	updateNotesToShow = string => {
		this.setState({
			itemsToShow: string
		});
	};

	handleDoneNotes = (id, completed) => {
		const filteredItems = this.state.items.map(item => {
			item.id === id && (item.completed = !item.completed)
			return item
		})

		this.setState({
			items: filteredItems,
		})
	}

	handleDelete = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id)

		this.setState({
			items: filteredItems
		})
	}

	handleEdit = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id)

		const selectedItem = this.state.items.find(item => item.id === id)

		this.setState({
			items: filteredItems,
			id: id,
			item: selectedItem.title,
			editItem: true
		})
	}

	handleDeleteDoneNotes = () => {
		const filteredItems = this.state.items.filter(item => item.completed === false)

		this.setState({
			items: filteredItems
		})
	}

	//Clearing out the list
	clearList = () => {
		this.setState({
			items: []
		})
	}

	handleNotesDetails = (id, title) => {
		console.log('Description : ' + title);
		// return <SimpleModal title={title} />
	}

	/* creating an array and use useState to check the values */
	render() {
		// console.log(this.state.todolist);
		let items = []

		if (this.state.itemsToShow === "all") {
			items = this.state.items;
		} else if (this.state.itemsToShow === "todo") {
			items = this.state.items.filter(item => !item.completed);
		} else if (this.state.itemsToShow === "done") {
			items = this.state.items.filter(item => item.completed);
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-10 col-md-8 mx-auto mt-4">
						<h3 className="text-capitalize text-center">What have you learnt from the class?</h3>
						<NotesInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>

						{/*creating event listers for buttons*/}
						<NotesList
							items={items}
							filterDoneNotes={this.filterDoneNotes}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
							handleDoneNotes={this.handleDoneNotes}
							handleDeleteDoneNotes={this.handleDeleteDoneNotess}
							updateNotesToShow={this.updateNotesToShow}
							handleNotesDetails={this.handleNotesDetails}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default List;
