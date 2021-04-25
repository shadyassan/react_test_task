export const serverUrl = 'https://jsonplaceholder.typicode.com'; // json-server on localhost - http://localhost:3001

// Axios
export function handleResponse(response) {
  return response.data;
}

export function handleError(error) {
  if (error.response) {
    const { data } = error.response;
    console.error(data);
  } else if (error.request) {
    console.error(error.request);
  } else {
    console.error(error.message);
  }
  console.error(error.config);
  console.error(error.toJSON());
}

// Fetch
// export async function handleResponse(response) {
//   if (response.ok) return response.json();
//   if (response.status === 400) {
//     const error = await response.text();
//     throw new Error(error);
//   }
//   throw new Error('Network response was not ok.');
// }

// export function handleError(error) {
//   console.error(error);
//   throw error;
// }
