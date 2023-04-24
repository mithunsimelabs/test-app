interface mockDataType {
  id: number | string
  name: string
  email: string
  avatar: string
  userType: 'Admin' | 'User'
}

export const AllData: mockDataType[] = [
  {
    id: 1,
    name: 'Arnold Glassman',
    email: 'email@domain.com',
    avatar: 'https://i.pravatar.cc',
    userType: 'Admin'
  },
  {
    id: 2,
    name: 'Anthony Damien',
    email: 'email@domain.com',
    avatar: 'https://i.pravatar.cc',
    userType: 'User'
  },
  {
    id: 3,
    name: 'Alexander Great',
    email: 'email@domain.com',
    avatar: 'https://i.pravatar.cc',
    userType: 'Admin'
  },
  {
    id: 4,
    name: 'Amy Williams',
    email: 'email@domain.com',
    avatar: 'https://i.pravatar.cc',
    userType: 'Admin'
  },
  {
    id: 5,
    name: 'William Ford',
    email: 'email@domain.com',
    avatar: 'https://i.pravatar.cc',
    userType: 'User'
  }
]

export const AdminData: mockDataType[] = [
  {
    id: 1,
    name: 'Arnold Glassman',
    email: 'email@domain.com',
    avatar: 'https://i.pravatar.cc',
    userType: 'Admin'
  },
  {
    id: 3,
    name: 'Alexander Great',
    email: 'email@domain.com',
    avatar: 'https://i.pravatar.cc',
    userType: 'Admin'
  },
  {
    id: 4,
    name: 'Amy Williams',
    email: 'email@domain.com',
    avatar: 'https://i.pravatar.cc',
    userType: 'Admin'
  }
]

export const UsersData: mockDataType[] = [
  {
    id: 2,
    name: 'Anthony Damien',
    email: 'email@domain.com',
    avatar: 'https://i.pravatar.cc',
    userType: 'User'
  },
  {
    id: 5,
    name: 'William Ford',
    email: 'email@domain.com',
    avatar: 'https://i.pravatar.cc',
    userType: 'User'
  }
]
