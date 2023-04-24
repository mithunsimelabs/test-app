import React, { useState } from 'react'
import { TextFieldProps, FormHelperText } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { StyledFormControl, StyledInputLabel, StyledTextField } from './styledComponents'

interface CustomInputProps extends Omit<TextFieldProps, 'variant'> {
  label?: string
  type: 'text' | 'email' | 'number' | 'password'
  error?: boolean
  helperText?: string
}

const CustomizedInput = React.forwardRef<CustomInputProps, any>(
  ({ label, type, error = false, helperText = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
    }
    return (
      <StyledFormControl error={error}>
        {label && <StyledInputLabel error={error}>{props.required ? `${label} *` : label}</StyledInputLabel>}
        <StyledTextField
          type={showPassword ? 'text' : type}
          {...props}
          error={error}
          ref={ref}
          InputProps={{
            endAdornment: type === 'password' && (
              <InputAdornment position='end'>
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge='end'>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </StyledFormControl>
    )
  }
)

CustomizedInput.displayName = 'CustomizedInput'

export default CustomizedInput
