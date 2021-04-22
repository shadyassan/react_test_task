import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export function fetchAll() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function fetchById(id) {
  return fetch(`${baseUrl}/${id}`).then(handleResponse).catch(handleError);
}

export function postAdd(post) {
  return fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function postUpdate(post) {
  return fetch(`${baseUrl}/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function postDelete(id) {
  return fetch(`${baseUrl}/${id}`, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
