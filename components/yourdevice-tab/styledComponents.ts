import { styled } from '@mui/material/styles'
import { Tab, Box } from '@mui/material'

interface BadgeProps {
  selected: boolean
}

interface RightContainer {
  option: 'list' | 'grid'
}

export const StyledBoxParent = styled(Box)(() => ({
  width: '100%',
  marginTop: 40
}))

export const StyledBoxChild = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}))

export const RightContainer = styled('div')<RightContainer>(({ theme, option }) => ({
  width: '100%',
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  '& .count': {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '15px',
    color: '#445F6F',
    marginRight: 40,
    alignSelf: 'center'
  },
  '& .list-options': {
    display: 'flex',
    width: 91.38,
    height: 45.5,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 8,
    '& MuiIconButton-root': {
      flex: 1
    },
    '& .listview': {
      color: option === 'list' ? '#0B132B' : '#ABAEB0'
    },
    '& .gridview': {
      color: option === 'grid' ? '#0B132B' : '#ABAEB0'
    },
    '& .divider': {
      height: '100%',
      borderLeft: `1px solid ${theme.palette.divider}`
    }
  }
}))

export const StyledTabLabel = styled('div')<BadgeProps>(({ theme, selected }) => ({
  display: 'flex',
  alignItems: 'center',
  textTransform: 'capitalize',
  '& .badge': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 400,
    fontSize: 10.6508,
    lineHeight: '13px',
    width: 32.53,
    height: 18.33,
    background: selected ? theme.palette.primary.light : '#ABAEB0',
    borderRadius: 29.2897,
    color: selected ? theme.palette.primary.main : '#EBF5FF',
    marginLeft: 7
  }
}))

export const StyledGridTabpanel = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: 30,
  paddingTop: 30,
  [theme.breakpoints.down('xl')]: {
    gridTemplateColumns: 'repeat(4, 1fr)'
  },
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)'
  }
}))

export const StyledListTabpanel = styled('div')(({ theme }) => ({
  width: '100%',
  paddingTop: 30,
  [theme.breakpoints.down('md')]: {
    overflowY: 'auto'
  },
  [theme.breakpoints.down('sm')]: {}
}))

export const StyledTab = styled(Tab)(() => ({
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '19px',
  color: '#ABAEB0',
  '&.Mui-selected': {
    color: '#1A242A'
  }
}))
