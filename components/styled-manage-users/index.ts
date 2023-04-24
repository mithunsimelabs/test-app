import { styled } from '@mui/material/styles'

export const StyledManageUsersContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '& .divider': {
    marginTop: 32,
    marginBottom: 32
  },
  [theme.breakpoints.down('xl')]: {
    '& .divider': {
      marginTop: 27,
      marginBottom: 27
    }
  },
  [theme.breakpoints.down('sm')]: {}
}))

export const FirstRow = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .left-action-container': {
    display: 'flex',
    alignItems: 'center',
    '& .MuiButtonBase-root': {
      marginRight: 24
    }
  },
  '& .right-action-container': {
    display: 'flex',
    alignItems: 'center',
    '& .MuiButtonBase-root': {
      marginRight: 24,
      borderRadius: 0,
      border: 'none'
    },
    '& .total-users': {
      fontWeight: 400,
      fontSize: 12,
      color: theme.palette.text.secondary
    }
  },
  [theme.breakpoints.down('xl')]: {
    '& .left-action-container': {
      '& .MuiButtonBase-root': {
        marginRight: 19
      }
    },
    '& .right-action-container': {
      '& .MuiButtonBase-root': {
        marginRight: 19
      },
      '& .total-users': {
        fontSize: 10
      }
    }
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}))

export const BottomContainer = styled('div')(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: 20,
  paddingRight: 20
}))
