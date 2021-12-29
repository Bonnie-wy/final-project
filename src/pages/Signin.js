import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import Button from '../components/Button'
import './Signin.css'

const SigninPage = () => {
  const { signIn, singInWithGoogle } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState(null);

  const onClick = () => {
    console.log(email, password)
  }

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      await singInWithGoogle();
      history.push("/");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
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
            onClick={onClick}
          />
          <Button
            label="Continue with Google"
            type="submit"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
    </div>
  )
}

export default SigninPage
