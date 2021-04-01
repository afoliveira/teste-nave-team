import styled from "styled-components";

export const Label = styled.label`
  display: block;
    margin-bottom: 4px;
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.125rem;
`;

export const TextInput = styled.input`
  width: ${props => props.maxWidth || '280px'};
  height: 40px;
  padding: 5px;
  margin-bottom: 32px;
`;