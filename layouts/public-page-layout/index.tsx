import React from 'react'
import { StyledDiv } from './styledComponents'
import { useTheme } from '@mui/material/styles'
export default function PublicPageLayout({ children }: { children: JSX.Element }) {
  const theme = useTheme()
  return (
    <StyledDiv>
      <div className='first-container'>{children}</div>
      <div className='second-container' style={{ backgroundColor: theme.palette.primary.main }} />
    </StyledDiv>
  )
}
