import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import Button from '../../Button';
import Input from '../../Inputs';
import Header from '../../Header';
import GeneralModal from '../../Modal/General';
import { api } from '../../../services/api';
import { Form, Container, ContainerHeader } from './styles';
import arrow from '../../../assets/icons/arrow-left.svg';

const AddUser = (props) => {
  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState('');
  const [idade, setIdade] = useState('');
  const [tempoEmpresa, setTempoEmpresa] = useState('');
  const [projetos, setProjetos] = useState('');
  const [urlNaver, setUrlNaver] = useState('');
  const [created, setCreated] = useState(false);
  const history = useHistory();

  const getData = () => {
    setNome(props?.location?.state?.detail?.name);
    setCargo(props?.location?.state?.detail?.job_role);
    setIdade(
      props?.location?.state?.detail?.birthdate
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('/')
    );
    setTempoEmpresa(
      props?.location?.state?.detail?.admission_date
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('/')
    );
    setProjetos(props?.location?.state?.detail?.project);
    setUrlNaver(props?.location?.state?.detail?.url);
  };

  useEffect(() => {
    if (props?.location?.state?.detail?.user_id) {
      getData();
    }
  }, []);

  const formatDate = (value) => {
    value = value.replace(/\D/g, '').slice(0, 10);
    if (value.length >= 5) {
      return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
    }
    if (value.length >= 3) {
      return `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    return value;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      job_role: cargo,
      admission_date: formatDate(tempoEmpresa),
      birthdate: formatDate(idade),
      project: projetos,
      name: nome,
      url: urlNaver,
    };

    if (props?.location?.state?.detail?.user_id) {
      const token = window.localStorage.getItem('token');
      api
        .put(
          `/navers/${props?.location?.state?.detail?.user_id}`,
          { ...body },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setCreated(true);
            setTimeout(() => {
              history.push('/home');
              window.location.reload();
            }, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            err.response && err.response.data
              ? err.response.data.message
              : { message: 'N??o foi possivel editar o seu usu??rio' }
          );
        });
    } else {
      const token = window.localStorage.getItem('token');
      api
        .post(
          '/navers',
          { ...body },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            setCreated(true);
            setTimeout(() => {
              history.push('/home');
              window.location.reload();
            }, 3000);
          }
        })
        .catch((err) => {
          toast.error(
            err.response && err.response.data
              ? err.response.data.message
              : { message: 'N??o foi possivel criar o seu usu??rio' }
          );
        });
    }
  };

  const handleCloseDeleted = () => {
    setCreated(false);
  };

  return (
    <>
      <Header />
      <Container>
        <ContainerHeader>
          <Link to="/home">
            <img src={arrow} alt="Arrow Left" />
          </Link>
          <h3>
            {!props?.location?.state?.detail?.user_id
              ? 'Adicionar Naver'
              : 'Editar Naver'}
          </h3>
        </ContainerHeader>
        <Form>
          <Input
            required
            label="Nome"
            name="nome"
            type="text"
            placeholder="Nome"
            onChange={({ target }) => setNome(target.value)}
            value={nome}
            error={!nome ? 'Digite um nome' : ''}
          />
          <Input
            required
            label="Cargo"
            name="cargo"
            type="text"
            placeholder="Cargo"
            onChange={({ target }) => setCargo(target.value)}
            value={cargo}
            error={!cargo ? 'Digite o seu cargo' : ''}
          />
          <Input
            required
            label="Data de Nascimento"
            name="idade"
            type="text"
            placeholder="Data de Nascimento"
            onChange={({ target }) => setIdade(target.value)}
            value={idade}
            error={!idade ? 'Digite seu data de nascimento' : ''}
          />
          <Input
            required
            label="Dia de admiss??o"
            name="tempoEmpresa"
            type="text"
            placeholder="Dia de admiss??o"
            onChange={({ target }) => setTempoEmpresa(target.value)}
            value={tempoEmpresa}
            error={!tempoEmpresa ? 'Digite sua data de admiss??o' : ''}
          />
          <Input
            required
            label="Projetos"
            name="projetos"
            type="text"
            placeholder="Projetos"
            onChange={({ target }) => setProjetos(target.value)}
            value={projetos}
            error={!projetos ? 'Digite pelo menos um projeto' : ''}
          />
          <Input
            required
            label="URL da foto do Naver"
            name="url"
            type="text"
            placeholder="URL da foto do Naver"
            onChange={({ target }) => setUrlNaver(target.value)}
            value={urlNaver}
            error={!urlNaver ? 'Cole a url da sua foto' : ''}
          />
        </Form>
        <Button onClick={handleSubmit} customStyle={{ aligSelf: 'flex-end' }}>
          Salvar
        </Button>
      </Container>

      {created ? (
        <GeneralModal
          title={
            !props?.location?.state?.detail?.user_id
              ? 'Naver criado'
              : 'Naver atualizado'
          }
          phrase={
            !props?.location?.state?.detail?.user_id
              ? 'Naver criado com sucesso'
              : 'Naver atualizado com sucesso'
          }
          onclose={handleCloseDeleted}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default AddUser;
