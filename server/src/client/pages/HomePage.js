import React from 'react';

const Home = () => {
  return (
    <div
      className="center-align"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 64px)',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </div>
  );
};

export default {
  component: Home
};
