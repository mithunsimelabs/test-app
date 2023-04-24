import React from 'react'
import Divider from '@mui/material/Divider'
import CustomizedInput from '@components/customized-input'
import CustomSelect from '@components/custom-select'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import Button from '@mui/material/Button'
import { StyledContainer, StyledCard } from './styledComponents'
import { configurationList } from './config'

export default function SmtpConfiguration() {
  return (
    <StyledContainer>
      {configurationList.map((item, index) => {
        return (
          <>
            {index != 0 && <Divider flexItem />}
            <StyledCard key={index}>
              <div className='first-section'>
                <div className='title'>{item?.title}</div>
                <div className='description'>{item?.description}</div>
              </div>
              <div className='input-section'>
                {(item?.inputType === 'email' ||
                  item?.inputType === 'text' ||
                  item?.inputType === 'password' ||
                  item?.inputType === 'number') && (
                  <CustomizedInput value={item?.defaultValue} type={item?.inputType} />
                )}
                {item?.inputType === 'select' && <CustomSelect value={item?.defaultValue} options={item?.options} />}
                {item?.inputType === 'edit' && (
                  <IconButton name={item?.name} color='primary'>
                    <EditIcon />
                  </IconButton>
                )}
              </div>
            </StyledCard>
          </>
        )
      })}
      <div className='submit-btn-container'>
        <Button variant='contained' type='submit'>
          Submit
        </Button>
      </div>
    </StyledContainer>
  )
}
