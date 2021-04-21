import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export function fetchAll() {
  return fetch(`${baseUrl}/posts`).then(handleResponse).catch(handleError);
}
