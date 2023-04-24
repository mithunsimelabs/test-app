import { styled } from '@mui/material/styles'
import { IconButton, TextField } from '@mui/material'

interface TextFieldProp {
  active: boolean
}

export const InputWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  '& .non-editable': {
    fontWeight: 600,
    fontSize: 18
    // flex:1
  },
  [theme.breakpoints.down('xl')]: {
    '& .non-editable': {
      fontSize: 16
    }
  }
}))

export const StyledTextField = styled(TextField)<TextFieldProp>(({ theme, active }) => ({
  flex: 1,
  fontWeight: 600,
  fontSize: 18,
  color: theme.palette.text.primary,
  '& .Mui-disabled': {
    fontWeight: 600,
    fontSize: 18,
    padding: 0,
    color: `${theme.palette.text.primary} !important`,
    '-webkit-text-fill-color': `${theme.palette.text.primary} !important`
  },
  '& .MuiOutlinedInput-root': {
    height: 30,
    fontWeight: 600,
    fontSize: 18,
    '& fieldset': {
      borderRadius: 0,
      border: active ? `1px solid ${theme.palette.divider}` : 'none',
      height: 35
    },
    '&:hover fieldset': {
      border: active ? `1px solid ${theme.palette.divider}` : 'none'
    },
    '&.Mui-focused fieldset': {
      border: active ? `1px solid ${theme.palette.divider}` : 'none'
    }
  },
  [theme.breakpoints.down('xl')]: {
    '& .Mui-disabled': {
      fontSize: 16
    },
    '& .MuiOutlinedInput-root': {
      fontSize: 16
    }
  }
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main
}))
