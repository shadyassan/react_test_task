import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://jsonplaceholder.typicode.com/comments';

export function fetchCommentsById(id) {
  return fetch(`${baseUrl}/${id}`).then(handleResponse).catch(handleError);
}
