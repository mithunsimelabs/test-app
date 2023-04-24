import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import tinycolor from 'tinycolor2'

interface DeviceCardProps {
  deviceType: 'primary' | 'secondary' | 'other'
}

export const StyledDeviceCard = styled('div')<DeviceCardProps>(({ theme, deviceType }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: 243,
  height: 343,
  background: '#FFFFFF',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: 12,
  padding: 25,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontStyle: 'normal',
  '& .absolute-container': {
    position: 'absolute',
    top: 21,
    right: 22
  },
  '& >svg': {
    '& >g>path': {
      fill: theme.palette.primary.main,
      stroke: theme.palette.primary.main
    },
    '& >path': {
      fill: theme.palette.primary.main
    }
  },
  '& .card-title': {
    fontWeight: 600,
    fontSize: 18,
    //lineHeight: "22px",
    color: '#1A242A',
    marginTop: 25
  },
  '& .os-type': {
    fontWeight: 400,
    fontSize: 16,
    //lineHeight: "19px",
    display: 'flex',
    alignItems: 'center',
    color: '#7697AB',
    marginTop: 26,
    '& >svg': {
      marginRight: 13
    }
  },
  '& .device-type': {
    marginTop: 34,
    borderRadius: 8,
    fontSize: 12,
    width: 119,
    height: 31,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      deviceType === 'primary'
        ? theme.palette.primary.light
        : deviceType === 'secondary'
        ? theme.palette.secondary.light
        : 'transparent',
    color:
      deviceType === 'primary'
        ? theme.palette.primary.main
        : deviceType === 'secondary'
        ? theme.palette.secondary.main
        : theme.palette.text.secondary,
    border: deviceType === 'primary' || deviceType === 'secondary' ? 'none' : `1px solid ${theme.palette.divider}`
  },
  '& .sn-no': {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '17px',
    color: '#445F6F',
    marginTop: 24
  },
  [theme.breakpoints.down('xl')]: {
    padding: 20,
    '& .card-title': {
      fontSize: 16
    },
    '& .os-type': {
      fontSize: 14
    },
    '& .device-type': {
      fontSize: 10
    },
    '& .sn-no': {
      fontSize: 12
    }
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 'unset'
  }
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: 28,
  width: 22,
  height: 19,
  color: tinycolor(theme.palette.primary.main).lighten(40).toHexString(),
  [theme.breakpoints.down('sm')]: {}
}))

export const StyledPopoverContent = styled('div')(({ theme }) => ({
  minWidth: 70,
  height: 'auto',
  padding: '5px 0px',
  borderRadius: 6,
  border: `1px solid ${theme.palette.divider}`
}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
  width: '100%',
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  padding: '0px 5px',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: 14,
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  },
  '& >svg>path': {
    fill: theme.palette.primary.main
  },
  '& >span': {
    marginLeft: 5
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: 12
  }
}))
