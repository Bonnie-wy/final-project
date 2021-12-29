import React from 'react'
import './Button.css'

export const Button = ({ label, onClick, type="button", isPrimary=true }) => {

  return (
    <button
      type={type}
      className={isPrimary ? 'buttonPrimary' : 'buttonSecondary'}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
