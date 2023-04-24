import React from 'react'
import PublicPageLayout from '@layouts/public-page-layout'
import { StyledContainer, CustomLabel } from '@components/styled-login-page'
import { Checkbox } from '@mui/material'
import Link from 'next/link'
import Input from '@components/custom-input'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler, useController } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface LoginFormInputs {
  username: string
  password: string
}

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

export default function IndexPage() {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema)
  })

  const usernameController = useController({
    name: 'username',
    control,
    defaultValue: ''
  })

  const passwordController = useController({
    name: 'password',
    control,
    defaultValue: ''
  })

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    //console.log(data);
    router.push('your-devices')
  }

  return (
    <PublicPageLayout>
      <StyledContainer>
        <div className='main-container'>
          <div className='text-container'>
            <div className='heading'>Text here</div>
            <div className='description'>Welcome back! Please login to your account.</div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-container'>
              <div className='input-item'>
                <Input
                  error={errors.username?.message || ''}
                  type='text'
                  value={usernameController.field.value}
                  label='Username'
                  onChange={(value: string) => {
                    usernameController.field.onChange(value)
                  }}
                />
              </div>
              <div className='input-item'>
                <Input
                  error={errors.password?.message || ''}
                  type='password'
                  value={passwordController.field.value}
                  label='Password'
                  onChange={(value: string) => {
                    passwordController.field.onChange(value)
                  }}
                />
              </div>
              <div className='bottom-section'>
                <CustomLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: '#DDE5EA'
                      }}
                    />
                  }
                  label='Remember Me'
                />
                <Link href='/forgot-password' className='link'>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className='action-container'>
              <Button variant='contained' type='submit'>
                Login
              </Button>
              <Button variant='outlined' onClick={() => router.push('signup')}>
                Sign Up
              </Button>
            </div>
          </form>
        </div>
        <div className='footer'>
          <div>Or login with</div>
          <div className='label'>Google</div>
          <div className='label'>SSO</div>
        </div>
      </StyledContainer>
    </PublicPageLayout>
  )
}
