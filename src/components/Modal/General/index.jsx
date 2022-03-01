import React from 'react';
import {
  Container,
  ContainerModal,
  ModalTitle,
  ModalInfo,
  Actions,
  ActionsButton,
  CloseButton,
} from './styles';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';

const GeneralModal = ({ title, phrase, isDelete, onDelete, onclose }) => {
  return (
    <Container>
      <ContainerModal>
        <CloseButton onClick={() => onclose()}>
          <Close />
        </CloseButton>
        <ModalTitle className="title">{title}</ModalTitle>
        <ModalInfo className="phrase">{phrase}</ModalInfo>

        {isDelete && (
          <Actions>
            <ActionsButton type="button" onClick={() => onclose()}>
              Cancelar
            </ActionsButton>
            <ActionsButton type="button" onClick={() => onDelete()} colorBlack>
              Excluir
            </ActionsButton>
          </Actions>
        )}
      </ContainerModal>
    </Container>
  );
};

export default GeneralModal;
