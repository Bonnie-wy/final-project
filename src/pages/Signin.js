import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Button from '../components/Button'
import Logo from '../components/Logo'
import './Signin.css'

const SigninPage = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signIn(email, password);
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
          <div className="login__logo">
            <Logo />
          </div>
          <form onSubmit={handleSubmit}>
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
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              label="Sign in"
              type="submit"
            />
          </form>
          <p>Want to become a member? <Link to="/sign-up">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
