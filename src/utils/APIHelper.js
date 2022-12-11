import axios from "axios";
import {
  GET_ALL_ANIMES,
  GET_ALL_GENRES,
  GET_ONE_ANIME_BY_RANKING,
} from "./API";
const REACT_APP_API_KEY = "f294a746c3mshcebf8b9885eb1eep1c6a56jsn984b7716730c";
const REACT_APP_API_HOST = "anime-db.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": REACT_APP_API_KEY,
  "X-RapidAPI-Host": REACT_APP_API_HOST,
};
export const getAllAnimes = async () => {
  const options = {
    method: "GET",
    url: GET_ALL_ANIMES,
    params: {
      page: "1",
      size: "20",
    },
    headers: headers,
  };
  let apiData = "";
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      apiData = { status: "success", data: response.data };
      return { status: "success", data: response.data };
    })
    .catch(function (error) {
      console.error(error);
      apiData = { status: "error", data: error };
      return { status: "error", data: error };
    });
  return apiData;
};
export const getOneAnimeByRanking = async () => {
  const options = {
    method: "GET",
    url: GET_ONE_ANIME_BY_RANKING + "1",
    headers: headers,
  };
  let apiData = "";
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      apiData = { status: "success", data: response.data };
      return { status: "success", data: response.data };
    })
    .catch(function (error) {
      console.error(error);
      apiData = { status: "error", data: error };
      return { status: "error", data: error };
    });
  return apiData;
};
export const getAnimeByGenre = async (genre, size) => {
  const options = {
    method: "GET",
    url: GET_ALL_ANIMES,
    params: {
      page: "1",
      size: size,
      genres: genre,
    },
    headers: headers,
  };
  let apiData = "";
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      apiData = { status: "success", data: response.data };
      return { status: "success", data: response.data };
    })
    .catch(function (error) {
      console.error(error);
      apiData = { status: "error", data: error };
      return { status: "error", data: error };
    });
  return apiData;
};

export const getAllGenre = async () => {
  const options = {
    method: "GET",
    url: GET_ALL_GENRES,
    headers: headers,
  };
  let apiData = "";
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      apiData = { status: "success", data: response.data };
      return { status: "success", data: response.data };
    })
    .catch(function (error) {
      console.error(error);
      apiData = { status: "error", data: error };
      return { status: "error", data: error };
    });
  return apiData;
};
