import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.125rem;
`;

export const TextInput = styled.input`
  width: ${(props) => props.maxWidth || '280px'};
  height: 40px;
  padding: 5px;
`;

export const TextError = styled.span`
  color: #ff0000;
  margin-top: 5px;
  font-weight: 600;
  font-size: 0.875rem;
`;
