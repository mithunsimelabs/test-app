import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import IconButton from '@mui/material/IconButton'
import CreateIcon from '@mui/icons-material/Create'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import { StyledDiv } from './styledComponents'

interface section {
  id: number
  section: string
  link: string
}

interface AddSectionsItemsProps {
  name: string
  title: string
  sections: section[]
  handleAddSection: () => void
  handleEditSection: (id: number, section: string, link: string) => void
}

export default function AddSectionsItems(props: AddSectionsItemsProps) {
  const { title, sections, handleAddSection, handleEditSection } = props
  const [open, setOpen] = useState<boolean>(false)
  const handleToggle = () => {
    setOpen(!open)
  }

  const handleEdit = (id: number, section: string, link: string) => () => {
    handleEditSection(id, section, link)
  }
  return (
    <StyledDiv>
      <div className='opened-container' onClick={handleToggle}>
        <span>{title}</span>
        <IconButton onClick={handleToggle}>{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</IconButton>
      </div>
      {open && (
        <div className='btm-container'>
          <div className='row head'>
            <span>Sections</span>
            <span>Links</span>
            <span>Actions</span>
          </div>
          {sections.map((item, index) => {
            return (
              <div className='row child' key={index}>
                <span>{item?.section}</span>
                <span>{item.link}</span>
                <IconButton className='action' onClick={handleEdit(item?.id, item?.section, item?.link)}>
                  <CreateIcon sx={{ width: 15, height: 15, marginRight: 0.5 }} />
                  <span>Edit</span>
                </IconButton>
              </div>
            )
          })}
          <div className='btn-action-container'>
            <Button variant='outlined' startIcon={<AddIcon />} onClick={handleAddSection}>
              Add Section
            </Button>
          </div>
        </div>
      )}
    </StyledDiv>
  )
}
