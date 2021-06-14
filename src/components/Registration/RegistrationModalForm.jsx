import React from 'react';
import { RegistrationFormLogin, RegistrationFormPassword } from './styled';

function RegistrationModalForm(props) {
  return (
    <div>
      <RegistrationFormLogin
        type="text"
        placeholder="Введите логин"
        value={props.login}
        onChange={(e) => props.setLogin(e.target.value)}
      />
      <RegistrationFormPassword
        type="password"
        placeholder="Введите пароль"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
    </div>
  );
}

export default RegistrationModalForm;
