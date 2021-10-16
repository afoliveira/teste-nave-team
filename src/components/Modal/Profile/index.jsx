import React from 'react';

import { useHistory } from 'react-router-dom';
import trash from '../../../assets/icons/trash.svg';
import pencil from '../../../assets/icons/pencil.svg';
import close from '../../../assets/icons/close.svg';

import { handleDeleteNaver } from '../../../services/api';

import {
  Container,
  ContainerModal,
  Content,
  Actions,
  InfoContent,
  CloseButton,
} from './styles';

const ModalProfile = ({ data, handleClose, show }) => {
  const history = useHistory();

  const getAge = (age) => {
    const currentDate = new Date();
    const pastDate = new Date(age);
    let diff = currentDate.getFullYear() - pastDate.getFullYear();
    if (diff > 0) {
      return `${diff} anos`;
    }
    diff = (currentDate.getFullYear() - pastDate.getFullYear()) * 12;
    return `${diff} meses`;
  };

  const handleDelete = async (id) => {
    handleDeleteNaver(id).then(() => {
      handleClose();
      window.location.reload();
    });
  };

  return (
    <Container show={show}>
      <ContainerModal>
        <div>
          <img width="503px" height="503px" src={data.url} alt={data.name} />
        </div>
        <Content>
          <CloseButton onClick={handleClose}>
            <img src={close} alt="close" />
          </CloseButton>
          <InfoContent>
            <div className="container-content">
              <h2>{data.name}</h2>
              <span>{data.job_role}</span>
            </div>
            <div className="container-content">
              <h3>Idade</h3>
              <span>{getAge(data.birthdate)}</span>
            </div>
            <div className="container-content">
              <h3>Tempo de empresa</h3>
              <span>{getAge(data.admission_date)}</span>
            </div>
            <div className="container-content">
              <h3>Projetos que participou</h3>
              <span>{data.project}</span>
            </div>
          </InfoContent>
          <Actions>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => handleDelete(data.id)}
              aria-hidden="true"
            >
              <img src={trash} alt="trash" />
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() =>
                history.push({
                  pathname: '/add-user',
                  state: { detail: data },
                })
              }
              aria-hidden="true"
            >
              <img src={pencil} alt="pencil" />
            </div>
          </Actions>
        </Content>
      </ContainerModal>
    </Container>
  );
};

export default ModalProfile;
