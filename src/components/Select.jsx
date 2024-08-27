import React from 'react'

function Select({label,id,name,value,onChange,error,option}) {
 const optionValue = option.map((elem,key)=>{
  return <option key={key} value={elem} >{elem}</option>
 })
  return (
    <div className="input-container">
    <label htmlFor={label} >{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
     
    >
      <option value="" hidden>Select Category</option>

      {optionValue}
    </select>
    <p className="error-message">{error}</p> 
  </div>
  )
}

export default Select