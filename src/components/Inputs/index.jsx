import React from 'react';
import { Label, TextInput, TextError, Container } from './styles';

const Input = ({
  label,
  type,
  name,
  placeholder,
  width,
  onChange,
  value,
  required,
  error,
}) => {
  return (
    <Container>
      <Label className="label" htmlFor={name}>
        {label}
      </Label>
      <TextInput
        required={required}
        id={name}
        name={name}
        className="input"
        type={type}
        placeholder={placeholder}
        maxWidth={width}
        onChange={onChange}
        value={value}
      />
      <TextError>{error || ''}</TextError>
    </Container>
  );
};

export default Input;
