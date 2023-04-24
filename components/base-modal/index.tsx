import React from 'react'
import { Dialog, DialogProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    //backgroundColor: theme.palette.bgColor.main,
    maxWidth: 'unset'
  }
}))

const BaseModal: React.FC<DialogProps> = ({ children, ...props }) => {
  return <StyledDialog {...props}>{children}</StyledDialog>
}

export default BaseModal
