import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledContainer } from './styledComponents'
import CustomizedInput from '@components/customized-input'
import { Button } from '@mui/material'
import createSchema from './validationSchema'
import Tooltip from '@mui/material/Tooltip'

type FormInputs = {
  clientId: string
  clientSecret: string
  callbackUrl: string
  issuer: string
  authorizationUrl: string
  tokenUrl: string
  scope: string
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

// const schema = yup.object().shape({
//   clientId: yup.string().required(),
//   clientSecret: yup.string().required(),
//   callbackUrl: yup.string().required(),
//   issuer: yup.string().required(),
//   authorizationUrl: yup.string().required(),
//   tokenUrl: yup.string().required(),
//   scope: yup.string().required(),
// });

const fieldsConfig: fieldsConfigType[] = [
  {
    name: 'clientId',
    label: 'Client ID',
    required: true,
    //requiredMsg:"This field is required",
    type: 'password',
    inputType: 'textfield',
    info: 'Client ID information'
  },
  {
    name: 'clientSecret',
    label: 'Client Secret',
    required: true,
    //requiredMsg:"This field is required",
    type: 'password',
    inputType: 'textfield',
    info: 'Client Secret information'
  },
  {
    name: 'callbackUrl',
    label: 'Callback URL',
    required: true,
    //requiredMsg:"This field is required",
    type: 'text',
    inputType: 'textfield',
    info: 'Callback URL information'
  },
  {
    name: 'issuer',
    label: 'Issuer',
    required: true,
    //requiredMsg:"This field is required",
    type: 'text',
    inputType: 'textfield',
    info: 'Issuer information'
  },
  {
    name: 'authorizationUrl',
    label: 'Authorization URL',
    required: true,
    //requiredMsg:"This field is required",
    type: 'text',
    inputType: 'textfield',
    info: 'Authorization URL information'
  },
  {
    name: 'tokenUrl',
    label: 'Token URL',
    required: true,
    //requiredMsg:"This field is required",
    type: 'text',
    inputType: 'textfield',
    info: 'Token URL information'
  },
  {
    name: 'scope',
    label: 'Scope',
    required: true,
    //requiredMsg:"This field is required",
    type: 'text',
    inputType: 'textfield',
    info: 'Scope information'
  }
]

export default function SSOConfiguration() {
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
      <div className='tab-title'>SSO Configurations</div>
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
          <Button
            //onClick={}
            variant='contained'
            type='submit'
          >
            Submit
          </Button>
        </div>
      </form>
    </StyledContainer>
  )
}
