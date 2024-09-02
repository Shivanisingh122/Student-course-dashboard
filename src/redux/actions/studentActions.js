export const enrollCourse = (courseId) => ({
    type: 'ENROLL_COURSE',
    payload: courseId,
  });
  
  export const updateProgress = (courseId, progress) => ({
    type: 'UPDATE_PROGRESS',
    payload: { courseId, progress },
  });