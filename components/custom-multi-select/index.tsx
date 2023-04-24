import React from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import CloseIcon from '@mui/icons-material/Close'
import { StyledChip, StyledInput } from './styledcomponents'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  selectedOptions: string[]
  setSelectedOptions: (value: string[]) => void
  options: Option[]
  onAddMore?: () => void
}

const CustomMultiSelect: React.FC<MultiSelectProps> = ({ options, selectedOptions, setSelectedOptions, onAddMore }) => {
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[]
    setSelectedOptions(value)
  }
  const handleChipDelete = (value: string, event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof SVGElement) {
      const tempOptions: string[] = [...selectedOptions]
      const newOptions = tempOptions.filter((option) => option !== value)
      setSelectedOptions(newOptions)
    }
  }

  return (
    <Select
      error={false}
      sx={{ width: '100%' }}
      multiple
      value={selectedOptions}
      onChange={handleSelectChange}
      input={<StyledInput />}
      renderValue={(selected) => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {(selected as string[]).map((value) => (
            <StyledChip
              key={value}
              label={value}
              deleteIcon={<CloseIcon sx={{ width: 15, height: 15 }} onMouseDown={(event) => event.stopPropagation()} />}
              onDelete={(event) => handleChipDelete(value, event)}
              onClick={(event) => event.stopPropagation()}
            />
          ))}
        </div>
      )}
      endAdornment={
        onAddMore ? (
          <InputAdornment position='end'>
            <IconButton onClick={onAddMore}>
              <span className='add-more'>+add more</span>
            </IconButton>
          </InputAdornment>
        ) : undefined
      }
    >
      {options.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CustomMultiSelect
