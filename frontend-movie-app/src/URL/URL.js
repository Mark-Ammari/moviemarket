import axios from 'axios';

const url = process.env.NODE_ENV === "production" ? "https://moviemarket.herokuapp.com/" : 'http://localhost:8080';

export const movieURI = axios.create({
    baseURL: url,
})