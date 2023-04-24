import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 37.5,
  height: 22.5,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(19px)'
    }
  },
  '& .MuiSwitch-switchBase': {
    padding: 5,
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      //color: theme.palette.bgColor,
      '& + .MuiSwitch-track': {
        opacity: 1,
        color: theme.palette.bgColor.main,
        backgroundColor: theme.palette.secondary.main
      }
    }
  },
  '& .MuiSwitch-thumb': {
    color: theme.palette.bgColor.main,
    boxShadow: `0 2px 4px 0 ${theme.palette.secondary.main}`,
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200
    })
  },
  '& .MuiSwitch-track': {
    borderRadius: 22.5 / 2,
    opacity: 1,
    backgroundColor: '#445F6F',
    boxSizing: 'border-box'
  }
}))

export default CustomSwitch
