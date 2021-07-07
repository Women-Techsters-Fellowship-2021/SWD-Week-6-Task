import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  courses: [
    {
      id: 1,
      title: "CSS",
      description: "We started front-end with HTML and CSS. With these tools we were able to build a profile website and I hope you were all able to build something that will display your work. We also looked at some free platforms where we can host our website, and then we dived into JavaScript, where we learned how to build interactive elements on our websites and used event listeners to get input values. We practised this by building a shopping list app. For Faster and more rapid app development, we had to learn learned React. React helped us write HTML and JS code together with ease. It comes with multiple libraries that makes code easier to execute. We learned about components, functions and classes. We learned how to build an interactive form with multiple components using props and state. We practiced with our calculator APP, keyboard APP and what every software developer has to build. We added APIs to help us use dummy data and store data from our websites. There’s more that we’ve learned and this is only a summary. To encourage you to try and remember what you’ve learned and if you’ve understood with little to do, this week’s task is to build a course summary.",
      
    } 

  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addCourse(course) {
    dispatch({
      type: "ADD_COURSE",
      payload: course
    });
  }

  function editCourse(course) {
    dispatch({
      type: "EDIT_COURSE",
      payload: course
    });
  }

  function removeCourse(id) {
    dispatch({
      type: "REMOVE_COURSE",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        courses: state.courses,
        addCourse,
        editCourse,
        removeCourse
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};