import styled from 'styled-components'



export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.7);
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
  padding: 32px;
  z-index: 1030;

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 36px;
    margin-bottom: 24px;
  }

  .phrase {
    margin-bottom: 41px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .btn-actions {
    width: 176px;
    height: 40px;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .btn-actions:first-child {
    margin-right: 24px;
  }

  .withe {
    background-color: #fff;
    border: solid 1px #000;
    color: #000;
  }

  .black {
    background-color: #000;
    color: #fff;
    border: none;
  }

`;

export const CloseButton = styled.div`
  align-self: flex-end;
  width: 24px;
  height: 24px;
`;