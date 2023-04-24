// TODO: need to update tinymce-react for bug-fix
import React, { useState, useRef } from 'react'
import { Box, DialogProps, Button } from '@mui/material'
import CustomSwitch from '@components/custom-switch'
import CustomizedInput from '@components/customized-input'
import CustomizedTextarea from '@components/customized-textarea'
import BaseModal from '@components/base-modal'
import { StyledModalBody, StyledModalContainer, StyledModalHead } from './styledComponents'
import { Editor } from '@tinymce/tinymce-react'

interface EmailTemplateModalProps extends DialogProps {
  onClose: () => void
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //console.log("onchange item : ",event?.target?.name)
}

const initialContent =
  '<><h1>New Device Added - MFA Portal&nbsp;</h1><p>A new device <span><strong>$DEVICE_NAME</strong></span> has been added to your account. Please review the device details.</p><p>&nbsp;</p><div >$USER_NAME</div><div >$DEVICE_NAME</div><div >$DEVICE_TYPE</div><p>&nbsp;</p><p>https://google.com/</p><p>Regards, </p><p>Admin</p></>'

export default function EmailTemplateModal({ open, onClose }: EmailTemplateModalProps) {
  const [content, setContent] = useState(initialContent)

  const handleEditorChange = (content) => {
    setContent(content)
  }
  const menubar = `file edit view insert format table tools help`

  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  return (
    <BaseModal open={open} onClose={onClose}>
      <StyledModalContainer>
        <StyledModalHead>
          <span>Email Template</span>
          <CustomSwitch className='switch' defaultChecked name='' onChange={handleChange} />
        </StyledModalHead>
        {/* <div className='divider'>
                <Divider />
               </div> */}
        <StyledModalBody>
          <div className='text'>
            <CustomizedInput label={'Subject'} type={'text'} sx={{ width: 400 }} />
            <CustomizedInput label={'Testing Address'} type={'text'} sx={{ width: 400 }} />
          </div>
          <div className='text1'>
            <CustomizedTextarea label={'CC Address'} type={'text'} sx={{ width: 400 }} />
            <CustomizedTextarea label={'BCC Address'} type={'text'} sx={{ width: 400 }} />
          </div>
          <div className='head4'>Variables Available</div>
          <div className='box1'>
            <Box className='box'>
              <div className='word'>$USER_NAME</div>
              <div className='word'>$DEVICE_NAME</div>
              <div className='word'>$DEVICE_TYPE</div>
            </Box>
          </div>
          <div className='quill'>
            <Editor
              apiKey='63xptkv6obfkd5jrlre7igbbpwpq8eh5di98fonbgjqtkusm'
              // onInit={(evt, editor) => editorRef.current = editor}
              value={content}
              onEditorChange={handleEditorChange}
              init={{
                height: 300,
                branding: false,
                menubar: menubar,
                plugins:
                  'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                toolbar:
                  'undo redo | formatselect | bold italic strikethrough underline | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | insertimage link media | anchor | code | ltr rtl',
                menu: {
                  file: {
                    title: 'File',
                    items: 'newdocument'
                  },
                  edit: {
                    title: 'Edit',
                    items: 'undo redo | cut copy paste pastetext | selectall'
                  },
                  view: {
                    title: 'View',
                    items: 'visualaid'
                  },
                  insert: {
                    title: 'Insert',
                    items: 'link media | charmap hr | numlist bullist | table'
                  },
                  format: {
                    title: 'Format',
                    items:
                      'bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | subscript superscript | removeformat'
                  },
                  table: {
                    title: 'Table',
                    items: 'inserttable | cell row column | tableprops deletetable'
                  },
                  tools: {
                    title: 'Tools',
                    items: 'spellchecker code'
                  },
                  help: {
                    title: 'Help',
                    items: 'help'
                  }
                }
              }}
            />
          </div>
          <div className='item'>
            <Button variant='contained' type='submit'>
              Save
            </Button>
            <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={onClose}>
              Close
            </Button>
          </div>
        </StyledModalBody>
      </StyledModalContainer>
    </BaseModal>
  )
}
