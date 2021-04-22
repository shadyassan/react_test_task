const localStorageMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);

  const actions = [
    'posts/postsReceived',
    'posts/postDeleted',
    'posts/postUpdated',
    'posts/postAdding',
  ];

  if (actions.includes(result.type)) {
    localStorage.setItem('posts', JSON.stringify(getState().entities.posts));
  }

  return result;
};

export default localStorageMiddleware;
