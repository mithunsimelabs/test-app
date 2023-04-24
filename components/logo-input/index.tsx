import React, { useRef, useState } from 'react'
import { StyledDiv, StyledButton } from './styledcomponents'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'

interface InputPropsType {
  title?: string
  info: string
  imageWidth?: number
  imageHeight?: number
}

export default function LogoInput(props: InputPropsType) {
  const { title, info, imageHeight = 32, imageWidth = 32 } = props
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [error, setError] = useState('')
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      // validate file type and size here if needed
      const reader = new FileReader()
      reader.onload = () => {
        const img = new Image()
        img.onload = () => {
          if (!(img.width === imageWidth && img.height === imageHeight)) {
            setError(`image must be exactly ${imageWidth} x ${imageHeight} pixels`)
          } else {
            setUploadedImage(reader.result)
          }
        }
        img.src = reader.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <StyledDiv>
      <div className='sub-container'>
        <div className='logo-container'>
          {uploadedImage && <img src={uploadedImage} width='100%' height='100%' alt={`${title}_logo`} />}
        </div>
        {title && <div className='title'>{title}</div>}
      </div>
      <div className='sub-container ml'>
        <StyledButton onClick={handleButtonClick}>
          <FileUploadOutlinedIcon />
          <span>Upload</span>
        </StyledButton>
        <div className='info'>{info}</div>
        {error && <div className='error'>{error}</div>}
        <input
          type='file'
          accept='image/png,image/gif,image/icon,image/jpeg,image/svg'
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleFileUpload}
        />
      </div>
    </StyledDiv>
  )
}
