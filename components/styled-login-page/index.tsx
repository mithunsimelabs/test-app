import { styled } from '@mui/material/styles'
import { FormControlLabel } from '@mui/material'

export const CustomLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    //line-height: 22px;
    color: '#838BA3'
  },
  [theme.breakpoints.down('xl')]: {
    '& .MuiTypography-root': {
      fontSize: 16
    }
  }
}))
export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: '90px 81px 90px 97px',
  display: 'flex',
  flexDirection: 'column',
  //justifyContent:"space-between",
  fontStyle: 'normal',
  '& .main-container': {
    width: '100%',
    display: 'flex',
    marginTop: 110,
    flexDirection: 'column',
    '& .text-container': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      '& .heading': {
        fontWeight: 700,
        fontSize: 36,
        // lineHeight: "44px",
        color: theme.palette.primary.main
      },
      '& .description': {
        fontWeight: 400,
        fontSize: 18,
        lineHeight: '22px',
        marginTop: 18,
        color: 'rgba(0, 0, 0, 0.6)'
      }
    },
    '& .input-container': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 50,
      '& .input-item': {
        width: '100%',
        marginTop: 23
      },
      '& .bottom-section': {
        width: '100%',
        marginTop: 23,
        paddingLeft: 22,
        paddingRight: 22,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& .link': {
          textDecoration: 'none',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 18,
          //lineHeight: "22px",
          color: '#838BA3'
        }
      }
    },
    '& .action-container': {
      marginTop: 52,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      '& .MuiButtonBase-root': {
        fontSize: 18,
        //lineHeight: "22px",
        fontWeight: 400,
        minWidth: 162
      },
      '& .MuiButton-outlined': {
        marginLeft: 41
      }
    }
  },
  '& .footer': {
    marginTop: 120,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    color: '#838BA3',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .label': {
      fontWeight: 700,
      color: theme.palette.primary.main,
      marginLeft: 74,
      cursor: 'pointer'
    }
  },
  [theme.breakpoints.down('xl')]: {
    padding: '40px 81px 40px 97px',
    '& .main-container': {
      marginTop: 40,
      '& .text-container': {
        '& .heading': {
          fontSize: 34
        },
        '& .description': {
          fontSize: 16
        }
      },
      '& .input-container': {
        marginTop: 20,
        '& .input-item': {
          marginTop: 18
        },
        '& .bottom-section': {
          marginTop: 18,
          '& .link': {
            fontSize: 16
          }
        }
      },
      '& .action-container': {
        marginTop: 32,
        '& .MuiButtonBase-root': {
          fontSize: 16
        },
        '& .MuiButton-outlined': {
          marginLeft: 31
        }
      }
    },
    '& .footer': {
      marginTop: 50
    }
  },
  [theme.breakpoints.down('lg')]: {
    '& .main-container': {
      marginTop: 30
    }
  },
  [theme.breakpoints.down('sm')]: {
    padding: 20,
    '& .main-container': {
      '& .text-container': {
        '& .heading': {},
        '& .description': {}
      },
      '& .input-container': {
        '& .input-item': {},
        '& .bottom-section': {
          paddingLeft: 10,
          paddingRight: 10,
          '& .link': {}
        }
      }
    },
    '& .footer': {
      '& .label': {
        marginLeft: 10
      }
    }
  }
}))
