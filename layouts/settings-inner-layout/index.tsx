import React from 'react'
import { StyledContainer, StyledLeftContainer, StyledRightContainer, StyledTab } from './styledComponents'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

interface TabProps {
  name: string
  displayName: string
}
interface propTypes {
  children: JSX.Element
  tabs: TabProps[]
  activeTab: string
  setActiveTab: (name: string) => void
}

export default function SettingsInnerLayout(props: propTypes) {
  const { children, tabs, activeTab, setActiveTab } = props
  const handleTabClick = (tabName: string) => () => {
    setActiveTab(tabName)
  }
  return (
    <StyledContainer>
      <StyledLeftContainer>
        {tabs.map((item, index) => {
          return (
            <StyledTab key={index} active={item.name === activeTab} id={item.name} onClick={handleTabClick(item.name)}>
              <span>{item.displayName}</span>
              {item.name === activeTab && <ChevronRightIcon />}
            </StyledTab>
          )
        })}
      </StyledLeftContainer>
      <StyledRightContainer>{children}</StyledRightContainer>
    </StyledContainer>
  )
}
