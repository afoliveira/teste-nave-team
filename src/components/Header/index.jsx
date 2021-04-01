import React, {useContext} from 'react'
import {Container} from './styles'
import logoHeader from '../../assets/logo-header.svg'
import {UserContext} from '../../context/UserContext'

const Header = () => {
  const {userLogout} = useContext(UserContext)

  return (
    <Container>
      <img src={logoHeader} alt='Logo Header' />
      <button onClick={userLogout}>Sair</button>
    </Container>
  )
}

export default Header;