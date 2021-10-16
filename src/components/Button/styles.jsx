import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Btn = styled.button`
  border: ${(props) => props.btnBorder || 'none'};
  background-color: #212121;
  color: #fff;
  width: ${(props) => props.btnWidth || '176px'};
  height: 40px;
  padding: 8px ${(props) => props.btnPadding || '16.7px'};
`;
