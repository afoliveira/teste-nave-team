import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 592px;
  max-height: 233px;
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 2rem;
  z-index: 1030;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;
`;

export const ModalInfo = styled.p`
  margin-bottom: 2.56rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ActionsButton = styled.button`
  width: 176px;
  height: 40px;
  font-weight: 600;
  font-size: 0.875rem;
  background-color: ${(props) => (props.colorBlack ? '#000' : '#fff')};
  border: ${(props) => (props.colorBlack ? 'none' : 'solid 1px #000')};
  color: ${(props) => (props.colorBlack ? '#fff' : '#000')};

  &:first-child {
    margin-right: 24px;
  }
`;

export const CloseButton = styled.div`
  align-self: flex-end;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
