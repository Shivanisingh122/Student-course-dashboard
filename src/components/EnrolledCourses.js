import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProgress } from '../redux/actions/studentActions';
import ProgressBar from './ProgressBar';
import '../styles/EnrolledCourses.css';

function EnrolledCourses() {
  const enrolledCourses = useSelector(state => state.student.enrolledCourses);
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();

  const handleProgressChange = (courseId, progress) => {
    dispatch(updateProgress(courseId, progress));
  };

  return (
    <div className="enrolled-courses">
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map(enrollment => {
          const course = courses.find(c => c.id === enrollment.courseId);
          return (
            <li key={course.id} className="enrolled-course-item">
              <Link to={`/course/${course.id}`}>
                <img src={course.thumbnail} alt={course.name} className="course-thumbnail" />
                <h3>{course.name}</h3>
              </Link>
              <p>Instructor: {course.instructor}</p>
              {/* <p>Due Date: {enrollment.dueDate}</p> */}
              <ProgressBar 
                progress={enrollment.progress} 
                onChange={(progress) => handleProgressChange(course.id, progress)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EnrolledCourses;