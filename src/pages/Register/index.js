import React, { useCallback } from 'react';
import { FiArrowRight, FiUser, FiLock, FiMail, FiMessageCircle } from 'react-icons/fi';
import { FaStreetView } from 'react-icons/fa';
import { GrDocument } from 'react-icons/gr';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logoAtena from '../../assets/atena-logo.png';

function Register() {
  const handleSubmit = useCallback((event) => {
    event.preventDefault()
  }, []);

  return (
    <Container>
      <header>
        <img src={logoAtena} alt="Atena" />
      </header>
      <Content>

        <h3>Faça seu cadastro e entre para a missão!</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">Usuário: <FiUser /></label>
          <input id="usuario" type="text" placeholder="@seuUsuario" />

          <label htmlFor="password">Senha: <FiLock /></label>
          <input id="password" type="password" placeholder="***********" />

          <label htmlFor="email">Email: <FiMail /></label>
          <input id="email" type="email" placeholder="seu@email.com" />

          <label htmlFor="whatsapp">WhatsApp: <FiMessageCircle /></label>
          <input id="whatsapp" type="tel" placeholder="(99) 99999-9999" />

          <label htmlFor="rua">Rua: <FaStreetView /></label>
          <input id="rua" type="text" placeholder="Nome da sua rua" />

          <label htmlFor="numero">Número: <AiOutlineFieldNumber /></label>
          <input id="numero" type="number" placeholder="Nº" />

          <label htmlFor="cpf">CPF: <GrDocument /></label>
          <input id="cpf" type="text" placeholder="Somente números: 99999999999" />

          <button type="submit">Criar conta <FiArrowRight /></button>
        </form>
        <p>Já faz parte dessa tripulação? <Link to="/login"> Volte e faça login!</Link></p>
      </Content>
    </Container>
  );
}

export default Register;
