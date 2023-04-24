import React from 'react'
import { StyledContainer, StyledBottomContainer } from './styledComponents'
// import Button from "@mui/material/Button"
// import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function LicenseDetails() {
  // const handleAddNewLicence = () => {
  //     //add action here
  // }

  return (
    <StyledContainer>
      <div className='first-row'>
        <span>Current License Details</span>
        {/* <Button variant='outlined' startIcon={<AddIcon />} onClick={handleAddNewLicence}>Add New License</Button> */}
      </div>
      <StyledBottomContainer>
        <div className='license-card'>
          <div className='card-title'>Licensee Details</div>
          <div className='details-section'>
            <div className='details-row'>
              <span className='head'>Name</span>
              <span>Nishad S</span>
            </div>
            <div className='details-row'>
              <span className='head'>ID</span>
              <span>#######</span>
            </div>
            <div className='details-row'>
              <span className='head'>Contact</span>
              <span>#######</span>
            </div>
            <div className='details-row'>
              <span className='head'>Email</span>
              <span>nishad.sn@gmail.com</span>
            </div>
          </div>
        </div>
        <Divider orientation='vertical' flexItem className='divider' />
        <div className='license-card'>
          <div className='card-title'>Product Details</div>
          <div className='details-section'>
            <div className='details-row'>
              <span className='head'>Product</span>
              <span>ABC123</span>
            </div>
            <div className='details-row'>
              <span className='head'>Issue Date</span>
              <span>12 Mar 2023</span>
            </div>
            <div className='details-row'>
              <span className='head'>Expiry</span>
              <span>12 Mar 2023</span>
            </div>
          </div>
        </div>
        <Divider orientation='vertical' flexItem className='divider' />
        <div className='license-card'>
          <div className='card-title'>Product Specs</div>
          <div className='details-section'>
            <div className='details-row'>
              <span className='head'>App Management</span>
              <span>
                <CheckCircleIcon className='check-icon' />
              </span>
            </div>
            <div className='details-row'>
              <span className='head'>Device Management</span>
              <span>
                <CheckCircleIcon className='check-icon' />
              </span>
            </div>
            <div className='details-row'>
              <span className='head'>User Management</span>
              <span>
                <CheckCircleIcon className='check-icon' />
              </span>
            </div>
            <div className='details-row'>
              <span className='head'>Version</span>
              <span>1.0.0</span>
            </div>
          </div>
        </div>
      </StyledBottomContainer>
    </StyledContainer>
  )
}
