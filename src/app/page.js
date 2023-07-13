'use client';
import { login } from './utils';

// Instruções:
// * Você tem um formulário de login incompleto
// * Não é permitido adicionar novos elementos HTML
//
// Tarefas:
// Desabilite o botão de Login caso o e-mail esteja em branco ou a senha for menor que 6 dígitos.
// Desabilite o botão de Login equanto você está executando o login.
// O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.


export default function Home() {

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Formulário de Login 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className="errorMessage"></div>

        <div className="row">
          <label>Email</label>
          <input type="email" autoComplete='off'/>
        </div>
        <div className="row">
          <label>Password</label>
          <input type="password"/>
        </div>

        <div className="button">
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}
