import React, { useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import Tabs from '@mui/material/Tabs'
import IconButton from '@mui/material/IconButton'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Button from '@mui/material/Button'
import PersonIcon from '@mui/icons-material/Person'
import GroupIcon from '@mui/icons-material/Group'
import Popover from '@mui/material/Popover'
import CustomSwitch from '@components/custom-switch'
import CustomSearchBar from '@components/search-bar'
import TabPanel from '@components/tab-panel'
import UserCard from './userCard'
import { StyledContainer, StyledBox, StyledTab, StyledPopoverContent } from './styledComponents'
import { AllData, AdminData, UsersData } from './mockData'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function SearchUsers() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentTab, setCurrentTab] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClickSettingsMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClosePopper = () => {
    setAnchorEl(null)
  }

  const popperOpen = Boolean(anchorEl)
  const popperId = popperOpen ? 'styled-icon-button-popover' : undefined

  const handleSearch = (e) => {
    setIsLoading(true)
    setSearchTerm(e.target.value)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  const handleSearchCancel = () => {
    setSearchTerm('')
    setIsLoading(false)
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleSwitchToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log("onchange item : ",event?.target?.name)
  }

  const handleUserClick = (id: number | string) => {
    //write the logic here
  }
  return (
    <StyledContainer>
      <div className='search-container'>
        <CustomSearchBar
          value={searchTerm}
          onChange={handleSearch}
          customClassName={'search-bar'}
          placeholder='Search for a user by name or email'
          onCancel={handleSearchCancel}
        />
      </div>
      {searchTerm && (
        <div className='btm-section'>
          <StyledBox>
            <Tabs value={currentTab} onChange={handleTabChange} aria-label='search user tab'>
              <StyledTab
                label={
                  <div className='label'>
                    <span>All</span>
                    <span className='count'>5</span>
                  </div>
                }
                {...a11yProps(0)}
              />
              <StyledTab
                label={
                  <div className='label'>
                    <PersonIcon sx={{ width: 20, height: 20 }} />
                    <span>Admins</span>
                    <span className='count'>3</span>
                  </div>
                }
                {...a11yProps(1)}
              />
              <StyledTab
                label={
                  <div className='label'>
                    <GroupIcon sx={{ width: 20, height: 20 }} />
                    <span>Users</span>
                    <span className='count'>2</span>
                  </div>
                }
                {...a11yProps(2)}
              />
            </Tabs>
            <IconButton className='icon' onClick={handleClickSettingsMenu}>
              <SettingsOutlinedIcon />
            </IconButton>
            <Popover
              id={popperId}
              open={popperOpen}
              anchorEl={anchorEl}
              onClose={handleClosePopper}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <StyledPopoverContent>
                <div className='items'>
                  <span>All</span>
                  <CustomSwitch defaultChecked name='all' onChange={handleSwitchToggle} />
                </div>
                <div className='items'>
                  <span>Admins</span>
                  <CustomSwitch defaultChecked name='admins' onChange={handleSwitchToggle} />
                </div>
                <div className='items'>
                  <span>Users</span>
                  <CustomSwitch defaultChecked name='users' onChange={handleSwitchToggle} />
                </div>
              </StyledPopoverContent>
            </Popover>
          </StyledBox>
          <div className='card-container'>
            {isLoading &&
              [0, 1, 2, 3, 4].map((index) => {
                return <Skeleton key={index} variant='rectangular' width={'100%'} height={60} className='skelton' />
              })}
            {!isLoading && (
              <>
                <TabPanel value={currentTab} index={0}>
                  {AllData.map((item, index) => {
                    return (
                      <UserCard
                        key={index}
                        name={item?.name}
                        id={item?.id}
                        email={item?.email}
                        userType={item?.userType}
                        avatar={item?.avatar}
                        onCardClick={handleUserClick}
                      />
                    )
                  })}
                </TabPanel>
                <TabPanel value={currentTab} index={1}>
                  {AdminData.map((item, index) => {
                    return (
                      <UserCard
                        key={index}
                        name={item?.name}
                        id={item?.id}
                        email={item?.email}
                        userType={item?.userType}
                        avatar={item?.avatar}
                        onCardClick={handleUserClick}
                      />
                    )
                  })}
                </TabPanel>
                <TabPanel value={currentTab} index={2}>
                  {UsersData.map((item, index) => {
                    return (
                      <UserCard
                        key={index}
                        name={item?.name}
                        id={item?.id}
                        email={item?.email}
                        userType={item?.userType}
                        avatar={item?.avatar}
                        onCardClick={handleUserClick}
                      />
                    )
                  })}
                </TabPanel>
                <div className='action-section'>
                  <Button variant='contained' color='secondary'>
                    Discard Search
                  </Button>
                  <Button variant='contained'>view All Results</Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </StyledContainer>
  )
}
