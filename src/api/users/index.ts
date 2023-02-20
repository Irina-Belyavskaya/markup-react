import {$apiUsers} from "../api"
import type { User } from "../../store/slices/userSlice"

const bearerToken = process.env.REACT_APP_BEARER_TOKEN
const headers = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer ' + bearerToken,
    'Accept': 'application/json'
  }
}

export const getUsersAxios = async () => {
    const {data} = await $apiUsers.get(
      '',
      headers
    )
    return data
}

export const addUserAxios = async (user : User) => {
  const {data} = await $apiUsers.post(
    '',
    user,
    headers
  )
  return data
}