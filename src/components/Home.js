import React from 'react';

const Home = ({ collegeName }) => {
  const headingStyle = {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#666',
  };

  const containerStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to {collegeName}</h1>
      <p style={paragraphStyle}>Explore our programs, faculty, and campus life.</p>
    </div>
  );
};

export default Home;
