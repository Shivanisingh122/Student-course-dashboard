import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/CourseDetails.css';

function CourseDetails() {
  const { id } = useParams();
  const course = useSelector(state => state.courses.find(c => c.id === parseInt(id)));

  if (!course) return <div>Course not found</div>;

  return (
    <div className="course-details">
      <h1>{course.name}</h1>
      <img src={course.thumbnail} alt={course.name} className="course-thumbnail" />
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <h3>Prerequisites:</h3>
      <ul>
        {course.prerequisites.map((prereq, index) => (
          <li key={index}>{prereq}</li>
        ))}
      </ul>
      <h3>Syllabus:</h3>
      <ul className="syllabus">
        {course.syllabus.map((week, index) => (
          <li key={index}>
            <h4>Week {week.week}: {week.topic}</h4>
            <p>{week.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;