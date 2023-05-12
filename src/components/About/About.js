import React from 'react';
import './About.css';

const About = ({ collegeName }) => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About {collegeName}</h1>
      <p className="about-paragraph">
        Welcome to the About page of {collegeName}. Here you can find information about our college, its history, mission, and values.
      </p>
      <p className="about-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla dolor at urna fringilla, nec volutpat turpis feugiat. Sed mattis lorem sed velit sollicitudin, ac gravida odio varius.
      </p>
    </div>
  );
};

export default About;
