import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export function fetchAll() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
