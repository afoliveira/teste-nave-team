import React from 'react'
import {Label, TextInput} from './styles'

const Input = ({label, type, name, placeholder, width, onChange, value, required}) => {
  return (
    <div>
      <Label className='label' htmlFor={name}>{label}</Label>
      <TextInput
        required={required}
        id={name} 
        name={name} 
        className='input' 
        type={type} 
        placeholder={placeholder} 
        maxWidth={width}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input;

