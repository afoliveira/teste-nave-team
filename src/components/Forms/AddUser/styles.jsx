import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 592px;
  height: 500px;
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  margin: auto;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;