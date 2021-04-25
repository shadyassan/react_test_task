import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import './App.scss';
import { FullSpinner } from './styles/app';
import TopBar from './components/shared/TopBar';
import Wrapper from './components/shared/Wrapper';
import TaskPage from './pages/AboutPage';

const ListingPage = lazy(() => import('./pages/ListingPage'));
const PostDetails = lazy(() =>
  import('./pages/ListingPage/components/PostDetails.jsx')
);

const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <Suspense fallback={<FullSpinner />}>
        <Route exact path="/">
          <ListingPage />
        </Route>
        <Route exact path="/task">
          <TaskPage />
        </Route>
        <Route path="/post/:id">
          <PostDetails />
        </Route>
      </Suspense>
      <ToastContainer autoClose={3000} hideProgressBar />
    </Wrapper>
  );
};

export default App;
