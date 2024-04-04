import MainContent from '../components/layout/MainContent';
import React from 'react';

const Home = () => {
  return (
    <>
      <MainContent>
        <div className='text-center bg-white index'>
          <span style={{ fontSize: 85 }}>✌</span>
          <h2>Welcome to Our Website!</h2>
          <p>We are glad to have you here. Explore our services and forms.</p>
        </div>
      </MainContent>
    </>
  );
};

export default Home;
