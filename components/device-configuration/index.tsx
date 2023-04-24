import React from 'react'
import Divider from '@mui/material/Divider'
import CustomSwitch from '@components/custom-switch'
import CustomSelect from '@components/custom-select'
import { TextField } from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { StyledCard, StyledContainer } from './styledComponents'
import SwitchList from '@components/switch-list'

const mockData = [
  {
    title: 'Device Type Override',
    name: 'device_type_overrirde',
    description:
      "Enabling this feature will always expect the allowed device types to be passed during authentication via OIDC scopes in the 'device_type' as a comma separated value. Allowed device type values are 'MOBILE, DESKTOP, SMS, EMAIL, VOICE, YUBI, AUTHAPP, FIDO'. Note: The specified device types needs to be enabled at the tenant level.",
    sub: []
  },
  {
    title: 'Rename Device',
    name: 'rename_device',
    description: 'Enable / Disable the capability to rename (nick name) the devices.',
    sub: []
  },
  {
    title: 'Test Devices',
    name: 'test_devices',
    description:
      'Enable / Disable the capability to test the devices in your profile via triggering an authenitcation.',
    sub: []
  },
  {
    title: 'Unpair Device',
    name: 'unpair_device',
    description: 'Enable / Disable the capability to unpair(remove) the devices.',
    sub: []
  },
  {
    title: 'Set Primary Device',
    name: 'set_primary_device',
    description: 'Enable / Disable the capability to switch the devices to PRIMARY / SECONDARY.',
    sub: []
  },
  {
    title: 'Auto Populate Email',
    name: 'auto_populate_email',
    description:
      'Enable / Disable the feature of auto populating email from the scopes. Disabling will allow the user to override the email.',
    sub: []
  },
  {
    title: 'Auto Populate Phone',
    name: 'auto_populate_phone',
    description:
      'Enable / Disable the feature of auto populating phone from the scopes. Disabling will allow the user to override the phone.',
    sub: []
  }
]

const orderTableContent = [
  {
    index: 0,
    label: 'Test'
  },
  {
    index: 1,
    label: 'Unpair'
  },
  {
    index: 2,
    label: 'Primary'
  }
]

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //console.log("onchange item : ",event?.target?.name)
}

export default function DeviceConfiguration() {
  return (
    <StyledContainer>
      <StyledCard>
        <div className='inner-card inner-card-grid'>
          <div className='first-container'>
            <div className='title'>Device Type</div>
            <div className='description'>
              Select all the device types you have configured on the PingID setup on the PingOne admin console.
            </div>
          </div>
          <CustomSelect
            options={[]}
            value={'select'}
            // onChange={}
            error={false}
          />
        </div>
      </StyledCard>
      <Divider flexItem />
      <StyledCard>
        <div className='inner-card inner-card-grid'>
          <div className='first-container'>
            <div className='title'>Max and Min Devices</div>
            <div className='description'>
              This setting should be either equal to or lower than whats confiugured on the PingOne.
            </div>
          </div>
          <div className='dual-input'>
            <TextField label='Min' type='number' />
            <TextField label='Max' type='number' />
          </div>
        </div>
      </StyledCard>
      <Divider flexItem />
      <StyledCard>
        <div className='inner-card inner-card-grid'>
          <div className='first-container'>
            <div className='title'>Localization</div>
            <div className='description'>
              {`Select the default locale for localization. Select BROWSER if the
							locale needs to be set based on user's browser settings.`}
            </div>
          </div>
          <CustomSelect
            options={[]}
            value={'select'}
            // onChange={}
            error={false}
          />
        </div>
      </StyledCard>
      <Divider flexItem />
      <SwitchList data={mockData} />
      <Divider flexItem />
      <StyledCard>
        <div className='inner-card'>
          <div className='first-container'>
            <div className='title'>Change Order Button</div>
            <div className='description'>
              {`Set the Order of the Buttons - 'Make Primary', 'Test', 'Unpair
							Device'.`}
            </div>
            <div className='order-table'>
              <div className='header'>
                <div>Reorder</div>
                <div>Button</div>
              </div>
              <div className='body'>
                {orderTableContent.map((item) => {
                  return (
                    <div className='row' key={item.index}>
                      <div>
                        {item?.index >= 0 && item?.index < 2 ? <ArrowCircleDownIcon /> : null}
                        {item?.index > 0 && item?.index <= 2 ? <ArrowCircleUpIcon /> : null}
                      </div>
                      <div>{item.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <CustomSwitch defaultChecked name='change_button_order' onChange={handleChange} />
        </div>
      </StyledCard>
    </StyledContainer>
  )
}
