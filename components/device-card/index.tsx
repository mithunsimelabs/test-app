import React, { useState } from 'react'
import { StyledDeviceCard, StyledIconButton, StyledPopoverContent, StyledTypography } from './styledComponents'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AppleIcon from '@mui/icons-material/Apple'
import AndroidIcon from '@mui/icons-material/Android'
import { IPhoneIcon, IpadIcon, AndroidPhoneicon, LapIcon } from './icons'
import EditableTextInput from '@components/editable-input'
import Popover from '@mui/material/Popover'
// import {EditIcon,TestIcon} from '@components/your-device-table/icons'
import QuizIcon from '@mui/icons-material/Quiz'
import SensorsOffIcon from '@mui/icons-material/SensorsOff'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'

interface CardData {
  id: number
  deviceName: string
  type: string
  deviceType: string
  osVersion: string
  brand: 'apple' | 'other'
  enrolementDate: string
  lastUsed: string
  primary: boolean
  secondary: boolean
}

interface DeviceCardProps {
  cardData?: CardData
  handleTestModalOpen: () => void
  handleUnpairModalOpen: () => void
}

const DeviceCard: React.FC<DeviceCardProps> = ({ cardData, handleTestModalOpen, handleUnpairModalOpen }) => {
  const { type, primary, deviceName } = cardData
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClosePopper = () => {
    setAnchorEl(null)
  }

  const popperOpen = Boolean(anchorEl)
  const popperId = popperOpen ? 'styled-icon-button-popover' : undefined

  const handleTestDeviceClick = () => {
    handleClosePopper()
    handleTestModalOpen()
  }

  const handleUnpairDeviceClick = () => {
    handleClosePopper()
    handleUnpairModalOpen()
  }

  const handleMakePrimary = () => {
    handleClosePopper()
  }

  const handleSave = () => {
    //onsave functionality
  }

  return (
    <StyledDeviceCard deviceType={primary ? 'primary' : 'secondary'}>
      <div className='absolute-container'>
        <StyledIconButton onClick={handleClickMenu}>
          <MoreHorizIcon fontSize='small' />
        </StyledIconButton>
        <Popover
          id={popperId}
          open={popperOpen}
          anchorEl={anchorEl}
          onClose={handleClosePopper}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <StyledPopoverContent>
            {/* <StyledTypography variant="subtitle1" onClick={handleEditOpen} gutterBottom>
                    <EditIcon />
                    <span>Edit</span>
                </StyledTypography> */}
            <StyledTypography variant='subtitle1' onClick={handleTestDeviceClick} gutterBottom>
              <QuizIcon sx={{ width: 15, height: 15 }} />
              <span>Test</span>
            </StyledTypography>
            <StyledTypography variant='subtitle1' onClick={handleUnpairDeviceClick} gutterBottom>
              <SensorsOffIcon sx={{ width: 15, height: 15 }} />
              <span>Unpair</span>
            </StyledTypography>
            {!primary && (
              <StyledTypography variant='subtitle1' onClick={handleMakePrimary} gutterBottom>
                <PlaylistAddCheckIcon sx={{ width: 15, height: 15 }} />
                <span>Make Primary</span>
              </StyledTypography>
            )}
          </StyledPopoverContent>
        </Popover>
      </div>
      {type === 'lap' || (type === 'mac' && <LapIcon />)}
      {type === 'iphone' && <IPhoneIcon />}
      {type === 'ipad' && <IpadIcon />}
      {type === 'android' && <AndroidPhoneicon />}
      <div className='card-title'>
        <EditableTextInput value={deviceName} onSave={handleSave} />
      </div>
      <div className='os-type'>
        {type === 'android' ? <AndroidIcon /> : <AppleIcon />}
        <span>{cardData?.osVersion}</span>
      </div>
      <div className='device-type'>{primary ? 'primary' : 'secondary'}</div>
      <div className='sn-no'>S/N: 348720752XXXX</div>
    </StyledDeviceCard>
  )
}

export default DeviceCard
