import { styled } from '@mui/material/styles'

export const StyledDiv = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  '& .sub-container': {
    display: 'flex',
    flexDirection: 'column'
  },
  '& .logo-container': {
    width: 75,
    height: 75,
    border: `1px solid ${theme.palette.divider}`,
    background: '#F9FBFC',
    borderRadius: 7
  },
  '& .title': {
    fontWeight: 400,
    fontSize: 14,
    marginTop: 8
  },
  '& .ml': {
    marginLeft: 28
  },
  '& .info': {
    marginTop: 7,
    fontWeight: 400,
    fontSize: 12
  },
  '& .error': {
    color: 'red',
    fontWeight: 400,
    fontSize: 12
  },
  [theme.breakpoints.down('xl')]: {
    '& .logo-container': {
      width: 65,
      height: 65
    },
    '& .title': {
      fontSize: 12,
      marginTop: 5
    },
    '& .ml': {
      marginLeft: 20
    },
    '& .info': {
      marginTop: 4,
      fontSize: 10
    },
    '& .error': {
      fontSize: 10
    }
  }
}))

export const StyledButton = styled('button')(({ theme }) => ({
  background: 'rgba(25, 59, 103, 0.05)',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  padding: '8px 14px',
  justifyContent: 'space-between',
  width: 106,
  height: 36,
  fontSize: 16,
  fontWeight: 500,
  color: theme.palette.primary.main,
  border: 'none',
  cursor: 'pointer',
  [theme.breakpoints.down('xl')]: {
    fontSize: 14,
    height: 30,
    width: 100
  }
}))
