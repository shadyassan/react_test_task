import { serverUrl, handleResponse, handleError } from './apiUtils';
const baseUrl = `${serverUrl}/users`;

export function fetchUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
