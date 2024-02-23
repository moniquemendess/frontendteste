/**
 * Hacer un getAll para pintar los pokemon en la pagina
 * Tener un getbyId para que buscamos por id y que lo pinta
 */

import { APIPoki } from "./pokiApi.config";

export const getAll = async () => {
  return APIPoki.get(`pokemon`)
    .then((res) => res)
    .catch((error) => error);
};

export const getbyId = async (id) => {
  return APIPoki.get(`pokemon/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
