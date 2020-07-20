import React from 'react'
import Menu from '../../components/menu';

function Adm() {
  return (
<div>
   <Menu /> 
   <div class="descricao">Administrações</div>
   <br></br> <br></br> <br></br> <br></br>
<table class="table">
    <tr>
      <th scope="col" >Job</th>
      <th scope="col">Assuntos</th>
      <th scope="col">Dia</th>
      <th scope="col">Semana</th>
      <th scope="col">Mês</th>
    </tr>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Quantidade total dos pedidos</td>
      <td>18</td>
      <td>Quarta-feira</td>
      <td>Junho</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Quantidade de pedidos cancelados</td>
      <td>20</td>
      <td>Segunda-feira</td>
      <td>Junho</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Valor cancelado</td>
      <td>25</td>
      <td>Sabádo</td>
      <td>Junho</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Quantidade de consultas</td>
      <td>26</td>
      <td>Quinta-feira</td>
      <td>Junho</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Quantidade de rotas de entrega</td>
      <td>28</td>
      <td>Sexta-feira</td>
      <td>Junho</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Quantidade de retorno de entrega</td>
      <td>30</td>
      <td>Domingo</td>
      <td>Junho</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Valor total:</td>
    </tr>
  </tbody>
</table>
      <div className="text-center">< img src='https://manual.futurasistemas.com.br/wp-content/uploads/2016/11/22.jpg'/></div>
      <div className="text-center">< img src='https://manual.futurasistemas.com.br/wp-content/uploads/2016/11/20.jpg'/></div>
       
</div>


  );
}
export default Adm;

