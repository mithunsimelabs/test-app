import React from 'react'
import { MenuItem, SelectProps, FormHelperText } from '@mui/material'
import { StyledFormControl, StyledInputLabel, StyledSelect } from './styledComponents'

interface CustomSelectProps extends SelectProps {
  label?: string
  options: { label: string; value: string }[]
  error?: boolean
  helperText?: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  error = false,
  helperText = '',
  required,
  ...props
}) => {
  return (
    <StyledFormControl error={error}>
      {label && <StyledInputLabel error={error}>{required ? `${label} *` : label}</StyledInputLabel>}
      <StyledSelect {...props} error={error}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  )
}

export default CustomSelect
