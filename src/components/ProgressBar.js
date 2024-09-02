import React from 'react';
import '../styles/ProgressBar.css';

function ProgressBar({ progress, onChange }) {
  const handleChange = (e) => {
    const newProgress = parseInt(e.target.value);
    onChange(newProgress);
  };

  return (
    <div className="progress-bar-container">
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleChange}
        className="progress-bar"
      />
      <span className="progress-value">{progress}%</span>
    </div>
  );
}

export default ProgressBar;