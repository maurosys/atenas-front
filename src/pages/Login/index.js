import React, { useCallback } from 'react';
import { FiArrowRight, FiUser, FiLock, FiMail, FiMessageCircle } from 'react-icons/fi';
import { FaStreetView } from 'react-icons/fa';
import { GrDocument } from 'react-icons/gr';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu';

import { Container, formulario } from './styles';

function Login() {
  const handleSubmit = useCallback((event) => {
    event.preventDefault()
  }, []);

  return (
    <Container>
      <Menu />
      <formulario>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h3>Autentique-se para embarcar!</h3>
        <p>&nbsp;</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">Usuário: <FiUser /></label>
          <input id="usuario" type="text" placeholder="@seuUsuario" /><br />

          <label htmlFor="password">Senha: <FiLock /></label>
          <input id="password" type="password" placeholder="***********" /> <br />

          <button type="submit">Embarcar<FiArrowRight /></button>
        </form>
        <p>Ainda não parte dessa tripulação? <Link to="/Registro"> cadastre-se!</Link></p>
      </formulario>
    </Container>
  );
}

export default Login;
