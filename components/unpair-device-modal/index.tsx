import React from 'react'
import { DialogProps, Button } from '@mui/material'
import BaseModal from '@components/base-modal'
import { StyledModalContainer, StyledModalHead, StyledModalBody } from './styledComponents'

interface UnpairModalProps extends DialogProps {
  onClose: () => void
}

export default function UnpairDeviceModal(props: UnpairModalProps) {
  return (
    <BaseModal {...props}>
      <StyledModalContainer>
        <StyledModalHead>Unpair Device</StyledModalHead>
        <StyledModalBody>
          <div className='item'>Unpair Device?</div>
          <div className='item'>
            <Button variant='contained'>Yes</Button>
            <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={props.onClose}>
              No
            </Button>
          </div>
        </StyledModalBody>
      </StyledModalContainer>
    </BaseModal>
  )
}
