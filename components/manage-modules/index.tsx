import React from 'react'
import { StyledCard, StyledContainer } from './styledComponents'
import Divider from '@mui/material/Divider'
import CustomSwitch from '@components/custom-switch'

const mockData = [
  {
    title: 'App Management',
    name: 'app_management',
    description: 'Enable/ Disable the application listing module.'
  },
  {
    title: 'Device Management',
    name: 'device_management',
    description: 'Enable/ Disable the end-user self-service device management module.'
  },
  {
    title: 'User Management',
    name: 'user_management',
    description: 'Enable/ Disable the customer service center module.'
  },
  {
    title: 'Redirect to Devices on Login',
    name: 'redirect_to_device_on_login',
    description: 'Enabling will result in redirecting the end user to the My Devices page instead of the home page.'
  },
  {
    title: 'Conditional Access',
    name: 'conditional_access',
    description: 'Conditional Access to Devices and User Services based on OIDC Scope',
    sub: [
      {
        title: 'Devices Page',
        name: 'conditional_access_devices_page'
      },
      {
        title: 'User Services Page',
        name: 'conditional_access_user_services_page'
      }
    ]
  }
]

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //console.log("onchange item : ",event?.target?.name)
}

export default function ManageModules() {
  return (
    <StyledContainer>
      {mockData.map((item, index) => {
        return (
          <>
            {index !== 0 && <Divider flexItem />}
            <StyledCard key={index}>
              <div className='inner-card'>
                <div className='first-container'>
                  <div className='title'>{item.title}</div>
                  <div className='description'>{item.description}</div>
                </div>
                <CustomSwitch defaultChecked name={item.name} onChange={handleChange} />
              </div>
              {item?.sub && item?.sub?.length && (
                <div className='sub-card'>
                  {item.sub.map((subItem, subIndex) => {
                    return (
                      <div className='sub-row' key={subIndex}>
                        <span className='title'>{subItem?.title}</span>
                        <CustomSwitch defaultChecked name={subItem.name} onChange={handleChange} />
                      </div>
                    )
                  })}
                </div>
              )}
            </StyledCard>
          </>
        )
      })}
    </StyledContainer>
  )
}
