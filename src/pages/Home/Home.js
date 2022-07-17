import React from 'react';
import Header from '../../components/Header/Header';
import './Home.css';
import UserDetail from '../../components/UserDetail/UserDetail';
import { UsersProvider } from '../../context/UsersContext';

const Home = () => {
  return (
    <div className="homePage">
      <Header></Header>
      <UsersProvider>
        <UserDetail></UserDetail>
      </UsersProvider>
    </div>
  );
};

export default Home;
