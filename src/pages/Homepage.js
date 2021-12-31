import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { projectFirestore } from '../firebase'
import Card from '../components/Card'
import Layout from '../components/Layout'
import AreaChart from './AreaChart'
import './Homepage.css'

const Homepage = () => {
  const [mapped, setMapped] = useState([])

  const getData = async () => {
    try {
      const fetchedData = await getDocs(collection(projectFirestore, 'workout'))

      if (fetchedData) {
        fetchedData && fetchedData.forEach(workout => setMapped((prev) => [...prev, workout.data()]))
      }
    } catch(error) {
      console.log('error', error);
    }
  }

  useEffect (() => {
    getData()
  },[])

  return (
    <Layout>
      <div className="homepage__container">
        <div className="homepage__header">
          <h1>Dashboard</h1>
        </div>
        <Card>
          <AreaChart workouts={mapped}/>
        </Card>
        <div className="homepage__section">
          <Link to="./workout">Add Workout</Link>
          <img src="./biking.svg" alt="biking" />
        </div>
      </div>
    </Layout>
  )
}

export default Homepage
