import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Button from '../components/Button'
import './Signin.css'

const SigninPage = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error)
      setError(error.message);
    }
  }

  return (
    <div className="signin">
      <div className="signin__image">
        <img src="./fitness.svg" alt="fitness"/>
      </div>
      <div className="signin__container">
        <div className="login">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="text"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            label="Sign in"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default SigninPage
