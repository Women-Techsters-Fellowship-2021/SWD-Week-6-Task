import React, { useState } from 'react';
import { data } from '../components/data';
import Card from '../components/card';


function Notes() {
    // useState here is to check and update the state with input values entered in the form. 
    // State is initialized to a somewhat empty object
    // setState then updates this object with values from the input.

    const [state, setState] = useState({
        title: '',
        content: ''
    });

    function handleInput(e) {
        e.preventDefault();
        return setState({ title: e.target.value, content: e.target.value })
    }

    /*function handleText(e) {
        e.preventDefault();
        return setState({  })
    }*/
    function addNote(e) {
        // to prevent page reloading whenever the form is submitted.
        e.preventDefault();

        // create a new object with all the required fields/ key-value pairs, and then push that into our existing array of data.
        const newObject = { id: data.length + 1, title: state.title, content: state.content };
        // console.log(newObject)
        data.push(newObject);
        console.log(data)

    }

    return (
        <div>
            <form className="new_note" onSubmit={addNote}>
                <input type="text" name="title" id="new_note" placeholder="Title" onChange={handleInput} />
                <textarea name="content" cols="30" rows="15" placeholder="Content" onChange={handleInput}></textarea>
                <input type="submit" value="Add New Note" />
            </form>
            <div>
                {data.map(({ title, id, content }) => (
                    <Card key={id} title={title} content={content} />
                ))}
            </div>

        </ div >
    );
}

export default Notes;