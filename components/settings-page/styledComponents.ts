import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

export const StyledSettingsPageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 8,
  [theme.breakpoints.down('xl')]: {
    paddingTop: 3
  },
  [theme.breakpoints.down('sm')]: {}
}))

export const StyledBox = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}))

export const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 16,
  textTransform: 'capitalize',
  color: '#445F6F',
  '&.Mui-selected': {
    //fontWeight: 600,
    color: '#1A242A'
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: 14
  }
}))
