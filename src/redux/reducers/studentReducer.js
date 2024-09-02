const initialState = {
    name: 'Shivani Singh',
    enrolledCourses: [],
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ENROLL_COURSE':
        return {
          ...state,
          enrolledCourses: [...state.enrolledCourses, { courseId: action.payload, progress: 0 }],
        };
      case 'UPDATE_PROGRESS':
        return {
          ...state,
          enrolledCourses: state.enrolledCourses.map(course =>
            course.courseId === action.payload.courseId
              ? { ...course, progress: action.payload.progress }
              : course
          ),
        };
      default:
        return state;
    }
  };
  
  export default studentReducer;