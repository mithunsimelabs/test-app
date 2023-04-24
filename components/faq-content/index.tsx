import React, { ChangeEvent, useState } from 'react'
import CustomAccordion from '@components/custom-accordion'
import { TextField } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import { StyledContainer } from './styledComponents'

const category = [
  {
    id: 1,
    name: 'General'
  },
  {
    id: 2,
    name: 'Specific'
  }
]

const faq = [
  {
    id: 1,
    question: 'How does MFA work?',
    answer:
      'MFA works by providing additional identity checks and verification to ensure you are signing in, as you say you are. This additional validation combines distinct and different methods to authenticate, requiring you to successfully complete each authentication challenge.',
    category: 1,
    visibility: 'Public'
  },
  {
    id: 2,
    question: 'How does MFA work?',
    answer:
      'MFA works by providing additional identity checks and verification to ensure you are signing in, as you say you are. This additional validation combines distinct and different methods to authenticate, requiring you to successfully complete each authentication challenge.',
    category: 2,
    visibility: 'Public'
  },
  {
    id: 3,
    question: 'Can I register multiple devices',
    answer: 'Yes, if you wish to do so to have a backup device.',
    category: 1,
    visibility: 'Public'
  }
]

export default function FAQContent() {
  const [categoryFilter, setCategoryFilter] = useState([])

  const handleChange = (e) => {
    const {
      target: { value }
    } = e
    setCategoryFilter(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <StyledContainer>
      <div className='filter-container'>
        <TextField label='Search' className='search' />
        <Select
          className='select'
          multiple
          value={categoryFilter}
          onChange={handleChange}
          renderValue={(selected) =>
            category
              .filter((x) => selected.includes(x.id))
              .map((c) => c.name)
              .join(', ')
          }
        >
          {category.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              <Checkbox checked={categoryFilter.indexOf(c.id) > -1} />
              <ListItemText primary={c.name} />
            </MenuItem>
          ))}
        </Select>
      </div>
      {category
        .filter((x) => {
          if (categoryFilter.length > 0) return categoryFilter.includes(x.id)
          else return true
        })
        .map((c) => {
          return (
            <div className='category-container' key={c.id}>
              <div className='category-heading'>{c.name}</div>
              {faq
                .filter((x) => x.category === c.id)
                .map((f) => {
                  return (
                    <div key={f.id}>
                      <CustomAccordion title={f.question} message={f.answer} />
                    </div>
                  )
                })}
            </div>
          )
        })}
    </StyledContainer>
  )
}
