import React from 'react'
import { FormHelperText, TextFieldProps } from '@mui/material'
import { StyledFormControl, StyledInputLabel, StyledTextarea } from './styledComponent'

interface CustomTextareaProps extends Omit<TextFieldProps, 'variant'> {
  label: string
  error?: boolean
  helperText?: string
}

const CustomizedTextarea: React.FC<CustomTextareaProps> = ({
  label,
  error = false,
  helperText = '',
  required,
  ...props
}) => {
  return (
    <StyledFormControl error={error}>
      <StyledInputLabel error={error}>{required ? `${label} *` : label}</StyledInputLabel>
      <StyledTextarea multiline rows={4} {...props} error={error} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  )
}

export default CustomizedTextarea
