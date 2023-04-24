import React, { useState } from 'react'
import SettingsInnerLayout from '@layouts/settings-inner-layout'
import TabPanel from '@components/tab-panel'
import FAQManagement from '@components/faq-management'
import CategoryManagement from '@components/category-management'

interface TabProps {
  name: string
  displayName: string
}

const tabs: TabProps[] = [
  {
    name: 'faq',
    displayName: 'FAQ Management'
  },
  {
    name: 'category',
    displayName: 'Category Management'
  }
]

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<string>('faq')
  return (
    <SettingsInnerLayout tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
      <>
        <TabPanel value={activeTab} index={'faq'}>
          <FAQManagement />
        </TabPanel>
        <TabPanel value={activeTab} index={'category'}>
          <CategoryManagement />
        </TabPanel>
      </>
    </SettingsInnerLayout>
  )
}
