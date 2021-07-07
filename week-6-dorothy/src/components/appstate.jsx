import { createContext, useReducer } from 'react';

export const AppContext = createContext();

// reducer function
function reducer(state, action) {
	// create a copy of your state
	let stateCopy = { ...state };

	// set the name on our state copy to action
	stateCopy.action = action;

	// if action.type is LOGIN
	// set isUserLoggedIn to true
	// & set userData to payload
	if (action.type === 'LOGIN') {
		stateCopy.isUserLoggedIn = true;
		stateCopy.userData = action.payload;
	}

	// if action.type is LOGOUT
	// set isUserLoggedIn to false
	// & set userData to null
	if (action.type === 'LOGOUT') {
		stateCopy.isUserLoggedIn = false;
		stateCopy.userData = null;
	}

	// action to set title
	if (action.type === 'UPDATE_TITLE') {
		stateCopy.title = action.payload;
	} 

	// action to set title
	if (action.type === 'UPDATE_DESCRIPTION') {
		stateCopy.description = action.payload;
	} 

	
	if (action.type === 'RESET_INPUTS') {
		stateCopy.title = '';
		stateCopy.description = '';
	}

	return stateCopy;
}

const initialState = {
	isUserLoggedIn: false,
	userData: null,
	title: '',
	description: '',
	
};

function AppState({ children }) {
	
	const [appstate, dispatch] = useReducer(reducer, initialState);

	const contextObject = {
		state: appstate,
		dispatch: dispatch,
	};

	return (
		<AppContext.Provider value={contextObject}>
			{children}
		</AppContext.Provider>
	);
}

export default AppState;