import React from 'react'
import {
  StyledTable,
  StyledTableHead,
  StyledTH,
  StyledTableBody,
  StyledTdDevice,
  StyledTdDeviceDetails,
  StyledTdDeviceType,
  StyledTd,
  StyledTdActions
} from './styledComponents'
import Divider from '@mui/material/Divider'
import { MobileIcon, LapIcon, SeralNoIcon } from './icons'
import EditableTextInput from '@components/editable-input'
import AppleIcon from '@mui/icons-material/Apple'
import AndroidIcon from '@mui/icons-material/Android'
import QuizIcon from '@mui/icons-material/Quiz'
import SensorsOffIcon from '@mui/icons-material/SensorsOff'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import Tooltip from '@mui/material/Tooltip'
import { useMediaQuery, useTheme } from '@mui/material'

interface TableRowData {
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

interface DeviceTableProps {
  tableData: TableRowData[]
  handleOpenTestModal: () => void
  handleOpenUnpairModal: () => void
}

interface RowProps {
  rowItem: TableRowData
  handleOpenTestModal: () => void
  handleOpenUnpairModal: () => void
}

const tableHeadDetails = {
  device: {
    width: 7,
    displayName: 'Device'
  },
  deviceDetails: {
    width: 33,
    displayName: 'Device Details'
  },
  deviceType: {
    width: 15,
    displayName: 'Device Type'
  },
  enrolementDate: {
    width: 15,
    displayName: 'Enrolement Date'
  },
  lastUsed: {
    width: 15,
    displayName: 'Last Used'
  },
  actions: {
    width: 15,
    displayName: 'Actions'
  }
}

function TableDataRow(props: RowProps) {
  const { primary, deviceName, type, osVersion, lastUsed, enrolementDate } = props.rowItem
  const { handleOpenTestModal, handleOpenUnpairModal } = props

  const theme = useTheme()
  const isXlDown = useMediaQuery(theme.breakpoints.down('xl'))
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'))

  const handleSave = () => {
    //save functionality here
  }

  return (
    <StyledTableBody>
      <StyledTdDevice width={tableHeadDetails?.['device']?.width}>
        {type === 'lap' || type === 'mac' ? <LapIcon /> : <MobileIcon />}
      </StyledTdDevice>
      <StyledTdDeviceDetails width={tableHeadDetails?.['deviceDetails']?.width}>
        <EditableTextInput value={deviceName} onSave={handleSave} />
        <div className='details'>
          {type === 'android' ? (
            <AndroidIcon style={{ width: '16px', height: '16px' }} />
          ) : (
            <AppleIcon style={{ width: '16px', height: '16px' }} />
          )}
          <span className='align-left align-right'>{osVersion}</span>
          <SeralNoIcon />
          <span className='align-left'>348720752XXXX</span>
        </div>
      </StyledTdDeviceDetails>
      <StyledTdDeviceType width={tableHeadDetails?.['deviceType']?.width} type={primary ? 'primary' : 'secondary'}>
        <div className='btn-item'>{primary ? 'primary' : 'secondary'}</div>
      </StyledTdDeviceType>
      {!isLgDown && <StyledTd width={tableHeadDetails?.['enrolementDate']?.width}>{enrolementDate}</StyledTd>}
      <StyledTd width={tableHeadDetails?.['lastUsed']?.width}>{lastUsed}</StyledTd>
      <StyledTdActions width={tableHeadDetails?.['actions']?.width}>
        <div>
          {/* <div className='align-right' onClick={handleEditOpen}>
                        <EditIcon />
                        <span className='align-left'>Edit</span>
                    </div> */}
          <Tooltip title='Test Device'>
            <div className='align-right' onClick={handleOpenTestModal}>
              <QuizIcon sx={{ width: 15, height: 15 }} />
              {!isXlDown && <span className='align-left'>Test</span>}
            </div>
          </Tooltip>
          <Tooltip title='Unpair Device'>
            <div className='align-right' onClick={handleOpenUnpairModal}>
              <SensorsOffIcon sx={{ width: 15, height: 15 }} />
              {!isXlDown && <span className='align-left'>Unpair</span>}
            </div>
          </Tooltip>
          {!primary && (
            <Tooltip title='Make Primary'>
              <div>
                <PlaylistAddCheckIcon sx={{ width: 15, height: 15 }} />
                {!isXlDown && <span className='align-left'>Make Primary</span>}
              </div>
            </Tooltip>
          )}
        </div>
      </StyledTdActions>
    </StyledTableBody>
  )
}

export default function YourDeviceTable(props: DeviceTableProps) {
  const { tableData, handleOpenTestModal, handleOpenUnpairModal } = props
  const theme = useTheme()
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'))
  const addedWidth = isLgDown ? 5 : 0
  return (
    <StyledTable>
      <StyledTableHead>
        {Object.keys(tableHeadDetails).map((item, index) => {
          if (!(item === 'enrolementDate' && isLgDown))
            return (
              <StyledTH key={index} width={tableHeadDetails?.[item]?.width + addedWidth}>
                {tableHeadDetails?.[item]?.displayName}
              </StyledTH>
            )
        })}
      </StyledTableHead>
      {tableData.map((item, index) => {
        if (index != 0)
          return (
            <>
              <Divider />
              <TableDataRow
                key={index}
                rowItem={item}
                handleOpenTestModal={handleOpenTestModal}
                handleOpenUnpairModal={handleOpenUnpairModal}
              />
            </>
          )
        return (
          <TableDataRow
            key={index}
            rowItem={item}
            handleOpenTestModal={handleOpenTestModal}
            handleOpenUnpairModal={handleOpenUnpairModal}
          />
        )
      })}
      <Divider />
    </StyledTable>
  )
}
