import { styled } from '@mui/material/styles'
import Chip from '@mui/material/Chip'
import Input from '@mui/material/Input'

export const StyledInput = styled(Input)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  color: '#333333',
  letterSpacing: '0.15px',
  border: '1px solid #D2D2D2',
  borderRadius: 8,
  padding: '12px 16px',
  '&:hover:not(.Mui-disabled):before': {
    borderBottom: 'none',
    boxShadow: 'none'
  },
  '&.Mui-focused:after': {
    borderBottom: 'none',
    boxShadow: 'none'
  },
  '&:before': {
    content: 'none'
  },
  '& .MuiButtonBase-root': {
    color: theme.palette.text.secondary,
    fontSize: 14,
    fontWeight: 400,
    marginRight: 10
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: 14,
    '& .MuiButtonBase-root': {
      fontSize: 12
    }
  }
}))

export const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: 25,
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.light,
  height: 23,
  display: 'flex',
  alignItems: 'center',
  marginRight: 5,
  '& .MuiChip-deleteIcon': {
    marginRight: '4px',
    marginLeft: 0,
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  '& .MuiChip-label': {
    paddingRight: 5,
    fontWeight: 400,
    fontSize: 12
  },
  '&:focus': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light
  },
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light
  },
  [theme.breakpoints.down('xl')]: {
    '& .MuiChip-label': {
      fontSize: 10
    }
  }
}))
