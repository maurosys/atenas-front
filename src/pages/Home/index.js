import React from 'react';
import Menu from '../../components/menu';
import { Container } from './styles';
import './styles.css';
import logo from '../../assets/atena-logo.png';

function Home() {
  return (
    <Container>

     <Menu /> 
     
    <div class="imgLogo">
      <img src={logo} alt=""/>
    </div>
    <div class="descricao">
      <h5>Quem somos nós?</h5>

      <p>Atena. Deusa grega da sabedoria e inteligência. E mais do que isso: inspiração para o sistema que leva seu nome. </p>
      
      <p>O sistema Atena é perfeito para pequenas e médias empresas, e microempreendedores também. Permite que divulgue seus produtos e venda online de forma fácil e segura. Além disso, integrado com serviço de entregas, aumenta e potencializa suas vendas. </p>
      
      <p>Uma experiência moderna, simples e eficaz. Seus clientes podem fazer os pedidos pelo nosso chatbot no whatsapp / telegram, recebendo os produtos de um ou mais estabelecimentos em apenas uma solicitação; otimizando o tempo de compra e economizando com a entrega. </p>
      
      <p>Vender online nunca foi tão simples. Utilize o sistema Atena e amplifique suas vendas. Um simples clique para você, um grande avanço para seu negócio</p>
      
      <p>Atena<br/> Um serviço além de cinco estrelas.</p>
    </div>
    </Container> 
     
  );
  
}

export default Home;

