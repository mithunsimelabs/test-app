import React from 'react'
import Avatar from '@mui/material/Avatar'
import { StyledUserCard } from './styledComponents'

interface UsercardPropsTypes {
  id: number | string
  name: string
  email: string
  userType: 'Admin' | 'User'
  avatar: string
  onCardClick: (id: number | string) => void
}

export default function UserCard(props: UsercardPropsTypes) {
  const { id = 1, name, email, userType, onCardClick, avatar } = props
  const handleCardClick = () => {
    onCardClick(id)
  }
  return (
    <StyledUserCard onClick={handleCardClick}>
      <div className='user-info'>
        <Avatar alt={name} src={avatar} />
        <div className='user-data'>
          <div className='name'>{name}</div>
          <div className='email'>{email}</div>
        </div>
      </div>
      <div className='userType'>-{userType}</div>
    </StyledUserCard>
  )
}
