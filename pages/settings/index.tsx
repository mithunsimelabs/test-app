import React from 'react'
import DashboardLayout from '@layouts/dashboard-layout'
// import SettingsPage from '@components/settings-page'
import dynamic from 'next/dynamic'

const DynamicSettingsPage = dynamic(() => import('@components/settings-page'), {
  ssr: false
}) as any

export default function Settings() {
  return (
    <DashboardLayout title='Settings' description='Manage and customise your dashboard'>
      <DynamicSettingsPage />
    </DashboardLayout>
  )
}
