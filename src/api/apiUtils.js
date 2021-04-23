export const serverUrl = 'http://localhost:3001'; // https://jsonplaceholder.typicode.com

export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not ok.');
}

export function handleError(error) {
  console.error(error);
  throw error;
}
