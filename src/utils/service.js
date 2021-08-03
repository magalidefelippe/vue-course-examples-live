import axios from "axios";

const getCharacters = async () => {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  const response = await axios.get(baseUrl);
  return response.data.results;
};

export default getCharacters;