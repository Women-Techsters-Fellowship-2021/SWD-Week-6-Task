import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import useContextGetter from '../hooks/contextGetter';
import Noteslist from './noteslist';

const btnStyle = {
    padding: '10px',
    fontSize: '1em',
    cursor: 'pointer',
}

function Notes() {

    const history = useHistory();
    const context = useContextGetter();

    //prevent user from getting to notes page if already logged out
    //changes on context.state and history change
    useLayoutEffect(() => {
        if (!context.state.isUserLoggedIn) {
            //take back to login page
            history.push('/login')
        }
    }, [context.state, history])

    const handleAddItem = () => {
        history.push('/add-new-item');
    }

    return (
        <div style={{textAlign:'center'}}>
            <Noteslist />
            <button onClick={handleAddItem} style={btnStyle}>Add Item</button>
        </div>
    )
}

export default Notes;