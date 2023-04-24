import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 32px',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8
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
  '& .inner-card-grid': {
    display: 'grid',
    gridTemplateColumns: '64% 34%',

    '& .dual-input': {
      display: 'grid',
      gridTemplateColumns: '47% 47%',
      justifyContent: 'space-between'
    }
  },

  '& .first-container': {
    display: 'flex',
    flexBasis: '90%',
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
  }
}))
