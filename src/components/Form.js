import React, { useState } from 'react'
import { Button } from './Button'
import './Form.css'

const Form = () => {
  const [exercise, setExercise] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');

  const onClick = () => {
    console.log(exercise, distance, time)
  }

  return (
    <div className="form__container">
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
      <label htmlFor="time">Time (in minutes)</label>
      <input
        id="time"
        name="time"
        type="text"
        placeholder="45"
        onChange={(e) => setTime(e.target.value)}
      />
      <Button
        label="Add"
        onClick={onClick}
      />
    </div>
  )
}

export default Form
