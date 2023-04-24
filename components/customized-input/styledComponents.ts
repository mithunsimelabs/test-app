import { styled } from '@mui/material/styles'
import { FormControl, TextField } from '@mui/material'

interface CustomInputLabelProps {
  error: boolean
}

export const StyledFormControl = styled(FormControl)(() => ({
  width: '100%'
}))

export const StyledInputLabel = styled('div')<CustomInputLabelProps>(({ theme, error }) => ({
  width: '100%',
  fontSize: 18,
  fontWeight: 600,
  marginBottom: 12,
  color: error ? theme.palette.error.main : theme.palette.text.primary
}))

export const StyledTextField = styled(TextField)<CustomInputLabelProps>(({ theme, error }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: error ? theme.palette.error.main : theme.palette.divider,
      borderRadius: 8
    },
    '&:hover fieldset': {
      borderColor: error ? theme.palette.error.main : theme.palette.divider
    },
    '&.Mui-focused fieldset': {
      borderColor: error ? theme.palette.error.main : theme.palette.divider
    }
  }
}))
