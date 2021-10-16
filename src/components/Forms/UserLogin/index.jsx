import React, { useState, useContext } from 'react';
import logo from '../../../assets/logo.svg';
import Button from '../../Button';
import Input from '../../Inputs';
import { Container } from './style';
import { UserContext } from '../../../context/UserContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userLogin } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    userLogin(email, password);
  };

  return (
    <Container>
      <img
        style={{ margin: 'auto', display: 'block', marginBottom: '32px' }}
        src={logo}
        alt="logo"
      />
      <form onSubmit={handleSubmit}>
        <Input
          width="384px"
          label="E-mail"
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
        <Input
          width="384px"
          label="Senha"
          name="password"
          type="password"
          placeholder="Senha"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
        <Button padding="120.7px" width="384px">
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
