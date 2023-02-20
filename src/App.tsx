import MainPage from './pages/Main'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import { useAppDispatch, useAppSelector } from "./hooks/hooks"
import { getUsers } from "./store/slices/userSlice"
import { useEffect } from 'react'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
  ) 
}

export default App;
