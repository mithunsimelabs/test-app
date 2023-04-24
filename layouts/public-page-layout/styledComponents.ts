import { styled } from '@mui/material/styles'

export const StyledDiv = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  minHeight: '100vh',
  display: 'flex',
  '& .first-container': {
    width: '100%',
    flex: 1,
    display: 'flex',
    //   alignItems:"center",
    //   justifyContent:"center",
    backgroundColor: theme.palette.bgColor.main
  },
  '& .second-container': {
    width: '100%',
    flex: 1,
    display: 'flex',
    backgroundColor: theme.palette.primary.main
  },
  [theme.breakpoints.down('md')]: {
    '& .second-container': {
      display: 'none'
    }
  },
  [theme.breakpoints.down('md')]: {
    '& .second-container': {
      display: 'none'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& .second-container': {
      display: 'none'
    }
  }
}))
