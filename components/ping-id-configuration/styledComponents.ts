import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
  padding: 32,
  display: 'flex',
  fontSize: 16,
  color: theme.palette.text.primary,
  flexDirection: 'column',
  '& .tab-title': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 600,
    marginBottom: 30
  },
  '& .row-item': {
    width: '100%',
    display: 'flex',
    // alignItems:"center",
    marginBottom: 16,
    '& .label-div': {
      marginTop: 5,
      fontWeight: 500,
      lineHeight: '16px',
      minWidth: 200,
      display: 'flex',
      '& .info': {
        marginLeft: 10,
        cursor: 'pointer',
        borderRadius: '50%',
        border: `1px solid ${theme.palette.text.secondary}`,
        color: theme.palette.text.secondary,
        width: 15,
        height: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    '& .input-container': {
      marginLeft: 30,
      width: 500
    }
  },
  '& .btn-action': {
    marginTop: 50,
    width: '100%',
    maxWidth: 450
  },
  [theme.breakpoints.down('xl')]: {
    padding: 27,
    fontSize: 14,
    '& .tab-title': {
      marginBottom: 25
    },
    '& .row-item': {
      marginBottom: 11,
      '& .label-div': {
        lineHeight: '14px',
        minWidth: 180
      },
      '& .info': {
        // marginLeft:10,
        // width:15,
        // height:15,
      },
      '& .input-container': {
        marginLeft: 20,
        width: 400
      }
    },
    '& .btn-action': {
      marginTop: 30
      //maxWidth:450
    }
  },
  [theme.breakpoints.down('lg')]: {
    '& .row-item': {
      '& .input-container': {
        marginLeft: 20,
        width: 350
      }
    }
  }
}))
