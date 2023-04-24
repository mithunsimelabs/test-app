import { styled } from '@mui/material/styles'

export const YourDevicesContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 32,
  [theme.breakpoints.down('xl')]: {
    paddingTop: 22
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: 20
  }
}))

export const FirstRow = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .searchbar-container': {
    width: '100%',
    maxWidth: 542
  },
  '& .right-action-container': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& .MuiButtonBase-root': {
      marginLeft: 15
    }
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    '& .right-action-container': {
      justifyContent: 'flex-start',
      '& .MuiButtonBase-root': {
        marginTop: 15
      }
    }
  }
}))
