const API_URL = 'http://localhost:3004';

export default async function fetchData(endpoint: string, token: string): Promise<any> {
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  });

  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
}
