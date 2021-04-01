import React, {useEffect, useState} from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';
import ModalProfile from '../../components/Modal/Profile';
import GeneralModal from '../../components/Modal/General';

import trash from '../../assets/icons/trash.svg';
import pencil from '../../assets/icons/pencil.svg';

import {useHistory} from 'react-router-dom';


import {handleGetUser, handleDeleteNaver} from '../../services/requests'

import { Container, ContainerHeader, Content, Actions, ContainerContent } from './styles'

const Home = () => {
  const [show, setShow] = useState(false);
  const [openDelete, setOpenDelete] = useState(false)
  const [isDeletedVisible, setIsDeletedVisible] = useState(false);
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const history = useHistory();
  const token = window.localStorage.getItem('token')


  useEffect(() => {
    handleGetUser(token).then((res) => {
      if(res) {
        setData(res);
        return
      }
    });
  }, [token])

  const handleClick = (naver) => {
    setItem(naver);
  };

  const showModal = () => {
    setShow(true);
  }

  const hideModal = () => {
    setShow(false);
  }
  
  const handleOpenDelete = () => {
    setOpenDelete(true)
  }
  
  const handleCloseDelete = () => {
    setOpenDelete(false)
  }

  const handleCloseDeleted = () => {
    setIsDeletedVisible(false)
  }
  
  const handleDelete = async (id) => {
    handleDeleteNaver(id).then((res) => {
      console.log(res);
      if(res.statusCode === 200) {
        setOpenDelete(false);
        setIsDeletedVisible(true);
        setTimeout(() => {
          window.location.reload();
        }, 3000)
      }
    })
    .catch((err) => console.log(err))
  }

  
  return (
    <>
      <Header />
      {show ? (
        <ModalProfile data={item} show={show} handleClose={hideModal} />
      ) : ''}
      <Container>
        <ContainerHeader>
          <h2>Navers</h2>
          <Button onClick={() => history.push('/add-user')}>Adicionar</Button>
        </ContainerHeader>
        <ContainerContent style={{display: 'flex', alignItems: 'center'}}>
          {data && data.map((item, index) => (
              <Content key={index} onClick={() => setItem(item)}>
                <div className='photo' onClick={() => {
                  handleClick(item.id);
                  showModal();
                }}>
                  <img width='280px' height='280px' src={item.url} alt={item.name} />
                </div>
                <span className='name'>{item.name}</span>
                <span className='job'>{item.job_role}</span>
                <Actions>
                  <div style={{cursor: 'pointer'}} onClick={() => handleOpenDelete()}>
                    <img src={trash} alt='trash'></img>
                  </div>
                  <div style={{cursor: 'pointer'}} onClick={() => history.push({
                    pathname: '/add-user',
                    state: {detail: item}
                  })}>
                    <img src={pencil} alt='pencil'></img>
                  </div>
                </Actions>
              </Content>
          ))}
        </ContainerContent>
      </Container>
      
      {openDelete ? (
        <GeneralModal 
          title='Excluir Naver' 
          phrase='Tem certeza que deseja excluir este Naver?'
          isDelete
          onclose={handleCloseDelete}
          onDelete={() => handleDelete(item.id)}
        />
      ) : isDeletedVisible ? (
        <GeneralModal 
         title='Naver Excluido' 
         phrase='Naver excluído com sucesso'
         onclose={handleCloseDeleted}
       />
     ) : <></>}

    </>
  )
}

export default Home;