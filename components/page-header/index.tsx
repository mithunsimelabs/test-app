import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Popover from '@mui/material/Popover'
import { StyledPopoverContent, StyledTypography, StyledContainer, UserMenu } from './styledComponents'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'

export default function PageHeader({
  title,
  description,
  dividerBottom = false
}: {
  title: string
  description: string
  dividerBottom?: boolean
}) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClosePopper = () => {
    setAnchorEl(null)
  }

  const popperOpen = Boolean(anchorEl)
  const popperId = popperOpen ? 'styled-icon-button-popover' : undefined

  const email = 'portaladmin@brianerdsolutions.com'

  return (
    <StyledContainer>
      <div className='innerContainer'>
        <div className='pageTitle'>
          <div>{title}</div>
          <div className='description'>{description}</div>
        </div>
        <UserMenu>
          <Avatar
            alt='John Paul'
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
            sx={{ width: 32, height: 32 }}
          />
          <div className='username'>John Paul</div>
          <IconButton sx={{ color: '#ABAEB0', width: 32, height: 32 }} onClick={handleClickMenu}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </UserMenu>
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
            <Tooltip title={email}>
              <StyledTypography variant='subtitle1' gutterBottom>
                <span className='emailpop'>{email}</span>
              </StyledTypography>
            </Tooltip>
            <Divider />
            <StyledTypography variant='subtitle1' gutterBottom>
              <span className='emailpop'>About</span>
            </StyledTypography>
            <Divider />
            <StyledTypography variant='subtitle1' gutterBottom>
              <span className='SignOut'>Sign Out</span>
            </StyledTypography>
          </StyledPopoverContent>
        </Popover>
      </div>

      {dividerBottom && <hr className='bottomDivider' />}
    </StyledContainer>
  )
}
