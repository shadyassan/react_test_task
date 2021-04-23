import { serverUrl, handleResponse, handleError } from './apiUtils';
const baseUrl = `${serverUrl}/comments`;

export function fetchCommentsById(id) {
  return fetch(`${baseUrl}/${id}`).then(handleResponse).catch(handleError);
}
