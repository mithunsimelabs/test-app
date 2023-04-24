import { styled } from '@mui/material/styles'

export const StyledModalContainer = styled('div')(({ theme }) => ({
  width: 830,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
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

export const StyledModalBody = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 24px 20px 24px',
  '& .item': {
    width: '100%',
    marginTop: 20
  },
  [theme.breakpoints.down('sm')]: {}
}))
