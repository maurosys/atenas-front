import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiUser, FiLock } from 'react-icons/fi';

import { Container, Content } from './styles';

import logoAtena from '../../assets/atena-logo.png';

function Login() {
  const handleSubmit = useCallback((event) => {
    event.preventDefault()
  }, []);

  return (
    <Container>
      <header>
        <img src={logoAtena} alt="Atena" />
      </header>
      <Content>

        <h3>Faça seu login:</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">Usuário: <FiUser /></label>
          <input id="userName" type="text" placeholder="@seuUsuario" />

          <label htmlFor="password">Senha: <FiLock /></label>
          <input id="password" type="password" placeholder="***********" />

          <button type="submit">Entrar <FiArrowRight /></button>
        </form>
        <p>Não faz parte dessa tripulação? <Link to="/login"> Cadastre-se!</Link></p>
      </Content>
    </Container>
  );
}

export default Login;
