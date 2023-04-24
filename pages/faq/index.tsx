import React from 'react'
import DashboardLayout from '@layouts/dashboard-layout'
import FAQContent from '@components/faq-content'

export default function FAQ() {
  return (
    <DashboardLayout
      title='Frequently asked questions
    '
      description='Common Doubts and Questions!'
    >
      <FAQContent />
    </DashboardLayout>
  )
}
