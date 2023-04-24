import React, { useState } from 'react'
import { StyledContainer } from './styledComponents'
import CustomSwitch from '@components/custom-switch'
import CustomRadio from '@components/custom-radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import LogoInput from '@components/logo-input'
import Divider from '@mui/material/Divider'
import AddSectionsItems from '@components/add-sections-items'
import AddEditSectionModal from '@components/add-edit-section-modal'

interface AddEditModalStateProps {
  open: boolean
  type: 'add' | 'edit'
  id?: number | null
  section: string
  link: string
}

const mockData = [
  {
    id: 1,
    link: '/privacy-policy',
    section: 'Privacy Policy'
  },
  {
    id: 2,
    link: '/legal-info',
    section: 'Legal Info'
  },
  {
    id: 3,
    link: '/careers',
    section: 'Careers'
  }
]

export default function SectionsAndLinks() {
  const [loginStyle, setLoginStyle] = useState<'solid-color' | 'image-banner'>('solid-color')
  const [addEditSectionModal, setAddEditModal] = useState<AddEditModalStateProps>({
    open: false,
    type: 'add',
    id: null,
    section: '',
    link: ''
  })
  const [sections, setSections] = useState(mockData)

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginStyle(event.target.value as 'solid-color' | 'image-banner')
  }

  const handleCloseAddEditSectionModal = () => {
    setAddEditModal({
      open: false,
      type: 'add',
      id: null,
      section: '',
      link: ''
    })
  }
  const handleAddSectionClick = () => {
    //add modal open functionality
    setAddEditModal({
      open: true,
      type: 'add',
      id: null,
      section: '',
      link: ''
    })
  }
  const handleEditSectionClick = (id: number, section: string, link: string) => {
    //edit modal open functionality
    setAddEditModal({
      open: true,
      type: 'edit',
      id: id,
      section,
      link
    })
  }

  const onEdit = () => {
    //Edit sApi call
  }

  const onAdd = () => {
    //Add Api call
  }
  return (
    <StyledContainer>
      <div className='first-container'>
        <div className='inner-sub-container'>
          <div className='title'>Custom Login Page</div>
          <div className='info'>Enable custom login page with your branding</div>
        </div>
        <CustomSwitch defaultChecked />
      </div>
      <RadioGroup
        value={loginStyle}
        onChange={handleRadioChange}
        aria-labelledby='customized-radios-br'
        name='customized-radios'
      >
        <FormControlLabel value='solid-color' control={<CustomRadio />} label='Solid Color' />
        <FormControlLabel className='align-left' value='image-banner' control={<CustomRadio />} label='Image Banner' />
      </RadioGroup>
      {loginStyle === 'image-banner' && (
        <div className='img-input-container'>
          <LogoInput info='Upload a 600 × 1080 pixel JPG, PNG, GIF, to display' imageHeight={1080} imageWidth={600} />
        </div>
      )}
      <Divider className='separator' flexItem />
      <div className='title'>Sections</div>
      <AddSectionsItems
        name='footer'
        title='Footer'
        handleAddSection={handleAddSectionClick}
        handleEditSection={handleEditSectionClick}
        sections={sections}
      />
      <AddSectionsItems
        name='menu'
        title='Menu'
        handleAddSection={handleAddSectionClick}
        handleEditSection={handleEditSectionClick}
        sections={sections}
      />
      <AddSectionsItems
        name='home_page'
        title='Home Page'
        handleAddSection={handleAddSectionClick}
        handleEditSection={handleEditSectionClick}
        sections={sections}
      />
      {addEditSectionModal?.open && (
        <AddEditSectionModal
          open={addEditSectionModal?.open}
          type={addEditSectionModal?.type}
          onClose={handleCloseAddEditSectionModal}
          section={addEditSectionModal?.section}
          link={addEditSectionModal?.link}
          onClick={addEditSectionModal?.type === 'add' ? onAdd : onEdit}
        />
      )}
    </StyledContainer>
  )
}
