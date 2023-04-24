import BaseModal from '@components/base-modal'
import React, { useState } from 'react'
import { StyledModalContainer, StyledModalHead, StyledModalBody, Buttonss } from './styledComponents'
import Grid from '@mui/material/Grid'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined'
import EmailIcon from '@mui/icons-material/Email'
import SmsIcon from '@mui/icons-material/Sms'
import VoiceIcon from '@mui/icons-material/Mic'
import KeyIcon from '@mui/icons-material/Key'
import LockIcon from '@mui/icons-material/Lock'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import { Box, Button, DialogProps } from '@mui/material'
import QRcode from '@assets/images/QRcode.svg'
import pingdesktop from '@assets/images/pingdesktop.png'
import Image from 'next/image'
import CustomizedInput from '@components/customized-input'

interface AddDeviceModalProps extends DialogProps {
  onClose: () => void
}

export default function AddDeviceModal({ open, onClose }: AddDeviceModalProps) {
  const [view, setView] = useState<
    'default' | 'Mobile-device' | 'Desktop device' | 'SMS' | 'Email' | 'Voice' | 'Yubikey' | 'Auth App' | 'Fido'
  >('default')

  const handleClose = () => {
    setView('default')
    onClose()
  }

  const handleIconClick = (newView) => {
    setView(newView)
  }

  const handlePrevious = () => {
    // set the view to "default"
    setView('default')
  }

  return (
    <BaseModal open={open} onClose={onClose}>
      <StyledModalContainer>
        <StyledModalHead>Add Devices</StyledModalHead>

        <StyledModalBody>
          {view === 'default' && (
            <div>
              <div className='choose'>Choose the device type</div>
              <div className='item'>
                <div className='head'>
                  <span className='dynamic'>PingID</span> Device
                </div>
              </div>
              <div className='item'>
                <Grid container spacing={2}>
                  <Grid item>
                    <Buttonss>
                      <Box className='container' onClick={() => handleIconClick('Mobile-device')}>
                        <MobileFriendlyIcon className='icon' fontSize='small' sx={{ width: '30px' }} />
                        <div className='label'>Mobile Device</div>
                      </Box>
                    </Buttonss>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Buttonss>
                      <Box className='container' onClick={() => handleIconClick('Desktop device')}>
                        <DesktopWindowsOutlinedIcon className='icon' fontSize='small' sx={{ width: '30px' }} />
                        <div className='label'>Desktop Device</div>
                      </Box>
                    </Buttonss>
                  </Grid>
                </Grid>
                <div className='item'>
                  <div className='head'>
                    <span className='dynamic'> Other Devices</span>
                  </div>
                </div>
                <div className='item'>
                  <Grid container spacing={2}>
                    <Grid item sm={8} md={6} lg={2} xs={12}>
                      <Buttonss>
                        <Box className='container' onClick={() => handleIconClick('SMS')}>
                          <SmsIcon className='icon' fontSize='small' sx={{ width: '30px' }} />
                          <div className='label'>SMS</div>
                        </Box>
                      </Buttonss>
                    </Grid>
                    <Grid item md={6} sm={6} lg={2} xs={12}>
                      <Buttonss>
                        <Box className='container' onClick={() => handleIconClick('Email')}>
                          <EmailIcon className='icon' fontSize='small' sx={{ width: '30px' }} />
                          <div className='label'>Email</div>
                        </Box>
                      </Buttonss>
                    </Grid>
                    <Grid item md={6} sm={6} lg={2} xs={12}>
                      <Buttonss>
                        <Box className='container' onClick={() => handleIconClick('Voice')}>
                          <VoiceIcon className='icon' fontSize='small' sx={{ width: '30px' }} />
                          <div className='label'>Voice</div>
                        </Box>
                      </Buttonss>
                    </Grid>
                    <Grid item md={6} sm={6} lg={2} xs={12}>
                      <Buttonss>
                        <Box className='container' onClick={() => handleIconClick('Yubikey')}>
                          <KeyIcon className='icon' fontSize='small' sx={{ width: '30px' }} />
                          <div className='label'>YubiKey</div>
                        </Box>
                      </Buttonss>
                    </Grid>
                    <Grid item md={6} sm={6} lg={2} xs={12}>
                      <Buttonss>
                        <Box className='container' onClick={() => handleIconClick('Auth App')}>
                          <LockIcon className='icon' fontSize='small' sx={{ width: '30px' }} />
                          <div className='label'>Auth App</div>
                        </Box>
                      </Buttonss>
                    </Grid>
                    <Grid item>
                      <Buttonss>
                        <Box className='container'>
                          <FingerprintIcon className='icon' fontSize='small' sx={{ width: '30px' }} />
                          <div className='label'>FIDO</div>
                        </Box>
                      </Buttonss>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div className='item'>
                <Button variant='outlined' onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          )}
          {view === 'Mobile-device' && (
            <React.Fragment>
              <div className='right'>
                <div className='right1'>
                  <div className='choose'>Use PingID Application</div>
                  <div className='item'>
                    <div className='head'>Step 1</div>
                  </div>
                  <div className='item'>
                    Using the PingID mobile app to scan the code. Or, manually enter the registration key in the PingID
                    mobile app and wait for confirmation on the app.
                  </div>
                  <div className='item'>
                    <div className='head'>Step 2</div>
                  </div>
                  <div className='item'>Enter a profile nickname, when instructed to, in the PingID app</div>
                  <div className='item1'>
                    <Button variant='contained' onClick={handlePrevious}>
                      Previous
                    </Button>
                    <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={handleClose}>
                      Close
                    </Button>
                  </div>
                </div>
                <div className='right2'>
                  <div className='right1'>
                    <Image src={QRcode} alt='My Image' width={200} height={200} />
                  </div>
                  <div className='sentence1'>OR</div>
                  <div className='sentence'>Use this code to authenticate the device</div>
                  <div className='head2'>4350 1948 5869</div>
                </div>
              </div>
            </React.Fragment>
          )}
          {view === 'Desktop device' && (
            <React.Fragment>
              <div className='right'>
                <div className='right1'>
                  <div className='choose'>Use PingID Application</div>
                  <div className='item'>
                    <div className='head'>Step 1</div>
                  </div>
                  <div className='item'>
                    Using the PingID Dekstop app scan to the QR code. Or, manually enter the registration key in the
                    PingID App and wait for confirmation on your Desktop.{' '}
                  </div>
                  <div className='item'>
                    <div className='head'>Step 2</div>
                  </div>
                  <div className='item'>Enter a profile nickname, when instructed to, in the PingID app</div>
                  <div className='item1'>
                    <Button variant='contained' onClick={handlePrevious}>
                      Previous
                    </Button>
                    <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={handleClose}>
                      Close
                    </Button>
                  </div>
                </div>
                <div className='right2'>
                  <div className='right1'>
                    <Image src={pingdesktop} alt='My Image' width={200} height={200} />
                  </div>
                  <div className='sentence'>Use this code to authenticate the device</div>
                  <div className='head2'>3112 6313 1217</div>
                </div>
              </div>
            </React.Fragment>
          )}

          {view === 'SMS' && (
            <React.Fragment>
              <div className='right'>
                <div className='right1'>
                  <div className='choose'>Enter mobile number</div>
                  <div className='item'>
                    <div className='head'>Step 1</div>
                  </div>
                  <div className='item'>Enter your mobile number and click Send SMS</div>
                  <div className='item'>
                    <div className='head'>Step 2</div>
                  </div>
                  <div className='item'>Enter the OTP sent to your phone.</div>
                  <div className='item3'>
                    <Button variant='contained' onClick={handlePrevious}>
                      Previous
                    </Button>
                    <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={handleClose}>
                      Close
                    </Button>
                  </div>
                </div>
                <div className='right1'>
                  <div className='head1' style={{ marginLeft: '150px', paddingBottom: '10px' }}>
                    Phone Number
                  </div>
                  <div className='item2'>
                    <CustomizedInput label={''} type={'number'} />
                  </div>
                  <div className='buttonns'>
                    <Button variant='contained' fullWidth={true}>
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
          {view === 'Email' && (
            <React.Fragment>
              <div className='right'>
                <div className='right1'>
                  <div className='choose'>Enter your email address</div>
                  <div className='item'>
                    <div className='head'>Step 1</div>
                  </div>
                  <div className='item'>Enter your email address and click Send Email</div>
                  <div className='item'>
                    <div className='head'>Step 2</div>
                  </div>
                  <div className='item'>Enter the OTP sent to your email.</div>
                  <div className='item3'>
                    <Button variant='contained' onClick={handlePrevious}>
                      Previous
                    </Button>
                    <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={handleClose}>
                      Close
                    </Button>
                  </div>
                </div>
                <div className='right1'>
                  <div className='head1' style={{ marginLeft: '150px', paddingBottom: '10px' }}>
                    Email Address
                  </div>
                  <div className='item2'>
                    <CustomizedInput label={''} type={'email'} />
                  </div>
                  <div className='buttonns'>
                    <Button variant='contained' fullWidth={true}>
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
          {view === 'Voice' && (
            <React.Fragment>
              <div className='right'>
                <div className='right1'>
                  <div className='choose'>Enter your mobile number</div>
                  <div className='item'>
                    <div className='head'>Step 1</div>
                  </div>
                  <div className='item'>Enter your mobile number and click Next</div>
                  <div className='item'>
                    <div className='head'>Step 2</div>
                  </div>
                  <div className='item'>Enter the OTP sent to your phone.</div>
                  <div className='item3'>
                    <Button variant='contained' onClick={handlePrevious}>
                      Previous
                    </Button>
                    <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={handleClose}>
                      Close
                    </Button>
                  </div>
                </div>
                <div className='right1'>
                  <div className='head1' style={{ marginLeft: '150px', paddingBottom: '10px' }}>
                    Phone Number
                  </div>
                  <div className='item2'>
                    <CustomizedInput label={''} type={'number'} />
                  </div>
                  <div className='buttonns'>
                    <Button variant='contained' fullWidth={true}>
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
          {view === 'Yubikey' && (
            <React.Fragment>
              <div className='right'>
                <div className='right1'>
                  <div className='choose'>Enter your YubiKey</div>
                  <div className='item'>
                    <div className='head'>Step 1</div>
                  </div>
                  <div className='item'>Insert your Yubikey into your computer</div>
                  <div className='item'>
                    <div className='head'>Step 2</div>
                  </div>
                  <div className='item'>Click Next</div>
                  <div className='item3'>
                    <Button variant='contained' onClick={handlePrevious}>
                      Previous
                    </Button>
                    <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={handleClose}>
                      Close
                    </Button>
                  </div>
                </div>
                <div className='right1'>
                  <div className='head1' style={{ marginLeft: '150px', paddingBottom: '10px' }}>
                    Insert YubiKey
                  </div>
                  <div className='item2'>
                    <CustomizedInput label={''} type={'number'} />
                  </div>
                  <div className='buttonns'>
                    <Button variant='contained' fullWidth={true}>
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
          {view === 'Auth App' && (
            <React.Fragment>
              <div className='right'>
                <div className='right1'>
                  <div className='choose'>Use the Authenticator Application</div>
                  <div className='item'>
                    <div className='head'>Step 1</div>
                  </div>
                  <div className='item'>
                    Using the Authenticator app to scan the QR or manually enter the registration key in the PingID App.{' '}
                  </div>
                  <div className='item'>
                    <div className='head'>Step 2</div>
                  </div>
                  <div className='item'>
                    Once you receive confirmation on the your screen, enter the profile nickname in the app.
                  </div>
                  <div className='item1'>
                    <Button variant='contained' onClick={handlePrevious}>
                      Previous
                    </Button>
                    <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={handleClose}>
                      Close
                    </Button>
                  </div>
                </div>
                <div className='right3'>
                  <div className='right1'>
                    <Image src={QRcode} alt='My Image' width={200} height={200} />
                    <div className='sentence'>Use this code to authenticate the device</div>
                    <div className='head3'>CFU3 FPX N A5 W5 D CD6 H3QM 5KV U FM 7E I QY2</div>
                    <div className='item'>
                      <Button variant='contained'>Proceed to next step</Button>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </StyledModalBody>
      </StyledModalContainer>
    </BaseModal>
  )
}
