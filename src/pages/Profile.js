import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Layout from '../components/Layout'
import Card from '../components/Card'
import './Profile.css'

const Profile = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="profile__container">
        <h1>Profile</h1>
        <Card>
          {user.userName && <p>Name: {user.userName}</p>}
          {user.email && <p>Email: {user.email}</p>}
        </Card>
        <img src="./pilates.svg" alt="pilates" />
      </div>
    </Layout>
  )
}

export default Profile
