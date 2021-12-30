import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { projectFirestore } from '../firebase'
import Card from '../components/Card'
import Layout from '../components/Layout'
import './Homepage.css'

const Homepage = () => {
  const [workout, setWorkout] = useState(null);
  const mapped = [];

  const getData = async () => {
    try {
      const fetchedData = await getDocs(collection(projectFirestore, 'workout'))

      if (fetchedData) {
        console.log('f',fetchedData)
        return setWorkout(fetchedData);
      }
    } catch(error) {
      console.log('error', error);
    }
  }

  useEffect (() => {
    getData()
    workout && workout.forEach(workout => mapped.push(workout.data()))
    console.log(mapped);
  },[]);

  return (
    <Layout>
      <div className="homepage__container">
        <h1>Dashboard</h1>
        <Card>
          <p>Hey :D</p>
          <p>hi :3</p>
        </Card>
      </div>
    </Layout>
  )
}

export default Homepage
