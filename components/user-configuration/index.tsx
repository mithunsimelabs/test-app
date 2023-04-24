import React from 'react'
import { StyledContainer } from './styledComponents'
import SwitchList from '@components/switch-list'

const mockData = [
  {
    title: 'Auto Add User (New User)',
    name: 'auto_add_user',
    description:
      'Enabling this option will automatically create the user profile on PingOne on successful login to the portal.',
    sub: []
  },
  {
    title: 'Add User Option (User Management)',
    name: 'add_user_options',
    description:
      'Enabling this option will result in enabling the manual creation of user profile on PingOne by Administrators.',
    sub: []
  },
  {
    title: 'Update User Details',
    name: 'update_user',
    description:
      'Enabling this option will automatically update the user profile attributes on PingOne on successful login to the portal.',
    sub: []
  },
  {
    title: 'Delete User',
    name: 'delete_user',
    description:
      'Enabling this option will result in enabling the manual deletion of user profile on PingOne by Administrators.',
    sub: []
  },
  {
    title: 'Bulk Add Users',
    name: 'bulk_add_user',
    description:
      'Enabling this option will result in enabling the creation of multiple user profiles on PingOne by Administrators using a CSV file.',
    sub: []
  },
  {
    title: 'Bulk Delete Users',
    name: 'bulk_delete_user',
    description:
      'Enabling this option will result in enabling the deletion of multiple user profiles on PingOne by Administrators using a CSV file.',
    sub: []
  },
  {
    title: 'Bulk Update Users',
    name: 'bulk_delete_user',
    description:
      'Enabling this option will result in enabling the update of multiple user profiles on PingOne by Administrators using a CSV file.',
    sub: []
  }
]

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //console.log("onchange item : ",event?.target?.name)
}

export default function UserConfiguration() {
  return (
    <StyledContainer>
      <SwitchList data={mockData} />
    </StyledContainer>
  )
}
