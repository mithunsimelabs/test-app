import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledContainer } from './styledComponents'
import CustomizedInput from '@components/customized-input'
import { Button } from '@mui/material'
import createSchema from './validationSchema'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'

type FormInputs = {
  pingSecret: string
  pingOrgAlias: string
  pingToken: string
  pingB64Key: string
}

type P = keyof FormInputs
interface fieldsConfigType {
  name: P
  label: string
  required?: boolean
  requiredMsg?: string
  type: 'text' | 'password' | 'number' | 'email'
  inputType: 'textfield'
  info?: string
}

const fieldsConfig: fieldsConfigType[] = [
  {
    name: 'pingSecret',
    label: 'PING SECRET',
    required: true,
    //requiredMsg:"This field is required",
    type: 'password',
    inputType: 'textfield',
    info: 'PING SECRET information'
  },
  {
    name: 'pingOrgAlias',
    label: 'PING ORG ALIAS',
    required: true,
    //requiredMsg:"This field is required",
    type: 'password',
    inputType: 'textfield',
    info: 'PING ORG ALIAS information'
  },
  {
    name: 'pingToken',
    label: 'PING TOKEN',
    required: true,
    //requiredMsg:"This field is required",
    type: 'password',
    inputType: 'textfield',
    info: 'PING TOKEN information'
  },
  {
    name: 'pingB64Key',
    label: 'PING B64 KEY',
    required: true,
    //requiredMsg:"This field is required",
    type: 'password',
    inputType: 'textfield',
    info: 'PING B64 KEY information'
  }
]

export default function PingIDConfiguration() {
  const schema = createSchema(fieldsConfig)
  const {
    register,
    handleSubmit,
    //reset,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormInputs) => {
    //console.log("data : form submit ",data);
  }

  return (
    <StyledContainer>
      <div className='tab-title'>
        <span>PING ID Configurations</span>
        <Button variant='outlined' startIcon={<AddIcon />}>
          Upload Configuration
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fieldsConfig.map((config, index) => {
          const { name, required, inputType, label, info, ...otherProps } = config
          return (
            <div className='row-item' key={index}>
              <div className='label-div'>
                <span>{label}</span>
                {required && <span>*</span>}
                {info && (
                  <Tooltip title={info}>
                    <span className='info'>&#119946;</span>
                  </Tooltip>
                )}
              </div>
              <div className='input-container'>
                {inputType === 'textfield' && (
                  <CustomizedInput
                    {...register(name)}
                    {...otherProps}
                    error={!!errors?.[name]?.message}
                    helperText={errors?.[name]?.message || ''}
                  />
                )}
              </div>
            </div>
          )
        })}

        <div className='btn-action'>
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </div>
      </form>
    </StyledContainer>
  )
}
