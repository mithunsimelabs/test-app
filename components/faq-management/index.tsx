import React, { useState } from 'react'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { StyledCard, StyledContainer } from './styledComponents'
import FAQModal from '@components/faq-modal'
import ConfirmationModal from '@components/confirmation-modal'

const faqTableContent = [
  {
    id: 1,
    question: 'How does MFA work?',
    answer:
      'MFA works by providing additional identity checks and verification to ensure you are signing in, as you say you are. This additional validation combines distinct and different methods to authenticate, requiring you to successfully complete each authentication challenge.',
    category: 'Specific General',
    visibility: 'Public'
  }
]

export default function FAQManagement() {
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const [modalData, setModalData] = useState({})

  const closeModal = () => {
    setModalOpen(false)
  }

  const openModal = () => {
    setModalOpen(true)
  }

  const handleOpenModal = (item) => {
    setModalData(item)
    setModalOpen(true)
  }

  const cancelDeleteHandler = () => {
    setDeleteConfirm(false)
  }

  const deleteHandler = () => {
    // delete action here
  }

  return (
    <StyledContainer>
      <Divider flexItem />
      <StyledCard>
        <div className='inner-card'>
          <div className='add-button-container'>
            <Button
              variant='contained'
              onClick={() => {
                handleOpenModal({ id: 0 })
              }}
            >
              Add FAQ
            </Button>
          </div>
          <div className='first-container'>
            <div className='order-table'>
              <div className='header'>
                <div>Reorder</div>
                <div>Question</div>
                <div>Answer</div>
                <div>Visibility</div>
                <div>Category</div>
                <div>Actions</div>
              </div>
              <div className='body'>
                {faqTableContent.map((item, index) => {
                  return (
                    <div className='row' key={item.id}>
                      <div>
                        {index >= 0 && index < 2 ? <ArrowCircleDownIcon /> : null}
                        {index > 0 && index <= 2 ? <ArrowCircleUpIcon /> : null}
                      </div>
                      <div>{item.question}</div>
                      <div>{item.answer}</div>
                      <div>{item.visibility}</div>
                      <div>{item.category}</div>
                      <div className='action'>
                        <EditIcon onClick={() => handleOpenModal(item)} />
                        <DeleteIcon onClick={() => setDeleteConfirm(true)} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </StyledCard>
      <FAQModal open={modalOpen} modalData={modalData} onClose={closeModal} />
      {deleteConfirm && (
        <ConfirmationModal
          heading='Delete FAQ'
          message='Are you sure, you want delete this FAQ?'
          handler={deleteHandler}
          cancel={cancelDeleteHandler}
        />
      )}
    </StyledContainer>
  )
}
