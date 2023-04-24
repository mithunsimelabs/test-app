import BaseModal from '@components/base-modal'
import { Button, DialogProps, Divider } from '@mui/material'
import React from 'react'
import { StyledModalBody, StyledModalContainer, StyledModalHead } from './styledComponents'
import { useForm, SubmitHandler, useController } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import CustomizedInput from '@components/customized-input'
import CloseIcon from '@mui/icons-material/Close'

interface addSectionFormInputs {
  sectiontitle: string
  link: string
}

const schema = yup.object().shape({
  sectiontitle: yup.string().required(),
  link: yup.string().required()
})
interface AddSectionModalProps extends DialogProps {
  onClose: () => void
  section?: string
  link?: string
  type: 'add' | 'edit'
  onClick: () => void
}

export default function AddEditSectionModal(props: AddSectionModalProps) {
  const { onClose, section = '', link = '', type, onClick } = props
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<addSectionFormInputs>({
    resolver: yupResolver(schema)
  })

  const deviceController = useController({
    name: 'sectiontitle',
    control,
    defaultValue: section
  })

  const descriptionController = useController({
    name: 'link',
    control,
    defaultValue: link
  })

  const onSubmit: SubmitHandler<addSectionFormInputs> = (data) => {
    //console.log(data);
    onClick()
    reset()
    props.onClose()
  }

  return (
    <BaseModal {...props}>
      <StyledModalContainer>
        <div>
          <StyledModalHead>{`${type === 'add' ? 'Add' : 'Edit'} Section`}</StyledModalHead>
          <CloseIcon className='icon' onClick={onClose} />
        </div>
        <div className='divider'>
          <Divider />
        </div>
        <StyledModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='main'>
              <div className='main2'>Section Title</div>
              <CustomizedInput
                label={''}
                type={'text'}
                sx={{ width: 400 }}
                value={deviceController.field.value}
                onChange={(value) => deviceController.field.onChange(value)}
                error={!!errors.sectiontitle}
                helperText={errors.sectiontitle?.message || ''}
              />
            </div>
            <div className='main'>
              <div className='main3'>Link</div>
              <CustomizedInput
                label={''}
                type={'text'}
                sx={{ width: 400 }}
                value={descriptionController.field.value}
                error={!!errors.link}
                helperText={errors.link?.message || ''}
                onChange={(value) => descriptionController.field.onChange(value)}
              />
            </div>
            <div className='item'>
              <Button variant='contained' sx={{ width: 191 }} onClick={onClose}>
                Discard
              </Button>
              <Button variant='outlined' sx={{ marginLeft: 1, width: 191 }} type='submit'>
                {type === 'add' ? 'Add' : 'Edit'}
              </Button>
            </div>
          </form>
        </StyledModalBody>
      </StyledModalContainer>
    </BaseModal>
  )
}
