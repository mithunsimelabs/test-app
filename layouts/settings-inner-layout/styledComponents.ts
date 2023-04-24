import { styled } from '@mui/material/styles'
interface TabProps {
  active: boolean
}

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  paddingTop: 40,
  display: 'flex',
  minHeight: 'calc(100vh - 290px)',
  [theme.breakpoints.down('xl')]: {
    paddingTop: 30
  },
  [theme.breakpoints.down('sm')]: {}
}))

export const StyledLeftContainer = styled('div')(({ theme }) => ({
  // width:"100%",
  minWidth: 343,
  width: 343,
  paddingRight: 32,
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('xl')]: {
    minWidth: 273,
    width: 273,
    paddingRight: 20
  },
  [theme.breakpoints.down('sm')]: {}
}))

export const StyledRightContainer = styled('div')(({ theme }) => ({
  flex: 1,
  width: '100%',
  paddingLeft: 32,
  [theme.breakpoints.down('xl')]: {
    paddingLeft: 20
  },
  [theme.breakpoints.down('sm')]: {}
}))

export const StyledTab = styled('div')<TabProps>(({ theme, active }) => ({
  width: '100%',
  height: 56,
  padding: '18px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,
  fontWeight: 600,
  fontSize: 16,
  color: active ? '#1A242A' : '#5a6870',
  background: active ? '#F5F5F5' : 'transparent',
  borderRadius: 8,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#F5F5F5'
  },
  [theme.breakpoints.down('xl')]: {
    height: 46,
    padding: '13px 11px',
    marginBottom: 12,
    fontSize: 14
  },
  [theme.breakpoints.down('sm')]: {}
}))
