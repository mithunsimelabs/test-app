import React, { useState, ChangeEvent } from 'react'
import DashboardLayout from '@layouts/dashboard-layout'
import SearchBar from '@components/search-bar'
import { YourDevicesContainer, FirstRow } from '@components/styled-yourdevice-page'
import YourdeviceTab from '@components/yourdevice-tab'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import ReportDeviceModal from '@components/report-device-modal'
import AddDeviceModal from '@components/add-device-modal'
import EmailTemplateModal from '@components/email-template-modal'

export default function YourDevices() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [openReportModal, setOpenReportModal] = useState<boolean>(false)
  const [openAddDeviceModal, setOpenAddDeviceModal] = useState<boolean>(false)

  const handleOpenReportModal = () => {
    setOpenReportModal(true)
  }

  const handleCloseReportModal = () => {
    setOpenReportModal(false)
  }

  const handleOpenAddDeviceModal = () => {
    setOpenAddDeviceModal(true)
  }

  const handleCloseAddDeviceModal = () => {
    setOpenAddDeviceModal(false)
  }

  const handleSetSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <DashboardLayout title='Your Devices' description='See all the devices you added' dividerBottom>
      <YourDevicesContainer>
        <FirstRow>
          <div className='searchbar-container'>
            <SearchBar onChange={handleSetSearchTerm} value={searchTerm} placeholder='Search for Devices' />
          </div>
          <div className='right-action-container'>
            <Button variant='contained' startIcon={<AddIcon />} onClick={handleOpenAddDeviceModal}>
              Add New
            </Button>
            <Button variant='outlined' onClick={handleOpenReportModal}>
              Report Lost
            </Button>
          </div>
        </FirstRow>
        <YourdeviceTab />
        <ReportDeviceModal open={openReportModal} onClose={handleCloseReportModal} />
        <AddDeviceModal open={openAddDeviceModal} onClose={handleCloseAddDeviceModal} />
      </YourDevicesContainer>
    </DashboardLayout>
  )
}
