import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import './App.scss';
import { FullSpinner } from './styles/app';
import Wrapper from './components/shared/Wrapper';

const ListingPage = lazy(() => import('./pages/ListingPage'));
const PostEdit = lazy(() =>
  import('./pages/ListingPage/components/PostEdit.jsx')
);
const PostDetails = lazy(() =>
  import('./pages/ListingPage/components/PostDetails.jsx')
);

const App = () => {
  return (
    <Wrapper>
      <Suspense fallback={<FullSpinner />}>
        <Route exact path='/'>
          <ListingPage />
        </Route>

        <Route path='/edit/:id'>
          <PostEdit />
        </Route>

        <Route path='/post/:id'>
          <PostDetails />
        </Route>
      </Suspense>
      <ToastContainer autoClose={3000} hideProgressBar />
    </Wrapper>
  );
};

export default App;
