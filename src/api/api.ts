import axios from "axios"

// Characters
const BASE_URL = process.env.REACT_APP_BASE_URL
export const API_URL = `${BASE_URL}/api/`

const $apiCharacters = axios.create({
  baseURL: API_URL
})

// Users
export const USERS_URL = process.env.REACT_APP_USERS_URL
export const $apiUsers = axios.create({
  baseURL: USERS_URL
})


export default $apiCharacters
