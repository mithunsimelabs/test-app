import { styled } from '@mui/material/styles'

export const StyledModalContainer = styled('div')(({ theme }) => ({
  width: 896,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  minHeight: 477,
  [theme.breakpoints.down('sm')]: {}
}))

export const StyledModalHead = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '20px 24px',
  backgrounColor: 'rgb(243,244,246)',
  borderBottom: `1px solid ${theme.palette.divider}`,
  fontSize: 24,
  color: theme.palette.text.primary,
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {}
}))

export const Buttonss = styled('div')(() => ({
  '& .container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 110,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#EBEBEB '
    }
  },
  '& .icon': {
    fontSize: 50,
    color: '#212121',
    marginBottom: 10
  },
  '& .label': {
    fontSize: 14,
    color: '#212121',
    fontWeight: 600
  }
}))

export const StyledModalBody = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  minHeight: 477,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 24px',
  '& .item': {
    width: '100%',
    marginTop: 20
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
  [theme.breakpoints.down('sm')]: {
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  [theme.breakpoints.down('md')]: {
    overflowY: 'auto',
    overflowX: 'hidden'
  }
}))
