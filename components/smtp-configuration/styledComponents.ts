import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '0px 32px',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  '& .submit-btn-container': {
    padding: '32px 0px',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  [theme.breakpoints.down('xl')]: {
    padding: '0px 27px'
  }
}))

export const StyledCard = styled('div')(({ theme }) => ({
  padding: '32px 0px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  '& .first-section': {
    // width:"100%",
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
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
    }
  },
  '& .input-section': {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20
  }
}))
