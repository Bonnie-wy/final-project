import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'
import './Profile.css'

const Profile = () => {
  const { user, logout } = useAuth();
  console.log(logout);

  console.log(user);

  return (
    <Layout>
      <div className="profile__container">
        <h1>Profile</h1>
        <Card>
          {user.userName && <p>Name: {user.userName}</p>}
          {user.email && <p>Email: {user.email}</p>}
          <Button
            label="Log out"
            onClick={logout}
          />
        </Card>
      </div>
    </Layout>
  )
}

export default Profile
