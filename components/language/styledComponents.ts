import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: 32,
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  '& .title': {
    width: '100%',
    fontWeight: 600,
    fontSize: 16,
    color: theme.palette.text.primary
  },
  '& .sub-title': {
    fontWeight: 500
  },
  '& .second-row': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32
  },
  '& .default-language-container': {
    width: '100%',
    maxWidth: 400
  },
  '& .MuiDivider-root': {
    marginTop: 32,
    marginBottom: 32
  },

  '& .select-container': {
    width: '100%',
    maxWidth: 1296,
    marginTop: 32,
    marginBottom: 24
  },
  '& .action-container': {
    display: 'flex',
    alignItems: 'center',
    '& .ml': {
      marginLeft: 24
    }
  },
  [theme.breakpoints.down('xl')]: {
    padding: 27,
    '& .title': {
      fontSize: 14
    },
    '& .second-row': {
      marginTop: 27
    },
    '& .MuiDivider-root': {
      marginTop: 27,
      marginBottom: 27
    },
    '& .select-container': {
      marginTop: 27,
      marginBottom: 19
    },
    '& .action-container': {
      '& .ml': {
        marginLeft: 19
      }
    }
  }
}))

export const StyledButton = styled('button')(({ theme }) => ({
  background: 'rgba(25, 59, 103, 0.05)',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  padding: '8px 14px',
  width: 'auto',
  height: 32,
  fontSize: 12,
  fontWeight: 500,
  color: theme.palette.primary.main,
  border: 'none',
  cursor: 'pointer',
  '& .icon': {
    marginRight: 10
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: 10,
    height: 27
  }
}))
