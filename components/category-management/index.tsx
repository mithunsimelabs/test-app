import React, { useState } from 'react'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { StyledCard, StyledContainer } from './styledComponents'
import ConfirmationModal from '@components/confirmation-modal'

import CategoryModal from '@components/category-modal'

const categoryTableContent = [
  {
    id: 1,
    name: 'General'
  }
]

export default function CategoryManagement() {
  const [modalData, setModalData] = useState({ open: false, data: { id: 0 } })
  const [deleteConfirm, setDeleteConfirm] = useState(false)

  const closeModal = () => {
    setModalData({ data: { id: 0 }, open: false })
  }

  const handleOpenModal = (item) => {
    setModalData({ data: item, open: true })
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
            <Button variant='contained' onClick={() => handleOpenModal({ id: 0 })}>
              Add Category
            </Button>
          </div>
          <div className='first-container'>
            <div className='order-table'>
              <div className='header'>
                <div>Reorder</div>
                <div>Category</div>

                <div>Actions</div>
              </div>
              <div className='body'>
                {categoryTableContent.map((item, index) => {
                  return (
                    <div className='row' key={item.id}>
                      <div>
                        {index >= 0 && index < 2 ? <ArrowCircleDownIcon /> : null}
                        {index > 0 && index <= 2 ? <ArrowCircleUpIcon /> : null}
                      </div>
                      <div>{item.name}</div>

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
      <CategoryModal open={modalData?.open} onClose={closeModal} modalData={modalData} />
      {deleteConfirm && (
        <ConfirmationModal
          heading='Delete Category'
          message='Are you sure, you want to delete Category'
          handler={deleteHandler}
          cancel={cancelDeleteHandler}
        />
      )}
    </StyledContainer>
  )
}
