import React, { useRef, useState } from 'react'
import { StyledContainer, StyledButton } from './styledComponents'
import Divider from '@mui/material/Divider'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import CustomSelect from '@components/custom-select'
import CustomMultiSelect from '@components/custom-multi-select'
import { SelectChangeEvent } from '@mui/material/Select'

const options = [
  { label: 'English', value: 'english' },
  { label: 'Hindi', value: 'hindi' },
  { label: 'Malayalam', value: 'malayalam' },
  { label: 'Spanish', value: 'spanish' },
  { label: 'French', value: 'french' }
]

export default function Language() {
  const csvInputRef = useRef<HTMLInputElement>(null)
  const [defaultLanguage, setDefaultLanguage] = useState<string>('english')
  const [additionalLanguages, setAdditionalLanguages] = useState<string[]>(['english'])

  const handleUploadButtonClick = () => {
    if (csvInputRef.current) {
      csvInputRef.current.click()
    }
  }

  const handleCsvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
  }

  const handleChangeDefaultLanguage = (event: SelectChangeEvent) => {
    setDefaultLanguage(event.target.value as string)
  }

  const handleAddMore = () => {
    // add more functionality here
  }

  return (
    <StyledContainer>
      <div className='title'>Language</div>
      <div className='second-row'>
        <div className='title sub-title'>Default Language</div>
        <div className='default-language-container'>
          <CustomSelect
            options={[
              { label: 'English', value: 'english' },
              { label: 'Hindi', value: 'hindi' },
              { label: 'Malayalam', value: 'malayalam' }
            ]}
            value={defaultLanguage}
            onChange={handleChangeDefaultLanguage}
            error={false}
            helperText={''}
          />
        </div>
      </div>
      <Divider className='divider' />
      <div className='title'>Additional Languages</div>
      <div className='select-container'>
        <CustomMultiSelect
          selectedOptions={additionalLanguages}
          setSelectedOptions={setAdditionalLanguages}
          options={options}
          onAddMore={handleAddMore}
        />
      </div>
      <div className='action-container'>
        <StyledButton>
          <FileDownloadOutlinedIcon className='icon' />
          <span>Download Template</span>
        </StyledButton>
        <StyledButton className='ml' onClick={handleUploadButtonClick}>
          <FileUploadOutlinedIcon className='icon' />
          <span>Upload Language CSV</span>
        </StyledButton>
        <input type='file' accept='text/csv' style={{ display: 'none' }} ref={csvInputRef} onChange={handleCsvUpload} />
      </div>
    </StyledContainer>
  )
}
