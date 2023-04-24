import { styled } from '@mui/material/styles'

interface InputContainerProps {
  focused: boolean
  error: string
}

export const InputContainer = styled('div')<InputContainerProps>(({ theme, focused, error }) => ({
  width: '100%',
  height: 74,
  border: error ? '1px solid red' : '1px solid #dde5ea',
  display: 'flex',
  flexDirection: 'column',
  borderLeft: focused
    ? error
      ? '3px solid red'
      : `3px solid ${theme.palette.primary.main}`
    : error
    ? '1px solid red'
    : '1px solid #dde5ea',
  fontStyle: 'normal',
  '& .label': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: 37,
    paddingLeft: focused ? 25 : 27,
    paddingRight: focused ? 25 : 27,
    fontWeight: 400,
    fontSize: 18,
    //lineHeight: "22px",
    color: '#838BA3',
    textTransform: 'capitalize'
  },
  '& .input': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: 37,
    paddingLeft: focused ? 25 : 27,
    paddingRight: focused ? 25 : 27,
    fontWeight: 500,
    fontSize: 18,
    //lineHeight: "22px",
    color: theme.palette.primary.main,
    border: 'none',
    '&:focus': {
      outline: 'none'
    }
  },
  [theme.breakpoints.down('xl')]: {
    height: 60,
    '& .label': {
      fontSize: 16,
      height: 30
    },
    '& .input': {
      fontSize: 18,
      height: 30
    }
  },
  [theme.breakpoints.down('sm')]: {}
}))

export const Error = styled('div')(() => ({
  width: '100%',
  color: 'red'
}))
