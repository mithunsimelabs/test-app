import React, { useState } from 'react'
import { DialogProps, Button } from '@mui/material'
import BaseModal from '@components/base-modal'
import { Editor } from '@tinymce/tinymce-react'
import { StyledModalContainer, StyledModalHead, StyledModalBody } from './styledComponents'
import CustomSelect from '@components/custom-select'
import CustomizedInput from '@components/customized-input'

interface UnpairModalProps extends DialogProps {
  onClose: () => void
  modalData: any
}

export default function FAQModal(props: UnpairModalProps) {
  const [content, setContent] = useState('')

  const handleEditorChange = (content) => {
    setContent(content)
  }
  const menubar = `file edit view insert format table tools help`
  return (
    <BaseModal {...props}>
      <StyledModalContainer>
        <StyledModalHead>{props.modalData.id === 0 ? 'Add FAQ' : 'Update FAQ'}</StyledModalHead>
        <StyledModalBody>
          <div className='item dual-item'>
            <div className='input'>
              <CustomSelect label='Category' options={[]} />
            </div>
            <div className='input'>
              <CustomSelect label='FAQ Visibility' options={[]} />
            </div>
          </div>
          <div className='item'>
            <CustomizedInput label='Question' type='text' value={props?.modalData?.question} />
          </div>

          <div className='item'>
            {/* <CustomizedInput label='Answer' type='text' value={props?.modalData?.answer} /> */}
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
            <Button variant='contained'>Save</Button>
            <Button variant='outlined' sx={{ marginLeft: 1 }} onClick={props.onClose}>
              Cancel
            </Button>
          </div>
        </StyledModalBody>
      </StyledModalContainer>
    </BaseModal>
  )
}
