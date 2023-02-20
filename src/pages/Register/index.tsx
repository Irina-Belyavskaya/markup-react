import Form from '../../components/Form'
import { useAppDispatch } from '../../hooks/hooks'
import { addUser} from '../../store/slices/userSlice'
import { useNavigate  } from 'react-router-dom'

const RegisterPage = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const name : string = String(data.get('name'))
    const email : string = String(data.get('email'))
    const gender : string = String(data.get('gender'))
    const status : string = String(data.get('status'))
    dispatch(addUser({name: name, email: email, gender: gender, status: status}))
    navigate('/login')
  }

  return (
    <Form 
      title={'Registration'} 
      nameBtn={'Sign Up'} 
      handleSubmit={handleRegister} 
      isSignIn={false}
    />
  )
}

export default RegisterPage