import React, { useState } from 'react'
import SettingsInnerLayout from '@layouts/settings-inner-layout'
import TabPanel from '@components/tab-panel'
import Branding from '@components/branding'
import Language from '@components/language'
import SectionsAndLinks from '@components/sections-and-links'

interface TabProps {
  name: string
  displayName: string
}

const tabs: TabProps[] = [
  {
    name: 'branding',
    displayName: 'Branding'
  },
  {
    name: 'language',
    displayName: 'Language'
  },
  {
    name: 'sections_links',
    displayName: 'Sections & Links'
  }
]

export default function Appearance() {
  const [activeTab, setActiveTab] = useState<string>('branding')
  return (
    <SettingsInnerLayout tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
      <>
        <TabPanel value={activeTab} index={'branding'}>
          <Branding />
        </TabPanel>
        <TabPanel value={activeTab} index={'language'}>
          <Language />
        </TabPanel>
        <TabPanel value={activeTab} index={'sections_links'}>
          <SectionsAndLinks />
        </TabPanel>
      </>
    </SettingsInnerLayout>
  )
}
