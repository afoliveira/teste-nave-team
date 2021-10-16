import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { handleLogin, handleGetUser } from '../services/api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const history = useHistory();

  const userLogin = async (email, password) => {
    console.log(email, password);
    handleLogin({ email, password })
      .then((res) => {
        if (res) {
          const { token } = res;
          window.localStorage.setItem('token', token);
          handleGetUser(token).then((res) => {
            setData(res);
            setLogin(true);
          });
          history.push('/home');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function userLogout() {
    setData(null);
    setLogin(false);
    window.localStorage.removeItem('token');
    history.push('/');
  }

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, login }}>
      {children}
    </UserContext.Provider>
  );
};
