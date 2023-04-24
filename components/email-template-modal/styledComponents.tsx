import { styled } from '@mui/material/styles'

export const StyledModalContainer = styled('div')(({ theme }) => ({
  width: 896,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  minHeight: 177,
  borderRadius: 14,
  '& .divider': {
    paddingRight: 26,
    paddingLeft: 25
  },

  [theme.breakpoints.down('sm')]: {}
}))

export const StyledModalHead = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '20px 24px',
  backgrounColor: 'rgb(241, 241, 241)',
  // borderBottom:`1px solid ${theme.palette.divider}`,
  fontSize: 24,
  color: theme.palette.text.primary,
  fontWeight: 600,
  '& .switch': {
    marginLeft: 20
  },

  [theme.breakpoints.down('sm')]: {}
}))

export const StyledModalBody = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  minHeight: 477,
  display: 'flex',
  overflowY: 'auto',
  flexDirection: 'column',
  padding: '20px 24px',
  '& .filename': {
    fontWeight: 500,
    fontSize: 20
  },

  '& .item': {
    width: '100%',
    marginTop: 50,
    marginBottom: 20
  },
  '& .item1': {
    marginTop: 100
  },

  '& .choose': {
    fontSize: '1.125rem',
    fontWeight: '500'
  },
  '& .head': {
    fontSize: '1.125rem',
    fontWeight: '600'
  },
  '& .head2': {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginLeft: '30px',
    marginTop: '10px'
  },
  '& .head3': {
    fontSize: '1.125rem',
    fontWeight: '600'
  },
  '& .main': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  '& .main2': {
    // marginRight: theme.spacing(11),
    whiteSpace: 'nowrap',
    fontWeight: 500,
    fontSize: 16
  },
  '& .main3': {
    marginRight: theme.spacing(19),
    fontWeight: 500,
    fontSize: 16
  },
  '& .dynamic': {
    color: theme.palette.primary.main
  },
  '& .right': {
    display: 'flex'
  },
  '& .right1': {
    width: '50%'
  },
  '& .right2': {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '80px'
  },
  '& .right3': {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '130px'
  },
  '& .head1': {
    fontWeight: '450'
  },
  '& .sentence': {
    marginLeft: '-60px',
    marginTop: '20px',
    whiteSpace: 'nowrap'
  },
  '& .sentence1': {
    marginLeft: '80px',
    marginTop: '20px'
  },
  '& .item2': {
    width: '100%',
    height: '50px'
  },
  '& .item3': {
    marginTop: '150px'
  },
  '& .buttonns': {
    marginTop: 40
  },
  '& .MuiButton-fullWidth': {
    width: '100%'
  },
  '& .text': {
    display: 'flex',
    flexDirection: 'coloumn'
  },
  '& .text1': {
    display: 'flex',
    flexDirection: 'coloumn',
    marginTop: 15
  },
  '& .box': {
    border: '1px solid #ccc',
    padding: '10px',
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center'
  },
  '& .box1': {
    paddingRight: 20
  },
  '& .word': {
    margin: '0 10px'
  },
  '& .head4': {
    marginTop: 30,
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: 10
  },
  '& .editor': {
    border: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(1),
    minHeight: 200
  },
  '& .quill': {
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 15
  },
  [theme.breakpoints.down('sm')]: {
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  [theme.breakpoints.down('md')]: {
    overflowY: 'auto',
    overflowX: 'hidden'
  }
}))
