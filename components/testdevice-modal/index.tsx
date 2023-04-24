import React from 'react'
import { DialogProps, Button } from '@mui/material'
import BaseModal from '@components/base-modal'
import { StyledModalContainer, StyledModalHead, StyledModalBody } from './styledComponents'

interface TestModalProps extends DialogProps {
  onClose: () => void
}

export default function TestDeviceModal(props: TestModalProps) {
  return (
    <BaseModal {...props}>
      <StyledModalContainer>
        <StyledModalHead>Test Device</StyledModalHead>
        <StyledModalBody>
          <div className='item'>Device push notification are disabled</div>
          <div className='item'>
            {/* <Button variant='contained'>Yes</Button> */}
            <Button
              variant='contained'
              // sx={{marginLeft:1}}
              onClick={props.onClose}
            >
              Close
            </Button>
          </div>
        </StyledModalBody>
      </StyledModalContainer>
    </BaseModal>
  )
}
