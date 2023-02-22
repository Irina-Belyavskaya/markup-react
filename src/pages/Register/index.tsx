import { useState } from 'react'

import { useNavigate  } from 'react-router-dom'

import { useAppDispatch } from '../../hooks/hooks'
import { addUser} from '../../store/slices/userSlice'

import Form from '../../components/Form'
import Modal from '../../components/Modal'


const RegisterPage = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const name : string = String(data.get('name'))
    const email : string = String(data.get('email'))
    const gender : string = String(data.get('gender'))
    const status : string = String(data.get('status'))
    const res: any = await dispatch(addUser({name: name, email: email, gender: gender, status: status}))
    if (!res.meta.rejectedWithValue)
      navigate('/login')
    else {
      setTitle(res.payload)
      setShowModal(true)
    }
  }

  return (
    <>
    { showModal && <Modal title={title}/>}
    <Form 
      title={'Registration'} 
      nameBtn={'Sign Up'} 
      handleSubmit={handleRegister} 
      isSignIn={false}
    />
    </>
  )
}

export default RegisterPage