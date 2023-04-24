import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import AlertIcon from '@assets/images/changes-warning.svg'
import { ConfirmationContainer } from './styledComponent'

const ConfirmationModal = ({
  heading,
  message,
  handler,
  cancel
}: {
  heading: string
  message: string
  handler: () => void
  cancel: () => void
}) => {
  return (
    <ConfirmationContainer>
      <div className='content'>
        <Image src={AlertIcon} alt='alertIcon' width={30} height={30} />
        <div className='text'>
          <div className='heading'>{heading}</div>
          <div className='description'>{message}</div>
          <div className='button-container'>
            <Button className='discard' variant='contained' onClick={cancel}>
              Discard
            </Button>
            <Button className='save' variant='contained' onClick={handler}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </ConfirmationContainer>
  )
}

export default ConfirmationModal
