import React from 'react';
import './Programs.css';

const Programs = ({ collegeName }) => {
  return (
    <div className="programs-container">
      <h1 className="programs-heading">Programs Offered at {collegeName}</h1>
      <ul className="programs-list">
        <li>Bachelor of Science in Computer Science</li>
        <li>Bachelor of Arts in Information Technology</li>
        <li>Master of Science in Data Science</li>
        {/* Add more programs */}
      </ul>
    </div>
  );
};

export default Programs;
