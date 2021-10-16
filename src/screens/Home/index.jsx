import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { handleGetUser, handleDeleteNaver } from '../../services/api';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ModalProfile from '../../components/Modal/Profile';
import GeneralModal from '../../components/Modal/General';
import {
  Container,
  ContainerHeader,
  Content,
  Actions,
  ContainerContent,
} from './styles';

import trash from '../../assets/icons/trash.svg';
import pencil from '../../assets/icons/pencil.svg';

const Home = () => {
  const [show, setShow] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [isDeletedVisible, setIsDeletedVisible] = useState(false);
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const history = useHistory();
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    handleGetUser(token).then((res) => {
      if (res) {
        setData(res);
      }
    });
  }, [token]);

  const handleClick = (naver) => {
    setItem(naver);
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleCloseDeleted = () => {
    setIsDeletedVisible(false);
  };

  const handleDelete = async (id) => {
    handleDeleteNaver(id)
      .then((res) => {
        console.log(res);
        if (res.statusCode === 200) {
          setOpenDelete(false);
          setIsDeletedVisible(true);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      {show ? (
        <ModalProfile data={item} show={show} handleClose={hideModal} />
      ) : (
        ''
      )}
      <Container>
        <ContainerHeader>
          <h2>Navers</h2>
          <Button onClick={() => history.push('/add-user')}>Adicionar</Button>
        </ContainerHeader>
        <ContainerContent style={{ display: 'flex', alignItems: 'center' }}>
          {data &&
            data.map((naver) => (
              <Content key={naver.id} onClick={() => setItem(naver)}>
                <div
                  className="photo"
                  onClick={() => {
                    handleClick(naver.id);
                    showModal();
                  }}
                  aria-hidden="true"
                >
                  <img
                    width="280px"
                    height="280px"
                    src={naver.url}
                    alt={naver.name}
                  />
                </div>
                <span className="name">{naver.name}</span>
                <span className="job">{naver.job_role}</span>
                <Actions>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleOpenDelete()}
                    role="button"
                    tabIndex={0}
                    aria-hidden="true"
                  >
                    <img src={trash} alt="trash" />
                  </div>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      history.push({
                        pathname: '/add-user',
                        state: { detail: naver },
                      })
                    }
                    role="button"
                    tabIndex={0}
                    aria-hidden="true"
                  >
                    <img src={pencil} alt="pencil" />
                  </div>
                </Actions>
              </Content>
            ))}
        </ContainerContent>
      </Container>

      {openDelete ? (
        <GeneralModal
          title="Excluir Naver"
          phrase="Tem certeza que deseja excluir este Naver?"
          isDelete
          onclose={handleCloseDelete}
          onDelete={() => handleDelete(item.id)}
        />
      ) : (
        <></>
      )}

      {isDeletedVisible ? (
        <GeneralModal
          title="Naver Excluido"
          phrase="Naver excluído com sucesso"
          onclose={handleCloseDeleted}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
