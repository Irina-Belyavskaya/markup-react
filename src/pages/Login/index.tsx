import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Grid } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { getUsers } from '../../store/slices/userSlice'

import Form from '../../components/Form'
import Modal from '../../components/Modal'

const LoginPage = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()
  const users = useAppSelector(state =>state.users.listOfUsers)
  
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  
  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const email : string = String(data.get('email'))
    const user = users.filter(user => user.email === email )
    if (user.length > 0)
      navigate('/', { replace: true, state: 'Hello, ' + user.pop()?.name } )
    else {
      setTitle('Can`t find user with such email.')
      setShowModal(true)
    }

  }

  return (
    <Grid>
      { showModal && <Modal title={title}/>}
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