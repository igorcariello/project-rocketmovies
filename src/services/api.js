import axios from "axios"

export const api = axios.create({
  baseURL:'https://project-api-rocketmovies.onrender.com'
})
