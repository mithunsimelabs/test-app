import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.bgColor.main,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: 186,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  /* align-items: center; */
  fontStyle: 'normal',
  fontWeight: 600,
  paddingLeft: 128,
  paddingRight: 40,
  zIndex: 998,
  '& .innerContainer': {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    /* align-items: center; */
    paddingBottom: 32,
    paddingTop: 80
  },
  '& .pageTitle': {
    /* align-self: flex-end; */
    display: 'flex',
    flexDirection: 'column',
    fontSize: 32,
    //lineHeight: "39px",
    letterSpacing: '-0.04em',
    color: '#1A242A'
  },
  '& .description': {
    fontWeight: 400,
    fontSize: 16,
    //lineHeight: "19px",
    letterSpacing: '-0.04em',
    color: '#445F6F',
    marginTop: 16
  },
  '& .popover': {
    color: theme.palette.text.primary
  },

  '& .bottomDivider': {
    border: '1px solid rgba(221, 229, 234, 0.6)'
  },
  [theme.breakpoints.down('xl')]: {
    height: 146,
    paddingLeft: 118,
    paddingRight: 30,
    '& .innerContainer': {
      paddingBottom: 22,
      paddingTop: 50
    },
    '& .pageTitle': {
      fontSize: 30
    },
    '& .description': {
      fontSize: 14,
      marginTop: 12
    }
  },
  [theme.breakpoints.down('lg')]: {
    height: 124,
    '& .innerContainer': {
      paddingBottom: 20,
      paddingTop: 30
    }
  },
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 20,
    paddingRight: 20,
    '& .innerContainer': {
      paddingTop: 20
    }
  }
}))

export const UserMenu = styled('div')(({ theme }) => ({
  border: '1px solid rgba(171, 174, 176, 0.3)',
  borderRadius: 34,
  width: 'auto',
  minWidth: 130,
  height: 52,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  //padding: "10px 20px 10px 20px",
  padding: 10,
  fontSize: 14,
  lineHeight: '17px',
  letterSpacing: '-0.04em',
  color: '#000000',
  '& .username': {
    marginLeft: 10
  },
  [theme.breakpoints.down('sm')]: {}
}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  padding: '0px 5px',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: 14,
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  },
  '& >svg>path': {
    fill: theme.palette.primary.main
  },
  '& >span': {
    marginLeft: 5
  },
  '& .emailpop': {
    textAlign: 'center',
    width: '150px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  '& .SignOut': {
    fontWeight: 700,
    textAlign: 'center',
    width: '150px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: 12
  }
}))

export const StyledPopoverContent = styled('div')(({ theme }) => ({
  minWidth: 70,
  height: 'auto',
  padding: '5px 0px',
  borderRadius: 6,
  alignItems: 'center',
  border: `1px solid ${theme.palette.divider}`
}))
