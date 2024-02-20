import axios from "axios";

const apiHeders = {
  Accept: "application/json",
  "Content-Type": "aplication/json",
};

export const ApiPokemon = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: apiHeders,
  timeout: 600000,
});
