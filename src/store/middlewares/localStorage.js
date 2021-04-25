const localStorageMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);

  const actions = [
    'posts/postsReceived',
    'posts/postDeleted',
    'posts/postUpdated',
    'posts/postAdding',
    'posts/postEdit',
  ];

  if (actions.includes(result.type)) {
    localStorage.setItem(
      'posts',
      JSON.stringify(getState().entities.posts.items)
    );
  }

  return result;
};

export default localStorageMiddleware;
