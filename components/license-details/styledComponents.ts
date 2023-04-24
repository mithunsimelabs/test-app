import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '32px 40px 48px',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  '& .first-row': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 500,
    fontSize: 14,
    color: '#445F6F'
  },
  [theme.breakpoints.down('xl')]: {
    padding: '27px 35px 43px',
    '& .first-row': {
      fontSize: 12
    }
  },
  [theme.breakpoints.down('sm')]: {}
}))

export const StyledBottomContainer = styled('div')(({ theme }) => ({
  width: '100%',
  //padding:32,
  paddingTop: 32,
  display: 'flex',
  '& .divider': {
    marginRight: 40,
    marginLeft: 40
  },
  '& .license-card': {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    '& .card-title': {
      fontWeight: 600,
      fontSize: 14,
      color: '#7697AB',
      marginBottom: 16
    },
    '& .details-section': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      '& .details-row': {
        display: 'flex',
        width: '100%',
        fontSize: 16,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 400,
        color: theme.palette.text.primary,
        '& .check-icon': {
          color: theme.palette.secondary.main
        },
        '& .head': {
          fontWeight: 600,
          marginRight: 15
        }
      }
      // "& .first-section":{
      //     width:"100%",
      //     display:"flex",
      //     flexDirection:"column",
      //     fontWeight: 600,
      //     fontSize: 16,
      //     color: "#1A242A",
      //     "& >div":{
      //         marginBottom:16
      //     }
      // },
      // "& .second-section":{
      //     fontWeight:400,
      //     alignItems:"flex-end",
      //     "& .check-icon":{
      //         color:theme.palette.secondary.main
      //     }
      // }
    }
  },
  [theme.breakpoints.down('xl')]: {
    paddingTop: 22,
    '& .divider': {
      marginRight: 20,
      marginLeft: 20
    },
    '& .license-card': {
      '& .card-title': {
        fontSize: 12,
        marginBottom: 12
      },
      '& .details-section': {
        '& .details-row': {
          fontSize: 11,
          marginBottom: 12
        }
      }
    }
  },
  [theme.breakpoints.down('sm')]: {}
}))
