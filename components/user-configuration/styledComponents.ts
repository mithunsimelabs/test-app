import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 32px',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8
}))
