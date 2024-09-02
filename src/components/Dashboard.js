import React from 'react';
import { useSelector } from 'react-redux';
import CourseList from './CourseList';
import EnrolledCourses from './EnrolledCourses';
import SearchBar from './SearchBar';
import '../styles/Dashboard.css';

function Dashboard() {
  const student = useSelector(state => state.student);

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <h2>Welcome, {student.name}</h2>
      <SearchBar />
      <div className="dashboard-content">
        <EnrolledCourses />
        <CourseList />
      </div>
    </div>
  );
}

export default Dashboard;