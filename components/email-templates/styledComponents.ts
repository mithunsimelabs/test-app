import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: 32,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    padding: 27
  }
}))
