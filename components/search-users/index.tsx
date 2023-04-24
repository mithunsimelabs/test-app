import React, { ChangeEvent, useState } from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@components/search-bar/searchIcon'
import Clear from 'assets/images/Clear.svg'
import { StyledBox, StyledTab } from '@components/settings-page/styledComponents'
import { Button, Tabs } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Admin from 'assets/images/Admin.svg'
import Users from 'assets/images/User.svg'
import Settings from 'assets/images/Settings.svg'
import Image from 'next/image'
import { List, ListItemAvatar, ListItemText, ListItem, Tab } from '@mui/material'
import Divider from '@mui/material/Divider'
import PersonIcon from '@mui/icons-material/Person'
import CustomSwitch from '@components/custom-switch'

interface TabProps {
  active: boolean
}

const SearchWithUsers = styled('div')({
  display: 'block',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
  gap: 10,
  width: '100%',
  minHeight: 56,
  maxWidth: 1030,
  height: 'auto',
  flex: 'none',
  borderRadius: 8,
  border: '1px solid #D2D2D2',
  order: 0,
  flexGrow: 1,

  '& .advanced-search-tab': {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0px',
    '& .tab-container': {
      display: 'flex',

      '& .tabs': {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        '& .inner-tabs': {
          display: 'flex',
          alignItems: 'flex-start',
          gap: 16,
          background: '#FFFFFF',
          order: 1,

          '& .tab-item': {
            marginRight: 3,
            gap: 10,

            ':hover': {
              borderBottom: '3px solid #006DD1',
              fontColor: 'black'
            }
          },
          '& .users-count': {
            alignItems: 'flex-start',
            padding: '1px 6px',
            gap: 10,
            width: 24,
            height: 17,
            background: '#F2F2F2',
            borderRadius: 8,
            color: '#828282'
          }
        }
      }
    },
    '& .list': {
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 12,
      display: 'flex',
      gap: 32,
      ':hover': {
        borderLeft: '10px solid #006DD1',
        background: '#F9FBFC'
      },
      '& .list-item': {
        display: 'flex',
        alignItems: 'inherit',
        color: '#1A242A',
        justifyContent: 'space-between',
        width: '100%',
        height: 19,
        fontFamily: "'Inter'",
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: -0.04,
        marginLeft: 20,
        marginRight: 20
      }
    },

    '& .user-type': {
      display: 'flex',
      minWidth: '100px',
      color: 'grey'
    },

    '& .settings-area': {
      display: 'flex',
      padding: '3px 7px 10px'
    },

    '& .filter-box': {
      display: 'flex',
      width: '100%',
      maxWidth: 154,
      boxSizing: 'border-box',
      flexDirection: 'column',
      position: 'absolute',
      alignItems: 'center',
      padding: '2px',
      gap: 13,
      maxHeight: 164,
      height: '100%',
      left: 1144,
      top: 382,
      background: '#FFFFFF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: 20,
      '& .filter-items': {
        display: 'flex',
        gap: 20,
        padding: '8px',
        alignItems: 'start',
        fontSize: 14
      }
    }
  },

  '& .right-action-container': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: '#006DD1',
    '& .MuiButtonBase-root': {
      display: 'flex',
      marginBottom: 10,
      marginRight: 10
    }
  }
})

const SearchBarWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '38px',
  '& .cancel-icon': {
    color: '#aaa',
    padding: 20
  }
})

const SearchBarInput = styled(InputBase)({
  fontFamily: "'Inter'",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '17px',
  letterSpacing: '-0.04em',
  fontFeatureSettings: "'liga' off",
  color: '#445F6F',
  paddingLeft: 12,
  paddingRight: 12,
  width: '100%',
  height: '100%',
  display: 'flex',
  maxHeight: 38,
  marginTop: 12,
  '& >svg': {
    marginRight: 15,
    marginLeft: 12
  },
  '&::placeholder': {
    color: '#ABAEB0'
  }
})

const TabFilters = styled('div')({
  display: 'flex-start',
  boxSizing: 'border-box',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '0 24',
  gap: 40,
  height: 29,
  borderBottom: '1px solid #DDE5EA',
  flex: 'none',
  alignSelf: 'stretch',
  flexGrow: 0
})

export default function CustomSearchUsers() {
  const data = [
    { name: 'John Doe', email: 'john.doe@example.com', type: 'User' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', type: 'Admin' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com', type: 'Admin' }
  ]

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filterOn, setFilterOn] = useState(false)
  const [filterOptions, setFilterOptions] = useState(false)

  const [tabValue, setTabvalue] = useState<string>('')

  const handleSetSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleTabChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTabvalue(e.target.value)
  }

  const handleFilterOption = () => {
    setFilterOptions(!filterOn)
    if (filterOptions) {
      setFilterOptions(!filterOptions)
    }
  }

  const clearValue = () => {
    setSearchTerm('')
  }

  return (
    <SearchWithUsers>
      <SearchBarWrapper>
        <SearchBarInput
          placeholder={'Search for a User by name or email'}
          value={searchTerm}
          onChange={handleSetSearchTerm}
          startAdornment={<SearchIcon />}
        />
        {searchTerm?.length > 0 && (
          <label role='clear' onClick={clearValue} className='cancel-icon'>
            <Image src={Clear} alt='Clear' width={16} height={16} />{' '}
          </label>
        )}
      </SearchBarWrapper>

      {searchTerm?.length > 0 && (
        <div className='advanced-search-tab'>
          <div className='tab-container'>
            <div className='tabs'>
              <StyledBox>
                <TabFilters>
                  <Tabs value={tabValue} onChange={handleTabChange} aria-label='basic tabs example'>
                    <div className='inner-tabs'>
                      <div className='tab-item'>
                        <StyledTab label='All' />
                      </div>
                      <div className='tab-item'>
                        <Image src={Admin} alt='Admin' width={12} height={14} />
                        <StyledTab label='Admins' />
                        <span className='users-count'>10</span>
                      </div>
                      <div className='tab-item'>
                        <Image src={Users} alt='Users' width={12} height={14} />
                        <StyledTab label='Users' />
                        <span className='users-count'>70</span>
                      </div>
                    </div>
                  </Tabs>
                </TabFilters>
              </StyledBox>
            </div>
            <div className='settings-area'>
              <label onClick={handleFilterOption}>
                <Image src={Settings} alt='Settings' width={12} height={14} />
              </label>
            </div>
          </div>
          <Divider />
          <List>
            {data?.map((item) => (
              <div className='list' key={item.email}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <div className='list-item'>
                    <ListItemText primary={item.name} secondary={item.email} />
                  </div>
                  <div className='user-type'>-{item.type}</div>
                </ListItem>
              </div>
            ))}
          </List>
          {filterOptions && (
            <div className='filter-box'>
              <div className='filter-items'>
                All
                <CustomSwitch defaultChecked />
                {/* <Switch style={{ color: 'green' }}></Switch> */}
              </div>
              <div className='filter-items'>
                Admins
                <CustomSwitch defaultChecked />
              </div>
              <div className='filter-items'>
                User Types
                <CustomSwitch defaultChecked />
              </div>
            </div>
          )}
          <div className='right-action-container'>
            <div>
              <Button variant='contained' style={{ background: '#E0E0E0', color: '#4F4F4F' }}>
                {' '}
                Discard Search
              </Button>
            </div>
            <Button variant='contained'> View All Results </Button>
          </div>
        </div>
      )}
    </SearchWithUsers>
  )
}
