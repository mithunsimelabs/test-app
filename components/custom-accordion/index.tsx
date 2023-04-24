import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import IconButton from '@mui/material/IconButton'
import { StyledDiv } from './styledComponents'

interface CustomAccordionProps {
  message: string
  title: string
}

export default function CustomAccordion(props: CustomAccordionProps) {
  const { title, message } = props
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <StyledDiv>
      <div className='opened-container' onClick={handleToggle}>
        <span>{title}</span>
        <IconButton onClick={handleToggle}>{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</IconButton>
      </div>
      {open && <div className='btm-container'>{message}</div>}
    </StyledDiv>
  )
}
