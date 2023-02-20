import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../../components/Form'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { getUsers } from '../../store/slices/userSlice'

const LoginPage = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()
  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const users = useAppSelector(state =>state.users.listOfUsers)
  
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const email : string = String(data.get('email'))
    const user = users.filter(user => user.email === email )
    if (user.length > 0)
      navigate('/', { replace: true, state: 'Hello, ' + user.pop()?.name } )
  }

  return (
    <Grid>
      <Form 
        title={'Sign In'} 
        nameBtn={'Sign In'} 
        handleSubmit={handleLogin} 
        isSignIn={true}
      />
    </Grid>
  )
}

export default LoginPage