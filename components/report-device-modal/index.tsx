import React from 'react'
import { DialogProps, Alert, Button } from '@mui/material'
import BaseModal from '@components/base-modal'
import CustomSelect from '@components/custom-select'
import CustomizedTextarea from '@components/customized-textarea'
import { StyledModalContainer, StyledModalHead, StyledModalBody } from './styledComponents'
import { useForm, SubmitHandler, useController } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface reportFormInputs {
  device: string
  description: string
}

const schema = yup.object().shape({
  device: yup.string().required(),
  description: yup.string().required()
})

interface ReposrtModalProps extends DialogProps {
  onClose: () => void
}

export default function ReportDeviceModal(props: ReposrtModalProps) {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<reportFormInputs>({
    resolver: yupResolver(schema)
  })

  const deviceController = useController({
    name: 'device',
    control,
    defaultValue: ''
  })

  const descriptionController = useController({
    name: 'description',
    control,
    defaultValue: ''
  })

  const onSubmit: SubmitHandler<reportFormInputs> = (data) => {
    //console.log(data);
    reset()
    props.onClose()
  }
  return (
    <BaseModal {...props}>
      <StyledModalContainer>
        <StyledModalHead>Report Device</StyledModalHead>
        <StyledModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='item'>
              <CustomSelect
                label='Device'
                required
                options={[
                  { label: 'Device 1', value: '1' },
                  { label: 'Device 2', value: '2' },
                  { label: 'Device 3', value: '3' }
                ]}
                value={deviceController.field.value}
                onChange={(value) => deviceController.field.onChange(value)}
                error={!!errors.device}
                helperText={errors.device?.message || ''}
              />
            </div>
            <div className='item'>
              <CustomizedTextarea
                label='Description'
                required
                value={descriptionController.field.value}
                error={!!errors.description}
                helperText={errors.description?.message || ''}
                onChange={(value) => descriptionController.field.onChange(value)}
              />
            </div>
            <div className='item'>
              <Alert severity='warning' sx={{ width: '100%' }}>
                This will unpair your device from the portal.
              </Alert>
            </div>
            <div className='item'>
              <Button variant='contained' type='submit'>
                Yes
              </Button>
              <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={props.onClose}>
                No
              </Button>
            </div>
          </form>
        </StyledModalBody>
      </StyledModalContainer>
    </BaseModal>
  )
}
