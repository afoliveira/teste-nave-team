import React, {createContext, useState} from 'react'
import {handleLogin, handleGetUser} from '../services/api'
import {useHistory} from 'react-router-dom'

export const UserContext = createContext()

export const UserStorage = ({children}) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  const userLogin = async (email, password) => {
    console.log(email, password);
    handleLogin({"email": email, "password": password})
    .then((res) => {
      if(res) {
        const {token} = res
        window.localStorage.setItem('token', token)
        handleGetUser(token).then((res) => {
          setData(res);
          setLogin(true);
        })
        history.push('/home');
      }
      return
    })
    .catch((err) => {
      console.log(err)
    })
  }

  async function userLogout() {
    setData(null)
    setLoading(false);
    setLogin(false)
    window.localStorage.removeItem('token');
    history.push('/')
  }

  return (
    <UserContext.Provider value={{userLogin, userLogout, data}}>
      {children}
    </UserContext.Provider>
  )
}

