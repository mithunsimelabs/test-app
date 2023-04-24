import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  minHeight: '100vh',
  backgroundColor: theme.palette.bgColor.main,
  '& .inner-container': {
    width: '100%',
    height: '100%',
    paddingLeft: 88,
    paddingTop: 186
  },
  '& .child-container': {
    width: '100%',
    height: '100%',
    padding: '0px 40px 40px 40px'
  },
  [theme.breakpoints.down('xl')]: {
    '& .inner-container': {
      paddingTop: 146
    },
    '& .child-container': {
      padding: '0px 30px 30px 30px'
    }
  },
  [theme.breakpoints.down('lg')]: {
    '& .inner-container': {
      paddingTop: 124
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& .inner-container': {
      paddingLeft: 20,
      paddingTop: 146
    },
    '& .child-container': {
      padding: '0px 20px 20px 0px'
    }
  }
}))
