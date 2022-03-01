import styled from 'styled-components';

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
`;

export const Naver = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-right: 32px;
`;

export const NaverName = styled.span`
  text-transform: capitalize;
  font-weight: 600;
  line-height: 1.125rem;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
`;

export const NaverJob = styled.span`
  text-transform: capitalize;
  line-height: 1.5rem;
  margin-bottom: 0.625rem;
`;

export const NaverPhoto = styled.img`
  width: 280px;
  height: 280px;
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`;

export const ActionsItem = styled.div`
  cursor: pointer;
`;
