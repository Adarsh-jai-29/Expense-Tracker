import React from 'react'

function Input({label,id,type,name,value,onChange,error}) {
  return (
    <div className="input-container">
    <label htmlFor={label}>{label}</label>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
    <p className="error-message">{error}</p>
  </div>
  )
}

export default Input