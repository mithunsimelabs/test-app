import React from 'react'
import DashboardLayout from '@layouts/dashboard-layout'
import { FirstRow, StyledManageUsersContainer, BottomContainer } from '@components/styled-manage-users'
// import CustomSearchUsers from '@components/search-users'
import SearchUsers from '@components/search-users-v2'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import AddIcon from '@mui/icons-material/Add'
import SaveAltIcon from '@mui/icons-material/SaveAlt'

export default function ManageUsers() {
  return (
    <DashboardLayout title='Manage Users and Accounts' description='Find and manage your users and their privilages'>
      <StyledManageUsersContainer>
        <FirstRow>
          <div className='left-action-container'>
            <Button variant='contained' startIcon={<AddIcon />}>
              Add New
            </Button>
            <Button variant='outlined' startIcon={<AddIcon />}>
              Bulk Add
            </Button>
          </div>
          <div className='right-action-container'>
            <Button variant='outlined' startIcon={<SaveAltIcon />}>
              Download
            </Button>
            <span className='total-users'>Total Users: 34</span>
          </div>
        </FirstRow>
        <Divider flexItem className='divider' />
        <BottomContainer>
          <SearchUsers />
        </BottomContainer>
      </StyledManageUsersContainer>
    </DashboardLayout>
  )
}
