import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 1030,
  height: 'auto',
  minHeight: 56,
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  '& .search-container': {
    width: '100%',
    paddingLeft: 50,
    paddingRight: 50,
    '& .search-bar': {
      border: 'none',
      height: 56
    }
  },
  '& .btm-section': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    '& .card-container': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 20,
      paddingBottom: 20
    },
    '& .skelton': {
      border: `1px solid ${theme.palette.divider}`
    },
    '& .action-section': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 48,
      marginTop: 10,
      '& .MuiButtonBase-root': {
        borderRadius: 8,
        minHeight: 41
      },
      '& .MuiButton-containedSecondary': {
        marginRight: 16,
        backgroundColor: theme.palette.divider
      }
    }
  },
  [theme.breakpoints.down('xl')]: {
    '& .search-container': {
      paddingLeft: 30,
      paddingRight: 30
    },
    '& .btm-section': {
      '& .card-container': {
        paddingTop: 10,
        paddingBottom: 10
      },
      '& .action-section': {
        paddingRight: 28,
        '& .MuiButton-containedSecondary': {
          marginRight: 11
        }
      }
    }
  }
}))

export const StyledBox = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 20,
  paddingRight: 20,
  '& .MuiPopover-paper': {
    borderRadius: 20,
    border: `1px solid ${theme.palette.divider}`
  },
  '& .icons': {
    color: theme.palette.text.secondary
  },
  [theme.breakpoints.down('xl')]: {
    paddingLeft: 10,
    paddingRight: 10
  }
}))

export const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 14,
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  '& .label': {
    display: 'flex',
    alignItems: 'center'
  },
  '& .count': {
    fontSize: 10,
    marginLeft: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 24
  },
  '&.Mui-selected': {
    //fontWeight: 600,
    color: theme.palette.text.primary
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: 12,
    '& .count': {
      fontSize: 8,
      marginLeft: 6
    }
  }
}))

export const StyledUserCard = styled('div')(({ theme }) => ({
  width: '100%',
  height: 60,
  padding: '9px 48px 9px 38px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderLeft: `10px solid transparent`,
  cursor: 'pointer',
  marginBottom: 16,
  '& .userType': {
    fontWeight: 400,
    fontSize: 14,
    color: theme.palette.text.secondary
  },
  '& .user-info': {
    display: 'flex',
    '& .user-data': {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 13,
      color: theme.palette.text.primary,
      '& .name': {
        textTransform: 'capitalize',
        fontWeight: 600,
        fontSize: 16,
        marginBottom: 4
      },
      '& .email': {
        fontWeight: 400,
        fontSize: 12
      }
    }
  },
  '&:hover': {
    borderLeft: `10px solid ${theme.palette.primary.main}`
  },
  [theme.breakpoints.down('xl')]: {
    height: 50,
    padding: '5px 28px 5px 18px',
    borderLeft: `7px solid transparent`,
    marginBottom: 11,
    '& .userType': {
      fontSize: 12
    },
    '& .user-info': {
      '& .user-data': {
        marginLeft: 10,
        '& .name': {
          fontSize: 14
        },
        '& .email': {
          fontSize: 10
        }
      }
    },
    '&:hover': {
      borderLeft: `7px solid ${theme.palette.primary.main}`
    }
  }
}))

export const StyledPopoverContent = styled('div')(({ theme }) => ({
  width: 144,
  height: 'auto',
  padding: '8px 12px',
  // borderRadius: 20,
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  '& .items': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 500,
    fontSize: 14,
    color: theme.palette.text.primary,
    height: 40,
    marginBottom: 10
  },
  [theme.breakpoints.down('xl')]: {
    width: 120,
    '& .items': {
      fontSize: 12,
      color: theme.palette.text.primary,
      height: 30
    }
  }
}))
