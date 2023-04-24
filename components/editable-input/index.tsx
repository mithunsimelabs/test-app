import React, { useState } from 'react'
import { Check, Close } from '@mui/icons-material'
import EditIcon from '@mui/icons-material/Edit'
import { StyledTextField, StyledIconButton, InputWrapper } from './styledComponents'

interface Props {
  value: string
  onSave: (value: string) => void
}

const EditableTextInput: React.FC<Props> = ({ value, onSave }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  const handleEditOpen = () => {
    setIsEditMode(true)
  }

  const handleEditClose = () => {
    setIsEditMode(false)
  }

  const [tempValue, setTempValue] = useState(value)

  const handleCancelClick = () => {
    setTempValue(value)
    handleEditClose()
  }

  const handleSaveClick = () => {
    onSave(tempValue)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(event.target.value)
  }

  return (
    <InputWrapper>
      {isEditMode ? (
        <StyledTextField value={tempValue} onChange={handleInputChange} disabled={!isEditMode} active={isEditMode} />
      ) : (
        <div className='non-editable'>{tempValue}</div>
      )}
      {isEditMode ? (
        <>
          <StyledIconButton onClick={handleSaveClick} sx={{ color: 'green' }}>
            <Check />
          </StyledIconButton>
          <StyledIconButton onClick={handleCancelClick} sx={{ color: 'red' }}>
            <Close />
          </StyledIconButton>
        </>
      ) : (
        <StyledIconButton onClick={handleEditOpen}>
          <EditIcon />
        </StyledIconButton>
      )}
    </InputWrapper>
  )
}

export default EditableTextInput
