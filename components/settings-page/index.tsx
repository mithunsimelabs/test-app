import React, { useState } from 'react'
import { StyledSettingsPageContainer, StyledBox, StyledTab } from './styledComponents'
import Tabs from '@mui/material/Tabs'
import TabPanel from '@components/tab-panel'
import GeneralSettings from '@components/general-settings'
import Appearance from '@components/appearance'
import DeviceUsers from '@components/device-users'
import Notifications from '@components/notifications'
import FAQ from '@components/faq'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function SettingsPage() {
  const [tabValue, setTabvalue] = useState<number>(0)
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabvalue(newValue)
  }
  return (
    <StyledSettingsPageContainer>
      <StyledBox>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label='basic tabs example'>
          <StyledTab label='General Settings' {...a11yProps(0)} />
          <StyledTab label='Appearance' {...a11yProps(1)} />
          <StyledTab label='Devices & Users' {...a11yProps(3)} />
          <StyledTab label='Notifications' {...a11yProps(4)} />
          <StyledTab label='FAQ Content' {...a11yProps(5)} />
        </Tabs>
      </StyledBox>
      <TabPanel value={tabValue} index={0}>
        <GeneralSettings />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Appearance />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <DeviceUsers />
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <Notifications />
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        <FAQ />
      </TabPanel>
    </StyledSettingsPageContainer>
  )
}
