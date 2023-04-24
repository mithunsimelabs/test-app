import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  '& .filter-container': {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 10,
    '& .select': {
      flexBasis: '30%'
    },
    '& .search': {
      flexBasis: '50%'
    }
  },
  '& .category-container': {
    marginTop: 50,
    '& .category-heading': {
      fontSize: 30,
      fontWeight: 600
    }
  }
}))
