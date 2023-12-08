const API_URL = 'http://localhost:3004';

export default async function fetchData(destPage: string, token: string | null): Promise<any> {
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

  let data = await response.json()

  if (destPage === 'poketeam') {
    console.log('apifetch ')
    console.log(data)

    const teams = await data;

    try {
      const pokeRes = await fetch(`${fetchURL}`, {
        method: 'GET',
        headers,
      });
      const pokeData = await pokeRes.json();
      const parsedPokes = await pokeData

      for (let i=0; i<teams.length; i++) {

        teams[i].sprite1 = parsedPokes.indexOf(teams[i].poke1)
        teams[i].sprite2 = parsedPokes.indexOf(teams[i].poke2)
        teams[i].sprite3 = parsedPokes.indexOf(teams[i].poke3)
        teams[i].sprite4 = parsedPokes.indexOf(teams[i].poke4)
        teams[i].sprite5 = parsedPokes.indexOf(teams[i].poke5)
        teams[i].sprite6 = parsedPokes.indexOf(teams[i].poke6)

      }
    } catch (error) {
      console.error("Parsing error:", error);
    }





  }

  return data
}

// export default async function fetchSpriteData(pokeNumber: string, token: string): Promise<any> {
//   const headers = new Headers({
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json',
//   });
// // const fetchURL = id === undefined || id === null
// //   ?  `${API_URL}/${destPage}`
// //   : `${API_URL}/${destPage}/${id}`
//   const fetchURL =`${API_URL}/pokemon/${pokeNumber}`;
//   const response = await fetch(`${fetchURL}`, {
//     method: 'GET',
//     headers,
//   });
//
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//
//   const fetchedData = await response.json();
//
//   console.log(fetchedData.sprite)
//
//   return await response.json();
// }
