import axios from 'axios';
import {
  GET_ALL_GAMES,
  SEARCH_BY_NAME,
  GET_VIDEOGAME_DETAIL,
  GET_GENRES,
  ORDER_BY,
  FILTER_BY
} from './const';

//Se  trae todos los juegos(DB, API)
export function getAllGames() {
  return function (dispatch) {
    return axios.get('http://localhost:3001/videogames/').then((res) => {
      dispatch({
        type: GET_ALL_GAMES,
        payload: res.data
      });
    })
      .catch((err) => {
        return err
      });
  };
}

//Se trae todos los nombres encontrados por nombre (query:name)
export function searchByName(name) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/videogames?name=${name}`).then((res) => {
      dispatch({
        type: SEARCH_BY_NAME,
        payload: res.data
      });
    })
      .catch((err) => {
        return err
      });
  };
}

//Se trae todos los detalles del juego pasado por (param: ID)
export function getVideogameDetail(id) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/videogame/${id}`).then((res) => {
      dispatch({
        type: GET_VIDEOGAME_DETAIL,
        payload: res.data
      });
    })
      .catch((err) => {
        return err;
      });
  };
}

//Se trae todos los generos
export function getGenres() {
  return function (dispatch) {
    axios.get('http://localhost:3001/genres').then((res) => {
      dispatch({
        type: GET_GENRES,
        payload: res.data
      });
    })
      .catch((err) => {
        return err;
      });
  };
}

//ordenamiento
export function orderBy(order) {
  return function (dispatch) {
    dispatch({
      type: ORDER_BY,
      payload: order
    });
  };
}

//filtrado
export function filterBy(order) {
  return function (dispatch) {
    dispatch({
      type: FILTER_BY,
      payload: order
    });
  };
}
