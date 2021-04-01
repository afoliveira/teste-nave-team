import React from 'react'
import close from '../../../assets/icons/close.svg'
import { Container, ContainerModal, CloseButton } from './styles'

const GeneralModal = ({title, phrase, isDelete, onDelete, onclose}) => {
  return (
    <Container>
      <ContainerModal>
        <CloseButton onClick={() => onclose()}>
          <img src={close} alt='close button'></img>
        </CloseButton>
        <h2 className='title'>{title}</h2>
        <p className='phrase'>{phrase}</p>

        {isDelete ? (
          <div className='actions'>
            <button onClick={() => onclose()} className='btn-actions white'>Cancelar</button>
            <button onClick={() => onDelete() } className='btn-actions black'>Excluir</button>
          </div>
        ) : <></>}
      </ContainerModal>
    </Container>
  )
}

export default GeneralModal;