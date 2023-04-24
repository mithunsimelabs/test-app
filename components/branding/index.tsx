import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { StyledContainer, StyledBottomContainer, StyledScheme, StyledColorPickerContainer } from './styledComponents'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CustomSwitch from '@components/custom-switch'
import CustomRadio from '@components/custom-radio'
import ColorPicker from '@components/color-picker'
import LogoInput from '@components/logo-input'
import { useTheme } from '@mui/material'

const Preview = dynamic(() => import('./preview'), {
  ssr: false
}) as any

interface ColorProps {
  primary: string
  secondary: string
  teritiary: string
  bgColor: string
}

export default function Branding() {
  const theme = useTheme()
  const [defaultScheme, setDefaultScheme] = useState<ColorProps>({
    primary: theme.palette.primary.main,
    teritiary: theme.palette.secondary.main,
    secondary: theme.palette.text.primary,
    bgColor: theme.palette.bgColor.main
  })
  const [customScheme, setCustomScheme] = useState<ColorProps>({
    primary: theme.palette.primary.main,
    teritiary: theme.palette.secondary.main,
    secondary: theme.palette.text.primary,
    bgColor: theme.palette.bgColor.main
  })
  const [selectedRadio, setSelectedRadio] = useState<'custom' | 'default'>('default')

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value as 'custom' | 'default')
  }

  const handleColorChange = (name: string, color: string, type: 'default' | 'custom') => {
    const updatedScheme = type === 'default' ? { ...defaultScheme } : { ...customScheme }
    updatedScheme[name] = color
    if (type === 'default') setDefaultScheme(updatedScheme)
    else setCustomScheme(updatedScheme)
  }
  return (
    <StyledContainer>
      <div className='title'>Logo</div>
      <div className='description'>Main Logo for the platform</div>
      <div className='container'>
        <LogoInput title='Main Logo' info='Upload a 32 × 32 pixel ICO, PNG, GIF, or JPG to display in browser tabs.' />
        <LogoInput title='Favicon' info='Upload a 32 × 32 pixel ICO, PNG, GIF, or JPG to display in browser tabs.' />
      </div>
      <Divider className='divider' flexItem />
      <div className='container'>
        <div>
          <div className='title'>Color</div>
          <div className='description'>Enable/ Disable the end-user self-service device management module.</div>
        </div>
        <CustomSwitch defaultChecked />
      </div>
      <StyledBottomContainer>
        <div className='first-container'>
          <div className='row'>
            <div>
              <StyledScheme
                primary={customScheme?.primary}
                teritiary={customScheme?.teritiary}
                secondary={customScheme?.secondary}
                bgColor={customScheme?.bgColor}
              >
                <div className='bg' />
                <div className='primary' />
                <div className='secondary' />
                <div className='teritiary' />
              </StyledScheme>
            </div>
            <div className='second'>
              <StyledScheme
                primary={defaultScheme?.primary}
                secondary={defaultScheme?.secondary}
                teritiary={defaultScheme?.teritiary}
                bgColor={defaultScheme?.bgColor}
              >
                <div className='bg' />
                <div className='primary' />
                <div className='secondary' />
                <div className='teritiary' />
              </StyledScheme>
            </div>
          </div>
          <RadioGroup
            value={selectedRadio}
            onChange={handleRadioChange}
            aria-labelledby='customized-radios-br'
            name='customized-radios'
          >
            <FormControlLabel value='custom' control={<CustomRadio />} label='Custom Scheme ' />
            <FormControlLabel className='align-left' value='default' control={<CustomRadio />} label='Default Scheme' />
          </RadioGroup>
          <StyledColorPickerContainer>
            <div className='item mb'>
              <span>Background Color</span>
              <ColorPicker
                currentColor={selectedRadio === 'default' ? defaultScheme?.bgColor : customScheme?.bgColor}
                name='bgColor'
                type={selectedRadio}
                onChange={handleColorChange}
              />
            </div>
            <div className='item mb'>
              <span>Primary Color</span>
              <ColorPicker
                currentColor={selectedRadio === 'default' ? defaultScheme?.primary : customScheme?.primary}
                name='primary'
                type={selectedRadio}
                onChange={handleColorChange}
              />
            </div>
            <div className='item mb'>
              <span>Secondary Color</span>
              <ColorPicker
                currentColor={selectedRadio === 'default' ? defaultScheme?.secondary : customScheme?.secondary}
                name='secondary'
                type={selectedRadio}
                onChange={handleColorChange}
              />
            </div>
            <div className='item'>
              <span>Teritiary</span>
              <ColorPicker
                currentColor={selectedRadio === 'default' ? defaultScheme?.teritiary : customScheme?.teritiary}
                name='teritiary'
                type={selectedRadio}
                onChange={handleColorChange}
              />
            </div>
          </StyledColorPickerContainer>
        </div>
        <div className='preview-container'>
          <Preview
            primaryColor={selectedRadio === 'default' ? defaultScheme?.primary : customScheme?.primary}
            secondaryColor={selectedRadio === 'default' ? defaultScheme?.secondary : customScheme?.secondary}
            teritiaryColor={selectedRadio === 'default' ? defaultScheme?.teritiary : customScheme?.teritiary}
            backgroundColor={selectedRadio === 'default' ? defaultScheme?.bgColor : customScheme?.bgColor}
          />
        </div>
        {/* {selectedRadio === 'default' && (
              <div className='item mb'>
                <span>Secondary Color</span>
                <ColorPicker
                  currentColor={selectedRadio === 'default' ? defaultScheme?.secondary : undefined}
                  name='secondary'
                  type={selectedRadio}
                  onChange={handleColorChange}
                />
              </div>
            )}
            <div className='item'>
              <span>Teritiary</span>
              <ColorPicker
                currentColor={selectedRadio === 'default' ? defaultScheme?.teritiary : customScheme?.teritiary}
                name='teritiary'
                type={selectedRadio}
                onChange={handleColorChange}
              />
            </div>
          </StyledColorPickerContainer>
        </div>
        <div className='preview-container'>PREVIEW</div> */}
      </StyledBottomContainer>
    </StyledContainer>
  )
}
