import { createContext,useReducer} from 'react';

export const AppContext = createContext();

const initialState = {
	isLoggedIn: false,
	userId: null,
	userEmail: null,
    note:"",
    DateCreated:"",
    notes:[],
    noteID:"",

};

function reducer (state, action) {

	let saveState = {...state};

	// set the name on our state copy to action
	saveState.action = action;
	if (action.type === 'ADD_NOTE') {
					return {
						...state,
					notes:[action.payload, ...state.notes],
				};
	
}
	if (action.type === 'REGISTER') {
		
		saveState.isLoggedIn=false;
		saveState.userEmail=action.payload.userEmail;
		saveState.userId=action.payload.userId;
		// return {
		// 	...state,
		// 	isLoggedIn:false,
		// 	...action.payload,
		// };
	}
	if (action.type === 'LOGIN') {
		saveState.isLoggedIn=true;
		saveState.userEmail=action.payload.userEmail;
		saveState.userId=action.payload.userId;

	}
	
	if (action.type === 'LOGOUT') {
		saveState.isLoggedIn = false;
		saveState.userEmail=null;
		saveState.userId=null;
    }
		if (action.type === 'UPDATE_NOTE'){
			saveState.note = action.payload;
			}
		
	

			if (action.type === 'RESET_INPUTS'){
				saveState.note="";
				
			}
			
			return saveState;
	}

	

export default function AppStates({children }) {
	const [appstate, dispatch] = useReducer(reducer, initialState);
	
	const ContextObject ={
		state: appstate,
		dispatch: dispatch,
	};
	
	
	return (
		<AppContext.Provider value={ContextObject}>
			{children}
		</AppContext.Provider>
	);
}
