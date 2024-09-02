import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import CourseDetails from './components/CourseDetails';
// import './styles/App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Updated Route syntax */}
            <Route path="/course/:id" element={<CourseDetails />} /> {/* Updated Route syntax */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
