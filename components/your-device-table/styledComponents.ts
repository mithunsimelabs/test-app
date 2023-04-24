import { styled } from '@mui/material/styles'

interface TableProps {
  width: number
  type?: 'primary' | 'secondary' | string
}

export const StyledTable = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 900
}))

export const StyledTableHead = styled('div')(({ theme }) => ({
  width: '100%',
  height: 32,
  borderRadius: 6,
  padding: '0px 10px',
  display: 'flex',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.text.secondary,
  alignItems: 'center',
  fontWeight: 500,
  fontSize: 14,
  // lineHeight: "16px",
  [theme.breakpoints.down('xl')]: {
    fontSize: 12
  }
}))

export const StyledTH = styled('span')<TableProps>(({ width }) => ({
  width: `${width}%`,
  height: '100%',
  display: 'flex',
  alignItems: 'center'
}))

export const StyledTableBody = styled('div')(() => ({
  width: '100%',
  height: 120,
  padding: '0px 10px',
  display: 'flex',
  alignItems: 'center'
}))

export const StyledTdDevice = styled('span')<TableProps>(({ theme, width }) => ({
  width: `${width}%`,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  '& >svg>path': {
    fill: theme.palette.primary.main
  },
  [theme.breakpoints.down('xl')]: {
    // width: `${width+2}%`,
  },
  [theme.breakpoints.down('lg')]: {
    width: `${width + 5}%`
  }
}))

export const StyledTdDeviceDetails = styled('span')<TableProps>(({ theme, width }) => ({
  width: `${width}%`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '& .details': {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
    fontSize: 12,
    marginTop: 10,
    color: '#7697AB',
    '& .align-left': {
      marginLeft: 12
    },
    '& .align-right': {
      marginRight: 12
    }
  },
  [theme.breakpoints.down('xl')]: {
    '& .details': {
      fontSize: 10
    }
    //width: `${width+2}%`,
  },
  [theme.breakpoints.down('lg')]: {
    width: `${width + 5}%`
  }
}))

export const StyledTdDeviceType = styled('span')<TableProps>(({ theme, width, type }) => ({
  width: `${width}%`,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  '& .btn-item': {
    borderRadius: 8,
    fontSize: 12,
    width: 119,
    height: 31,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      type === 'primary'
        ? theme.palette.primary.light
        : type === 'secondary'
        ? theme.palette.secondary.light
        : 'transparent',
    color:
      type === 'primary'
        ? theme.palette.primary.main
        : type === 'secondary'
        ? theme.palette.secondary.main
        : theme.palette.text.secondary,
    border: type === 'primary' || type === 'secondary' ? 'none' : `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.down('xl')]: {
    '& .btn-item': {
      fontSize: 10
    }
    // width: `${width+2}%`,
  },
  [theme.breakpoints.down('lg')]: {
    width: `${width + 5}%`
  }
}))

export const StyledTd = styled('span')<TableProps>(({ theme, width }) => ({
  width: `${width}%`,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 500,
  fontSize: 14,
  color: theme.palette.text.primary,
  [theme.breakpoints.down('xl')]: {
    fontSize: 12
    //width: `${width+2}%`,
  },
  [theme.breakpoints.down('lg')]: {
    width: `${width + 5}%`
  }
}))

export const StyledTdActions = styled('span')<TableProps>(({ theme, width }) => ({
  width: `${width}%`,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 500,
  fontSize: 14,
  color: theme.palette.primary.main,
  '& >div': {
    display: 'flex',
    alignItems: 'center',
    '& >div': {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      '& >svg>path': {
        fill: theme.palette.primary.main
      }
    }
  },
  '& .align-left': {
    marginLeft: 5
  },
  '& .align-right': {
    marginRight: 16
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: 12
    //width: `${width-10}%`,
  },
  [theme.breakpoints.down('lg')]: {
    width: `${width + 5}%`
  }
}))
