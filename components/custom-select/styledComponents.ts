import { styled } from '@mui/material/styles'
import { FormControl, Select } from '@mui/material'

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
  color: error ? theme.palette.error.main : theme.palette.text.primary,
  [theme.breakpoints.down('xl')]: {
    fontSize: 16
  }
}))

export const StyledSelect = styled(Select)<CustomInputLabelProps>(({ theme, error }) => ({
  width: '100%',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? theme.palette.error.main : theme.palette.divider,
    borderRadius: 8
  },
  '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: error ? theme.palette.error.main : theme.palette.divider,
    borderRadius: 8
  }
}))
