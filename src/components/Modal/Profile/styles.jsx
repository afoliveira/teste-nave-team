import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
`;

export const ContainerModal = styled.div`
  display: flex;
  position: fixed;
  margin: auto;
  z-index: 1001;
  background-color: #fff;
  width: 1006px;
  height: 503px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const InfoContent = styled.div`
  align-content: space-between;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 32px;

  .container-content {
    margin-bottom: 24px;

    h2 {
      font-size: 1.5rem;
      line-height: 36px;
      font-weight: 600;
    }

    h2,
    h3 {
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1rem;
      line-height: 24px;
      font-weight: 600;
    }

    span {
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding: 30.2px;
`;

export const CloseButton = styled.div`
  align-self: flex-end;
  width: 24px;
  height: 24px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`;
