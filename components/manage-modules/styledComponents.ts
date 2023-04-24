import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 32px',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
  [theme.breakpoints.down('xl')]: {
    padding: '0px 27px'
  }
}))

export const StyledCard = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 32,
  paddingBottom: 32,
  '& .inner-card': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  '& .first-container': {
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
  },
  '& .title': {
    width: '100%',
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 8
  },
  '& .description': {
    width: '100%',
    color: theme.palette.text.secondary,
    fontWeight: 400,
    fontSize: 14
  },
  '& .sub-card': {
    marginTop: 30,
    width: '100%',
    borderLeft: `1px solid ${theme.palette.divider}`,
    paddingTop: 10,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    '& .sub-row': {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  },
  [theme.breakpoints.down('xl')]: {
    paddingTop: 27,
    paddingBottom: 27,
    '& .title': {
      fontSize: 14,
      marginBottom: 5
    },
    '& .description': {
      fontSize: 12
    },
    '& .sub-card': {
      marginTop: 20,
      paddingTop: 5,
      paddingLeft: 15
    }
  }
}))
