export const getPokemons = async (
  url: string,
  limit: number,
  offset: number
) => {
  const res = await fetch(url + "?limit=" + limit + "&offset=" + offset);
  const data = await res.json();
  return data;
};
