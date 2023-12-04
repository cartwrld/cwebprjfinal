const API_URL = 'http://localhost:3004';

export default async function fetchData(destPage: string, token: string): Promise<any> {
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  });
// const fetchURL = id === undefined || id === null
//   ?  `${API_URL}/${destPage}`
//   : `${API_URL}/${destPage}/${id}`
  const fetchURL =`${API_URL}/${destPage}`;
  const response = await fetch(`${fetchURL}`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
}
