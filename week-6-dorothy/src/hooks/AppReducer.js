export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_COURSE":
        return {
          ...state,
          courses: [...state.courses, action.payload],
        };
  
      case "EDIT_COURSE":
        const updatedCourse = action.payload;
  
        const updatedCourses = state.courses.map((course) => {
          if (course.id === updatedCourse.id) {
            return updatedCourse;
          }
          return course;
        });
  
        return {
          ...state,
          employees: updatedCourses,
        };
  
      case "REMOVE_COURSE":
        return {
          ...state,
          courses: state.courses.filter(
            (course) => course.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };