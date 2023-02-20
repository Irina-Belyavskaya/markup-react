import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit'
import {getUsersAxios, addUserAxios} from '../../api/users'

export type User = {
  name: string,
  email: string,
  gender: string,
  status: string
}

type UserState = {
  listOfUsers: Array<User>,
  loading : boolean,
  error : string | null
}

const initialState : UserState = {
  listOfUsers: [],
  loading : false,
  error : null
}

export const getUsers = createAsyncThunk<User[],undefined, {rejectValue: string}>(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
      try {
        return await getUsersAxios()
      } catch (error: any) {
        const msg = "Can't get users. Server error."
        return rejectWithValue(msg)
      }
  }
)


export const addUser = createAsyncThunk<User, User, { rejectValue: string }>(
  'users/addUser',
  async function ({email,name,gender,status} : User, { rejectWithValue }) {
      const user = {
        email: email,
        name: name,
        gender: gender,
        status: status
      }
      try {
        return await addUserAxios(user)
      }catch (error: any) {
        const msg = "Can't get users. Server error."
        return rejectWithValue(msg)
      }
  }
)

function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false
        state.listOfUsers = action.payload
      })
      .addCase(addUser.pending, (state) => {
        state.error = null
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.listOfUsers.push(action.payload)
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.loading = false
      })
  }
})

export default userSlice.reducer
