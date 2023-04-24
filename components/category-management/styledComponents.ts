import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 10px',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8
}))

export const StyledCard = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 15,
  paddingBottom: 32,
  '& .inner-card': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '& .add-button-container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
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
    flexBasis: '100%',
    width: '100%',
    flexDirection: 'column',

    '& .order-table': {
      width: '100%',

      marginTop: '10px',

      '& .header': {
        background: theme.palette.primary.main,
        color: '#FFFF',
        fontWeight: 500,
        fontSize: 16,
        height: '50px',
        display: 'grid',
        gridTemplateColumns: '10% 70% 10%',
        gridGap: 10,
        alignItems: 'center',
        padding: '10px'
      },
      '& .body': {
        '& .row': {
          display: 'grid',
          gridTemplateColumns: '10% 70% 10%',
          gridGap: 10,
          alignItems: 'center',
          padding: '10px',

          '& .action': {
            display: 'flex',
            justifyContent: 'space-between'
          }
        }
      }
    }
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
