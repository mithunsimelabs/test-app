import React from 'react'
import { DialogProps, Button } from '@mui/material'
import BaseModal from '@components/base-modal'
import { StyledModalContainer, StyledModalHead, StyledModalBody } from './styledComponents'
import CustomizedInput from '@components/customized-input'

interface UnpairModalProps extends DialogProps {
  onClose: () => void
  modalData: any
}

export default function CategoryModal(props: UnpairModalProps) {
  return (
    <BaseModal {...props}>
      <StyledModalContainer>
        <StyledModalHead>{props.modalData?.data?.id === 0 ? 'Add Category' : 'Update Category'}</StyledModalHead>
        <StyledModalBody>
          <div className='item'>
            <CustomizedInput label='Category Name' type='text' value={props?.modalData?.data?.name} />
          </div>

          <div className='item'>
            <Button variant='contained'>Save</Button>
            <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={props.onClose}>
              Cancel
            </Button>
          </div>
        </StyledModalBody>
      </StyledModalContainer>
    </BaseModal>
  )
}
