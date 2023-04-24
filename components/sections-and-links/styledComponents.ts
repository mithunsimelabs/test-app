import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: 32,
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  '& .first-container': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .inner-sub-container': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  '& .title': {
    fontWeight: 500,
    fontSize: 16,
    color: theme.palette.text.primary,
    width: '100%'
  },
  '& .info': {
    fontWeight: 400,
    fontSize: 14,
    color: theme.palette.text.secondary,
    marginTop: 8,
    width: '100%'
  },
  '& .MuiFormGroup-root': {
    marginTop: 32,
    display: 'flex',
    flexDirection: 'row',
    '& .MuiFormControlLabel-label': {
      fontSize: 12,
      fontWeight: 500,
      color: theme.palette.text.primary
    },
    '& .align-left': {
      marginLeft: 73
    }
  },
  '& .img-input-container': {
    width: '100%',
    marginTop: 33
  },
  '& .separator': {
    marginTop: 32,
    marginBottom: 32
  },
  [theme.breakpoints.down('xl')]: {
    padding: 27,
    '& .title': {
      fontSize: 14
    },
    '& .info': {
      fontSize: 12
    },
    '& .MuiFormGroup-root': {
      marginTop: 27,
      '& .MuiFormControlLabel-label': {
        fontSize: 10
      },
      '& .align-left': {
        marginLeft: 33
      }
    },
    '& .img-input-container': {
      marginTop: 28
    },
    '& .separator': {
      marginTop: 27,
      marginBottom: 27
    }
  }
}))
