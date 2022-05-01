import React  from 'react'
import { useContext } from 'react'
import {Context} from '../../Context'
import { SubmitButton } from '../SumitButton'


const User = () => {
  const {removeAuth }= useContext(Context)
  console.log("🚀 ~ file: User.js ~ line 7 ~ User ~ doto", removeAuth)
  return (

    <div>
   <h1>User</h1>
     <SubmitButton  onClick={removeAuth}>
       Cerror sesión
       </SubmitButton> 
    </div>
  )
}

export default User
