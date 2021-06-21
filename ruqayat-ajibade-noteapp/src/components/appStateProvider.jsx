import { createContext,  useReducer } from 'react';

export const AppContext = createContext();

function reducer(state, action) {
    // create a copy of your state
    let stateCopy = { ...state };

    // set the name on our state copy to action
    stateCopy.action = action;

    if (action.type === "LOGIN") {
        stateCopy.isUserLoggedIn = true;
        stateCopy.userData = action.payload;
    }
 
    if (action.type === "LOGOUT") {
        stateCopy.isUserLoggedIn = false;
        stateCopy.userData = null;
    }

    return stateCopy;
}
// This is the initial state of the app
const initialState = {
    isUserLoggedIn: false,
    userData: null,
    notes: [
        {
            body: "qcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            id: 1,
            title: "sunt aut occaecati excepturi optio reprehenderit",
            userId: 1
        },
        {
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            id: 2,
            title: "sunt aut  provident occaecati excepturi optio reprehenderit",
            userId: 1
        },
        {
            body: "quia et suscipit consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\n architecto",
            id: 3,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            userId: 1
        },
        {
            body: "quia et suscipit cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            id: 4,
            title: "sunt aut facere repellat provident  reprehenderit",
            userId: 1
        },
        {
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita etut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            id: 5,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            userId: 1
        },
    ],
};

export default function StateProvider({ children }) {

    const [appState, dispatch] = useReducer(reducer, initialState);

    const stateObject = { state: appState, dispatch: dispatch }
    return (
        <AppContext.Provider value={stateObject}>
            {children}
        </AppContext.Provider>
    );
}


