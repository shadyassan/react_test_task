import axios from 'axios';
import { serverUrl, handleResponse, handleError } from './apiUtils';
const baseUrl = `${serverUrl}/users`;

// Axios
export function fetchUsers() {
  return axios.get(baseUrl).then(handleResponse).catch(handleError);
}

// Fetch
// export function fetchUsers() {
//   return fetch(baseUrl).then(handleResponse).catch(handleError);
// }
