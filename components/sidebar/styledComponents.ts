import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  width: 88,
  minHeight: '100vh',
  overflowX: 'auto',
  padding: '32px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 7,
  lineHeight: '8px',
  letterSpacing: '-0.04em',
  background: theme.palette.primary.main,
  color: '#FFFFFF',
  zIndex: 999,
  '& .topContainer': {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  '& .navlinkContainer': {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 88
  },
  [theme.breakpoints.down('xl')]: {
    padding: '22px 0px',
    '& .navlinkContainer': {
      marginTop: 68
    }
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

interface StyledNavLinkProps {
  active: boolean
}

export const StyledNavLink = styled('div')<StyledNavLinkProps>(({ theme, active }) => ({
  marginTop: 32,
  borderRadius: '50%',
  width: 56,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: active ? '#FFFFFF' : 'transparent',
  color: active ? theme.palette.primary.main : '#FFFFFF',
  '& >svg>path': {
    fill: active ? theme.palette.primary.main : '#FFFFFF'
  },
  '&:hover': {
    backgroundColor: '#FFFFFF',
    color: theme.palette.primary.main,
    '& >svg>path': {
      fill: theme.palette.primary.main
    }
  },
  [theme.breakpoints.down('sm')]: {}
}))
