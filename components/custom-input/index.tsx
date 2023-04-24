import React, { useState } from 'react'
import { InputContainer, Error } from './styledComponents'

type InputProps = {
  label: string
  type: string
  value: string
  error: string
  onChange?: (value: string) => void
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, error }) => {
  const [focused, setFocused] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <>
      <InputContainer focused={focused} error={error}>
        <div className='label'>{label}</div>
        <input
          className='input'
          type={type}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </InputContainer>
      {error && <Error>{error}</Error>}
    </>
  )
}

export default Input
