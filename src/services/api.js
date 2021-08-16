import axios from "axios";

export const api = axios.create({
  baseURL: 'https://repo-provas-back-end.herokuapp.com',

});

