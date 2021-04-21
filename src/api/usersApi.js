import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export function fetchUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
