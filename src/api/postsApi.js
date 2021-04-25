import axios from 'axios';
import { serverUrl, handleResponse, handleError } from './apiUtils';
const baseUrl = `${serverUrl}/posts`;

// Fetch
// export function fetchAll() {
//   return fetch(baseUrl).then(handleResponse).catch(handleError);
// }

// export function fetchById(id) {
//   return fetch(`${baseUrl}/${id}`).then(handleResponse).catch(handleError);
// }

// export function fetchCommentsById(id) {
//   return fetch(`${baseUrl}/${id}/comments`)
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function postAdd(post) {
//   return fetch(baseUrl, {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function postUpdate(post) {
//   return fetch(`${baseUrl}/${post.id}`, {
//     method: 'PUT',
//     body: JSON.stringify(post),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function postDelete(id) {
//   return fetch(`${baseUrl}/${id}`, { method: 'DELETE' })
//     .then(handleResponse)
//     .catch(handleError);
// }

// Axios
export function fetchAll() {
  return axios.get(baseUrl).then(handleResponse).catch(handleError);
}

export function fetchById(id) {
  return axios.get(`${baseUrl}/${id}`).then(handleResponse).catch(handleError);
}

export function fetchCommentsById(id) {
  return axios
    .get(`${baseUrl}/${id}/comments`)
    .then(handleResponse)
    .catch(handleError);
}

export function postAdd(post) {
  return axios.post(baseUrl, post).then(handleResponse).catch(handleError);
}

export function postUpdate(post) {
  return axios
    .put(`${baseUrl}/${post.id}`, post)
    .then(handleResponse)
    .catch(handleError);
}

export function postDelete(id) {
  return axios.delete(`${baseUrl}/${id}`).catch(handleError);
}
