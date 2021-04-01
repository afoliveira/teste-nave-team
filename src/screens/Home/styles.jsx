import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 72px 32px 142px 32px;
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 40px;
    line-height: 48px;
    color: #212121;
  }
`;

export const ContainerContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 32px;
  
  .name {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.125rem;
    margin-top: 16px;
    margin-bottom: 4px;
  }

  .job {
    font-weight: 400;
    text-transform: capitalize;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 10px
  }

  .photo {
    cursor: pointer;
  }

`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`;