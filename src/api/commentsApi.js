import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://localhost:3001/comments';

export function fetchCommentsById(id) {
  return fetch(`${baseUrl}/${id}`).then(handleResponse).catch(handleError);
}
