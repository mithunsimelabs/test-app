import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import CompanyLogo from '@assets/images/logo_static.svg'
import {
  //AppsIcon,
  DevicesIcon,
  UsersIcon,
  SettingsIcon,
  FAQIcon
} from './icons'
import { StyledContainer, StyledNavLink } from './styledComponents'

export default function Sidebar() {
  const router = useRouter()

  const handleNavigate = (route: string) => () => {
    router.push(`/${route}`)
  }
  return (
    <StyledContainer>
      <div className='topContainer'>
        <Image src={CompanyLogo} alt='company-logo' width={56} height={56} />
        <div className='navlinkContainer'>
          <StyledNavLink
            id='your-devices'
            onClick={handleNavigate('your-devices')}
            active={router.pathname === '/your-devices'}
          >
            <DevicesIcon />
          </StyledNavLink>
          {/* <StyledNavLink 
                    id="connected-apps"  
                    onClick={handleNavigate("connected-apps")}
                    active={router.pathname==="/connected-apps"}
                >
                   <AppsIcon />
                </StyledNavLink> */}
          <StyledNavLink
            id='manage-users'
            onClick={handleNavigate('manage-users')}
            active={router.pathname === '/manage-users'}
          >
            <UsersIcon />
          </StyledNavLink>
          <StyledNavLink id='settings' onClick={handleNavigate('settings')} active={router.pathname === '/settings'}>
            <SettingsIcon />
          </StyledNavLink>
          <StyledNavLink id='faq' onClick={handleNavigate('faq')} active={router.pathname === '/faq'}>
            <FAQIcon />
          </StyledNavLink>
        </div>
      </div>
      <div>v1.0</div>
    </StyledContainer>
  )
}
