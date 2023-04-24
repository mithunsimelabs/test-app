import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import DeviceCard from '@components/device-card'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import GridViewIcon from '@mui/icons-material/GridView'
import {
  // StyledTab,
  // StyledTabLabel,
  StyledGridTabpanel,
  StyledListTabpanel,
  StyledBoxChild,
  StyledBoxParent,
  RightContainer
} from './styledComponents'
import TestDeviceModal from '@components/testdevice-modal'
import UnpairDeviceModal from '@components/unpair-device-modal'
import YourDeviceTable from '@components/your-device-table'

interface CardData {
  primary: boolean
  secondary: boolean
  id: number
  deviceName: string
  type: string
  deviceType: string
  osVersion: string
  brand: 'apple' | 'other'
  enrolementDate: string
  lastUsed: string
}

const myRecordArray: CardData[] = [
  {
    id: 1,
    primary: true,
    secondary: false,
    deviceName: 'Apple iPhone 14 Pro',
    type: 'iphone',
    deviceType: 'Mobile',
    osVersion: 'iOS 10.3.5',
    brand: 'apple',
    enrolementDate: 'Oct 21, 2022',
    lastUsed: '14:39 , Oct 22,2022'
  },
  {
    id: 2,
    primary: false,
    secondary: true,
    deviceName: 'Pixel 6a',
    type: 'android',
    deviceType: 'Mobile',
    osVersion: 'Android 12',
    brand: 'other',
    enrolementDate: 'Oct 21, 2022',
    lastUsed: '14:39 , Oct 22,2022'
  },
  {
    id: 3,
    primary: false,
    secondary: true,
    deviceName: 'Sandeep’s Mac',
    type: 'mac',
    deviceType: 'Laptop',
    osVersion: 'Apple Macbook',
    brand: 'apple',
    enrolementDate: 'Oct 21, 2022',
    lastUsed: '14:39 , Oct 22,2022'
  },
  {
    id: 4,
    primary: false,
    secondary: true,
    deviceName: 'Jo’s iPad',
    type: 'ipad',
    deviceType: 'Mobile',
    osVersion: 'iOS 10.3.5',
    brand: 'apple',
    enrolementDate: 'Oct 21, 2022',
    lastUsed: '14:39 , Oct 22,2022'
  },
  {
    id: 5,
    primary: false,
    secondary: true,
    deviceName: 'Sam’s Office Phone',
    type: 'android',
    deviceType: 'Mobile',
    osVersion: 'Android 12',
    brand: 'other',
    enrolementDate: 'Oct 21, 2022',
    lastUsed: '14:39 , Oct 22,2022'
  }
]

// function a11yProps(index: number) {
//     return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//     };
//   }

export default function YourdeviceTab() {
  // const [tabValue,setTabvalue] = useState<number>(0)
  const [viewOption, setViewOption] = useState<'list' | 'grid'>('list')
  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //     setTabvalue(newValue);
  //   };
  const [testDeviceModalOpen, setTestDeviceModalOpen] = useState<boolean>(false)
  const handleTestDeviceModalClose = () => {
    setTestDeviceModalOpen(false)
  }
  const handleTestDeviceModalOpen = () => {
    setTestDeviceModalOpen(true)
  }

  const [unpairDeviceModalOpen, setUnpairDeviceModalOpen] = useState<boolean>(false)
  const handleUnpairDeviceModalClose = () => {
    setUnpairDeviceModalOpen(false)
  }
  const handleUnpairDeviceModalOpen = () => {
    setUnpairDeviceModalOpen(true)
  }

  return (
    <StyledBoxParent>
      <StyledBoxChild>
        {/* <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                <StyledTab
                  label={
                   <StyledTabLabel selected={tabValue===0}>
                    <span>All</span>
                    <span className='badge'>20</span>
                   </StyledTabLabel>
                  }
                  {...a11yProps(0)}
                />
                <StyledTab
                  label={
                   <StyledTabLabel selected={tabValue===1}>
                    <span>Active</span>
                    <span className='badge'>10</span>
                   </StyledTabLabel>
                  }
                  {...a11yProps(1)}
                />
                <StyledTab
                  label={
                   <StyledTabLabel selected={tabValue===2}>
                    <span>Inactive</span>
                    <span className='badge'>5</span>
                   </StyledTabLabel>
                  }
                  {...a11yProps(2)}
                />
                <StyledTab
                  label={
                   <StyledTabLabel selected={tabValue===3}>
                    <span>Group</span>
                    <span className='badge'>1</span>
                   </StyledTabLabel>
                  }
                  {...a11yProps(3)}
                />
              </Tabs> */}
        <RightContainer option={viewOption}>
          <div className='count'>1 -25 of 25 Items</div>
          <div className='list-options'>
            <IconButton className='listview' id='list' onClick={() => setViewOption('list')}>
              <FormatListBulletedIcon />
            </IconButton>
            <div className='divider' />
            <IconButton className='gridview' id='grid' onClick={() => setViewOption('grid')}>
              <GridViewIcon />
            </IconButton>
          </div>
        </RightContainer>
      </StyledBoxChild>
      {viewOption === 'grid' && (
        <StyledGridTabpanel>
          {myRecordArray.map((item, index) => {
            return (
              <DeviceCard
                key={index}
                cardData={item}
                handleTestModalOpen={handleTestDeviceModalOpen}
                handleUnpairModalOpen={handleUnpairDeviceModalOpen}
              />
            )
          })}
        </StyledGridTabpanel>
      )}
      {viewOption === 'list' && (
        <StyledListTabpanel>
          <YourDeviceTable
            tableData={myRecordArray}
            handleOpenTestModal={handleTestDeviceModalOpen}
            handleOpenUnpairModal={handleUnpairDeviceModalOpen}
          />
        </StyledListTabpanel>
      )}
      <TestDeviceModal open={testDeviceModalOpen} onClose={handleTestDeviceModalClose} />
      <UnpairDeviceModal open={unpairDeviceModalOpen} onClose={handleUnpairDeviceModalClose} />
    </StyledBoxParent>
  )
}
