import React, { useState } from 'react'
import SettingsInnerLayout from '@layouts/settings-inner-layout'
import TabPanel from '@components/tab-panel'
import UserConfiguration from '@components/user-configuration'
import DeviceConfiguration from '@components/device-configuration'

interface TabProps {
  name: string
  displayName: string
}

const tabs: TabProps[] = [
  {
    name: 'device',
    displayName: 'Device Configuration'
  },
  {
    name: 'user',
    displayName: 'User Configuration'
  }
]

export default function DeviceUsers() {
  const [activeTab, setActiveTab] = useState<string>('device')
  return (
    <SettingsInnerLayout tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
      <>
        <TabPanel value={activeTab} index={'device'}>
          <DeviceConfiguration />
        </TabPanel>
        <TabPanel value={activeTab} index={'user'}>
          <UserConfiguration />
        </TabPanel>
      </>
    </SettingsInnerLayout>
  )
}
