import React from 'react'
import UserForm from '../UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useloginMutation'
import { useContext } from 'react'
import {Context} from '../../Context'
import Helmet from 'react-helmet'

 const NotRegisteredUser = () => {
   const {activateAuth}= useContext(Context)

        return (
          <>
          <Helmet>
            <title>Inicia sesión </title>
          </Helmet>
            <Registro activateAuth={activateAuth}  />
            <Login activateAuth={activateAuth} />
          </>
        )
 }

const Registro = ({ activateAuth }) => {
  const { register,  error,loading  } = useRegisterMutation()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(({data}) =>{
          const {signup }=data
       activateAuth(signup)}
   ) 
  }

  const errorMsg= error && 'El usuario ya existe o hay algun problema'

  return <UserForm error={errorMsg} disabled={loading}  onSubmit={onSubmit} title='Registrarse' />
}

const Login = ({ activateAuth }) => {
  const { loginUser,  error,loading  } = useLoginMutation()
  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = {input} 
    loginUser({ variables }).then(({data}) =>{
    const {login}= data;
       activateAuth(login)}
   ) 
  }

  const errorMsg= error && 'La contraseña es incorreta o hay algun problema'

  return <UserForm error={errorMsg} disabled={loading}  onSubmit={onSubmitLogin} title='Iniciar sesión'  />
}
export default NotRegisteredUser
