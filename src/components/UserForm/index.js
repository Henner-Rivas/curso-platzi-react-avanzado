import React from 'react'
import useInputValue from '../hooks/useInputValue';
import { SubmitButton } from '../SumitButton';
import { Button, Error, Form, Input, Title } from './styles';


const UserForm = ({onSubmit,title,error,disabled}) => {
 const email= useInputValue('')
 const password  = useInputValue('');



/* 
 const handleForm = e => {
     setForm({
         ...form,
         [e.target.name]: e.target.value,
     });
 }
 */
 const handleSubmit = (event) => {
     event.preventDefault();
     onSubmit({ email: email.value, password: password.value });
 }
  return (
    <div>
     <Title>{title}</Title>
<Form onSubmit={handleSubmit} disabled={disabled}>
 <Input placeholder='Email' {...email} disabled={disabled}/>
 <Input placeholder='Password' {...password} disabled={disabled} />
<SubmitButton type='submit' disabled={disabled}> {title}</SubmitButton>
</Form>
{
  error && <Error>{error}</Error>
}
    </div>
  )
}

export default UserForm
