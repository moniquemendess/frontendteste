/**
 * Aqui estamos creando una estancia Axios para hacer una solicitación a API POKEMON
 */

import axios from "axios";

const apiHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const APIPoki = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  headers: apiHeaders,
  timeout: 6000000,
});
