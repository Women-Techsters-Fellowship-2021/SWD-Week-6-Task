import useContextGetter from '../hooks/contextGetter';
import { useHistory } from 'react-router';
import '../styles/form.css';

function Form() {

	const context = useContextGetter();
	const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        //if empty
        if (!context.state.title || !context.state.description) {
			return false;
        }
        
        //create new item
        const newItem = {
			title: context.state.title,
			description: context.state.description,
			id: Date.now(),
        };
        //add item dispatch action
        context.dispatch({type: 'ADD_ITEM', payload: newItem});
		// reset the values of the input boxes
		context.dispatch({ type: 'RESET_INPUTS' });
		history.push('/notes');
    }

    //update title to edited item
    const setTitle = e => {
		context.dispatch({
			type: 'UPDATE_TITLE',
			payload: e.target.value,
		});
	};
    //update description to edited desc
	const setDescription = e => {
		context.dispatch({
			type: 'UPDATE_DESCRIPTION',
			payload: e.target.value,
		});
	};

    return (
        <div className='add-form-section'>
            <form onSubmit={handleSubmit} className='add-form'>
                <input
					value={context.state.title}
					onChange={setTitle}
					type='text'
					name='title'
					id='title'
					placeholder='Title'
				/>
				<textarea
					type='text'
					value={context.state.description}
					onChange={setDescription}
					name='desc'
					id='desc'
					placeholder='Description'
				/>
				<button className='add-btn' type='submit'>
					Add Item
				</button>
            </form>
        </div>
    )
}

export default Form;