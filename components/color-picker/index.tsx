import React from 'react'
import { styled } from '@mui/material/styles'

interface ColorPickerProps {
  currentColor: string
  name: 'primary' | 'secondary' | 'teritiary' | 'bgColor'
  type: 'default' | 'custom'
  onChange: (name: 'primary' | 'secondary' | 'teritiary' | 'bgColor', color: string, type: 'default' | 'custom') => void
}

interface StyledItemProps {
  disabled: boolean
}
export const StyledItem = styled('div')<StyledItemProps>(({ theme, disabled }) => ({
  width: 95,
  height: 30,
  background: 'rgba(237, 237, 237, 0.8)',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  padding: 5,
  justifyContent: 'space-between',
  fontWeight: 400,
  fontSize: 14,
  '& input[type="color"]': {
    width: 20,
    height: 20,
    padding: 0,
    margin: 0,
    border: 'none',
    outline: 'none',
    cursor: disabled ? 'current' : 'pointer',
    '&::-webkit-color-swatch-wrapper': {
      padding: 0
    }
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: 12
  }
}))

export default function ColorPicker(props: ColorPickerProps) {
  const { onChange, currentColor = '#000000', name, type } = props
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value
    onChange(name, newColor, type)
  }
  return (
    <StyledItem disabled={type === 'default'}>
      <span>{currentColor}</span>
      <input type='color' value={currentColor} onChange={handleChange} disabled={type === 'default'} />
    </StyledItem>
  )
}
