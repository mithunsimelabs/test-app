import React, { ChangeEvent } from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from './searchIcon'
import CancelIcon from '@mui/icons-material/Cancel'
import IconButton from '@mui/material/IconButton'

interface SearchBarProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  customClassName?: string
  onCancel?: () => void
}

const SearchBarWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '48px',
  border: '1px solid #D2D2D2',
  borderRadius: '8px'
})

const SearchBarInput = styled(InputBase)({
  fontFamily: "'Inter'",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '17px',
  letterSpacing: '-0.04em',
  fontFeatureSettings: "'liga' off",
  color: '#445F6F',
  paddingLeft: 12,
  paddingRight: 12,
  width: '100%',
  height: '100%',
  '& >svg': {
    marginRight: 13
  },
  '&::placeholder': {
    color: '#ABAEB0'
  }
})

// const SearchIconWrapper = styled(SearchIcon)({
//   color: "#ABAEB0",
//   marginRight: "8px"
// });

const CustomSearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder, customClassName, onCancel }) => {
  return (
    <SearchBarWrapper className={customClassName}>
      <SearchBarInput
        placeholder={placeholder ? placeholder : 'Search'}
        value={value}
        onChange={onChange}
        startAdornment={<SearchIcon />}
        endAdornment={
          onCancel &&
          value && (
            <IconButton onClick={onCancel}>
              <CancelIcon />
            </IconButton>
          )
        }
      />
    </SearchBarWrapper>
  )
}

export default CustomSearchBar
