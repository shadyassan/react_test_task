import React from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import './App.scss';
import TopBar from './components/shared/TopBar';
import Wrapper from './components/shared/Wrapper';
import TaskPage from './pages/AboutPage';

import ListingPage from './pages/ListingPage';
import PostDetails from './pages/ListingPage/components/PostDetails';

const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <Route exact path="/">
        <ListingPage />
      </Route>
      <Route exact path="/task">
        <TaskPage />
      </Route>
      <Route path="/post/:id">
        <PostDetails />
      </Route>
      <ToastContainer autoClose={3000} hideProgressBar />
    </Wrapper>
  );
};

export default App;
