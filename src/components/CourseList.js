import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { enrollCourse } from '../redux/actions/studentActions';
import '../styles/CourseList.css';

function CourseList() {
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();

  const handleEnroll = (courseId) => {
    dispatch(enrollCourse(courseId));
  };

  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id} className="course-item">
            <img src={course.thumbnail} alt={course.name} className="course-thumbnail" />
            <div className="course-info">
              <Link to={`/course/${course.id}`}>
                <h3>{course.name}</h3>
              </Link>
              <p>Instructor: {course.instructor}</p>
              <p>Duration: {course.duration}</p>
              <button onClick={() => handleEnroll(course.id)}>Enroll</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;