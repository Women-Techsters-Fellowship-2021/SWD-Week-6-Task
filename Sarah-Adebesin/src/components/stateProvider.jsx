import { createContext, useState } from 'react';

export const AppContext = createContext();

const initialState = {
    isLoggedIn: false,
    userId: null,
    userEmail: null,   
}

function StateProvider({ children }) {
    const [appData, setAppData] = useState(initialState);

    const contextObj = {
        state : appData,
        setState : setAppData,
    }

    return (
        //returning the appcontext with the state values whenever it is invoked in a child component.
        <AppContext.Provider value={contextObj}>
            {children}
        </AppContext.Provider>
    );
}

export default StateProvider;


















//  useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(result => {
//                 console.log(result);
//                 setAppData(initialValue => {
//                     return {
//                         ...initialValue,
//                         notePosts : result,
//                     };
//                 });
//             });
//     }, []);








// notePosts: [
//    {
//     id: 1,
//     title: 'HTML',
//     body:
//        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
//  },
//  {
//     id: 2,
//     title: 'CSS',
//     body:
//        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
//  },
//    {
//     id: 3,
//     title: 'GITHUB',
//     body:
//        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
//  },
//    {
//     id: 4,
//     title: 'JAVASCRIPT',
//     body:
//        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
//  },
//    {
//     id: 5,
//     title: 'REACT',
//     body:
//        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
//  },      
// ],