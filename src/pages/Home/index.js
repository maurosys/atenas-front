import React from 'react'
import { Container } from './styles';
import './styles.css'

function Home() {
  return (
    <Container>
      
     <nav class="navbar navbar-expand-lg navbar-dark bg-info p=0" >
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Atena</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/Adm">Administração<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link " href="/MinhaConta" tabindex="-1"><span class="sr-only">(current)</span>Minha Conta</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<br></br><br></br>
    <p class="font-weight text-center">Quem somos nós?</p>
    <p className="font-weight text center">Atena. Deusa grega da sabedoria e inteligência. E mais do que isso: inspiração para o sistema que leva seu nome. </p>
    <p className="font-weight text center">O sistema Atena é perfeito para pequenas e médias empresas, e microempreendedores também. Permite que divulgue seus produtos e venda online de forma fácil e segura. Além disso, integrado com serviço de entregas, aumenta e potencializa suas vendas. </p>
    <p className="font-weight text center">Uma experiência moderna, simples e eficaz. Seus clientes podem fazer os pedidos pelo nosso chatbot no whatsapp / telegram, recebendo os produtos de um ou mais estabelecimentos em apenas uma solicitação; otimizando o tempo de compra e economizando com a entrega. </p>
    <p className="font-weight text center">Vender online nunca foi tão simples. Utilize o sistema Atena e amplifique suas vendas. Um simples clique para você, um grande avanço para seu negócio</p>
    <p className="font-weight text center">Atenas Um serviço além de cinco estrelas.</p>
    </Container> 
     
  );
  
}

export default Home;

