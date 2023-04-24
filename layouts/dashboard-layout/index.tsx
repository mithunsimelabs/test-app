import React from 'react'
import { StyledContainer } from './styledComponents'
import Sidebar from '@components/sidebar'
import PageHeader from '@components/page-header'

export default function DashboardLayout({
  title,
  description,
  dividerBottom = false,
  children
}: {
  title: string
  description: string
  dividerBottom?: boolean
  children: JSX.Element
}) {
  return (
    <StyledContainer>
      <Sidebar />
      <PageHeader title={title} description={description} dividerBottom={dividerBottom} />
      <div className='inner-container'>
        <div className='child-container'>{children}</div>
      </div>
    </StyledContainer>
  )
}
