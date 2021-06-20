import { createContext, useReducer } from "react";

//allow for use of Context API in app
export const AppContext = createContext();

//reducer function - define all state actions
function reducer(appstate, action) {
    //copy of state
    let appStateCopy = { ...appstate };
    //set name of copy action to action
    appStateCopy.action = action;

    //add new item
    if (action.type === 'ADD_ITEM') {
        //to prevent addition of duplicate items, check if index is same, and if they aren't hte same, add item
        const index = appStateCopy.notes.findIndex(el => el.id === action.payload.id);
        if (index === -1) {
            appStateCopy.notes.unshift(action.payload);
        }
    }

    //set userLoggedIn to true and userdata to payload(what is keyed/data)
    if (action.type === 'LOGIN') {
        appStateCopy.isUserLoggedIn = true;
        appStateCopy.userData = action.payload;
    }

    //set userLoggedIn to false and userdata back to null in logout
    if (action.type === 'LOGOUT') {
        appStateCopy.isUserLoggedIn = false;
        appStateCopy.userData = null;
    }

    //reset inputs to empty
    if (action.type === 'RESET_INPUTS') {
		appStateCopy.title = '';
		appStateCopy.description = '';
    }
    
    // update title to edit
	if (action.type === 'UPDATE_TITLE') {
		appStateCopy.title = action.payload;
	}

	// update desc to edit
	if (action.type === 'UPDATE_DESCRIPTION') {
		appStateCopy.description = action.payload;
	}

    return appStateCopy;
}

//initialState object
const initialState = {
    notes: [
        {
			id: 1,
			title: 'Item 1',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
		},
		{
			id: 2,
			title: 'Item 2',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
        },
        {
			id: 3,
			title: 'Item 3',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
		},
    ], //notes state stored in array
    isUserLoggedIn: false, //state to check whether user is logged in
    userData: null, //check whether user data is null on logout
    title: '',
    description: ''
}

function AppState({children}) {

    //useReducer
    const [appstate, dispatch] = useReducer(reducer, initialState);

    //value passed to context for use in other components
    const contextObject = {
        state: appstate,
        dispatch: dispatch
    };
    
    return (
        <AppContext.Provider value={contextObject} >
            {children}
        </AppContext.Provider>
    )
}

export default AppState;