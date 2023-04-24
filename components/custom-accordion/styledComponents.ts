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
    fontSize: 20,
    padding: '6px 0px 6px 14px',
    cursor: 'pointer'
  },
  '& .btm-container': {
    padding: '26px 62px 16px 62px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: 18,
    lineHeight: '1.5'
  }
}))
