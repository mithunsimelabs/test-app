import { styled } from '@mui/material/styles'

export const StyledDiv = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: 31,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  marginTop: 24,
  '& .opened-container': {
    height: 31,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: 16,
    padding: '6px 0px 6px 14px',
    cursor: 'pointer'
  },
  '& .btm-container': {
    padding: '26px 62px 16px 62px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '& .row': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 22
    },
    '& .head': {
      fontSize: 16,
      fontWeight: 500,
      color: theme.palette.text.secondary
    },
    '& .child': {
      fontSize: 14,
      fontWeight: 400,
      color: theme.palette.text.primary,
      '& .action': {
        color: theme.palette.primary.main,
        fontSize: 14,
        fontWeight: 400
      }
    },
    '& .btn-action-container': {
      width: '100%',
      maxWidth: 154
    }
  },
  [theme.breakpoints.down('xl')]: {
    minHeight: 26,
    marginTop: 19,
    '& .opened-container': {
      height: 26,
      fontSize: 14,
      padding: '6px 0px 6px 14px'
    },
    '& .btm-container': {
      padding: '21px 57px 11px 57px',
      '& .row': {
        marginBottom: 17
      },
      '& .head': {
        fontSize: 14
      },
      '& .child': {
        fontSize: 12,
        '& .action': {
          fontSize: 12
        }
      },
      '& .btn-action-container': {
        //maxWidth: 154
      }
    }
  }
}))
