import { useState } from 'react'
import ButtonTab from './components/ButtonsTab/ButtonTab'
import FormInput from './components/LoginForm/FormInput'
import FormBtn from './components/LoginForm/FormBtn'
import './App.css'

function App() {
  const [concept, setConcept] = useState('Login')
  function handleClick(btnName) {
    setConcept(btnName)
  }
  return (
    <>
      <h1>Login Form</h1>
      <ul className="tabs">
        <ButtonTab btnName="Login" isSelected={ concept === 'Login'} onselected={() => handleClick('Login')}  />
        <ButtonTab btnName="Sign Up" isSelected={ concept === 'Sign Up'} onselected={() => handleClick('Sign Up')}  />
      </ul>
      <form className="form-block">
        <FormInput inputType='email'    placeholder='Email Address' />
        <FormInput inputType='password' placeholder='Password' />
        {
          concept === 'Sign Up' ?
          <FormInput inputType='password' placeholder='Confirm Password' />
          :
          <a href="#">Fogot Password?</a>
        }       
        <FormBtn><span>Login</span></FormBtn>
        {
          concept === 'Login' &&
          <p>Not a member <a href="#">Signup now</a></p>
        }
        
      </form>
    </>
  )
}

export default App
