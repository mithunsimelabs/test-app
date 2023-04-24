import React, { useState } from 'react'
import SettingsInnerLayout from '@layouts/settings-inner-layout'
import TabPanel from '@components/tab-panel'
import EmailTemplates from '@components/email-templates'
import SmtpConfiguration from '@components/smtp-configuration'

interface TabProps {
  name: string
  displayName: string
}

const tabs: TabProps[] = [
  {
    name: 'email_templates',
    displayName: 'Email Templates'
  },
  {
    name: 'smtp_configuration',
    displayName: 'SMTP Configuration'
  }
]

export default function Notifications() {
  const [activeTab, setActiveTab] = useState<string>('email_templates')
  return (
    <SettingsInnerLayout tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
      <>
        <TabPanel value={activeTab} index={'email_templates'}>
          <EmailTemplates />
        </TabPanel>
        <TabPanel value={activeTab} index={'smtp_configuration'}>
          <SmtpConfiguration />
        </TabPanel>
      </>
    </SettingsInnerLayout>
  )
}
