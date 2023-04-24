import React, { useState } from 'react'
import SettingsInnerLayout from '@layouts/settings-inner-layout'
import TabPanel from '@components/tab-panel'
import LicenseDetails from '@components/license-details'
import ManageModules from '@components/manage-modules'
import SSOConfiguration from '@components/sso-configuration'
import PingIdConfiguration from '@components/ping-id-configuration'

interface TabProps {
  name: string
  displayName: string
}

const tabs: TabProps[] = [
  {
    name: 'licence_details',
    displayName: 'Licence Details'
  },
  {
    name: 'manage_modules',
    displayName: 'Manage Modules'
  },
  {
    name: 'import_export_configuration',
    displayName: 'Import & Export Configuration'
  },
  {
    name: 'sso_configuration',
    displayName: 'SSO Configuration'
  },
  {
    name: 'ping_id_configuration',
    displayName: 'PING ID Configuration'
  }
]

export default function GeneralSettings() {
  const [activeTab, setActiveTab] = useState<string>('licence_details')
  return (
    <SettingsInnerLayout tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
      <>
        <TabPanel value={activeTab} index={'licence_details'}>
          <LicenseDetails />
        </TabPanel>
        <TabPanel value={activeTab} index={'manage_modules'}>
          <ManageModules />
        </TabPanel>
        <TabPanel value={activeTab} index={'import_export_configuration'}>
          <div>Import & Export Configuration</div>
        </TabPanel>
        <TabPanel value={activeTab} index={'sso_configuration'}>
          <SSOConfiguration />
        </TabPanel>
        <TabPanel value={activeTab} index={'ping_id_configuration'}>
          <PingIdConfiguration />
        </TabPanel>
      </>
    </SettingsInnerLayout>
  )
}
