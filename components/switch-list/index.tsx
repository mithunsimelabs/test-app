import React from 'react'
import { StyledCard } from './styledComponents'
import Divider from '@mui/material/Divider'
import CustomSwitch from '@components/custom-switch'

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //console.log("onchange item : ",event?.target?.name)
}

export default function SwitchList({ data }: { data: any[] }) {
  return (
    <>
      {data.map((item, index) => {
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
              {item?.sub && item?.sub?.length ? (
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
              ) : null}
            </StyledCard>
          </>
        )
      })}
    </>
  )
}
