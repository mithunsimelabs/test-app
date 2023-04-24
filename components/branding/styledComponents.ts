import { styled } from '@mui/material/styles'

interface schemeProps {
  primary?: string
  secondary?: string
  teritiary?: string
  bgColor?: string
}

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '32px 40px 48px',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  '& .title': {
    fontWeight: 500,
    fontSize: 16,
    color: theme.palette.text.primary,
    width: '100%'
  },
  '& .description': {
    fontWeight: 400,
    fontSize: 14,
    color: theme.palette.text.secondary,
    marginTop: 8,
    width: '100%'
  },
  '& .container': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 0px'
  },
  '& .divider': {
    marginTop: 24,
    marginBottom: 8
  },
  [theme.breakpoints.down('xl')]: {
    padding: '27px 35px 43px',
    '& .title': {
      fontSize: 14
    },
    '& .description': {
      fontSize: 12
    },
    '& .container': {
      padding: '19px 0px'
    },
    '& .divider': {
      marginTop: 20,
      marginBottom: 5
    }
  },
  [theme.breakpoints.down('sm')]: {}
}))

export const StyledBottomContainer = styled('div')(({ theme }) => ({
  width: '100%',
  paddingTop: 8,
  display: 'flex',
  '& .first-container': {
    width: '100%',
    '& .row': {
      display: 'flex',
      alignItems: 'center',
      '& .second': {
        marginLeft: 35
      }
    },
    '& .MuiFormGroup-root': {
      marginTop: 3,
      display: 'flex',
      flexDirection: 'row',
      '& .MuiFormControlLabel-label': {
        fontSize: 12,
        fontWeight: 500,
        color: theme.palette.text.secondary
      },
      '& .align-left': {
        marginLeft: 90
      }
    }
  },
  '& .preview-container': {
    marginLeft: 10,
    width: 'auto',
    height: 'auto',
    maxHeight: 308,
    maxWidth: 474,
    // borderRadius:8,
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    fontSize: 12,
    color: '#DB0808',
    overflow: 'hidden'
  },
  [theme.breakpoints.down('xl')]: {
    flexDirection: 'column',
    paddingTop: 5,
    '& .first-container': {
      '& .row': {
        '& .second': {
          //marginLeft:70
        }
      },
      '& .MuiFormGroup-root': {
        marginTop: 3,
        '& .MuiFormControlLabel-label': {
          fontSize: 10
        },
        '& .align-left': {
          marginLeft: 100
        }
      }
    },
    '& .preview-container': {
      marginLeft: 0,
      // maxHeight: 308,
      // maxWidth: 474,
      fontSize: 10,
      marginTop: 20
    }
  }
}))

export const StyledScheme = styled('div')<schemeProps>(({ theme, primary, secondary, teritiary, bgColor }) => ({
  width: 'auto',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: 8,
  height: 53,
  border: `1px solid ${theme.palette.divider}`,
  '& .primary': {
    width: 47,
    height: '100%',
    backgroundColor: primary ? primary : 'transparent'
  },
  '& .secondary': {
    width: 47,
    height: '100%',
    backgroundColor: secondary ? secondary : 'transparent'
  },
  '& .teritiary': {
    width: 47,
    height: '100%',
    backgroundColor: teritiary ? teritiary : 'transparent'
  },
  '& .bg': {
    width: 47,
    height: '100%',
    backgroundColor: bgColor ? bgColor : 'transparent'
  }
}))

export const StyledColorPickerContainer = styled('div')(({ theme }) => ({
  marginTop: 38,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 276,
  height: 'auto',
  '& .item': {
    height: 42,
    padding: '13px 8px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: 12
  },
  '& .mb': {
    marginBottom: 16
  },
  [theme.breakpoints.down('xl')]: {
    marginTop: 10,
    '& .item': {
      fontSize: 10
    },
    '& .mb': {
      marginBottom: 11
    }
  }
}))
