import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'
import { collection, addDoc } from 'firebase/firestore'
import { projectFirestore } from '../firebase'
import moment from 'moment'
import { Button } from './Button'
import  Card  from './Card'
import './Form.css'

const Form = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [exercise, setExercise] = useState('');
  const [distance, setDistance] = useState('');
  const [Duration, setDuration] = useState('');

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(projectFirestore, 'workout'), {
        exercise: exercise,
        distance: distance,
        duration: Duration,
        userId: user.uid,
        timeStamp: moment().format('DD/MM/YYYY')
      });
      navigate('../')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form__container">
      <h1>Workout</h1>
      <Card>
        <form>
          <label htmlFor="exercise">Exercise</label>
          <input
            id="exercise"
            name="exercise"
            type="text"
            placeholder="Running"
            onChange={(e) => setExercise(e.target.value)}
          />
          <label htmlFor="distance">Distance (in km)</label>
          <input
            id="distance"
            name="distance"
            type="text"
            placeholder="5"
            onChange={(e) => setDistance(e.target.value)}
          />
          <label htmlFor="Duration">Duration (in minutes)</label>
          <input
            id="Duration"
            name="Duration"
            type="text"
            placeholder="45"
            onChange={(e) => setDuration(e.target.value)}
          />
          <Button
            label="Add"
            onClick={handleSubmit}
            isPrimary={false}
          />
        </form>
      </Card>
    </div>
  )
}

export default Form
