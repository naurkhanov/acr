import React from 'react';
import styled from 'styled-components';

const RegistrationFormLogin = styled.input`
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: 300;
  padding: 20px 20px 20px 20px;
  outline: #9d65c9;
  border-radius: 5px;
  border: none;
  margin-top: 11px;
  &:focus {
    border: 1px solid #9d65c9;
  }

  &:hover {
    border: 1px solid #9d65c9;
  }
`;

const RegistrationFormPassword = styled(RegistrationFormLogin)`
  margin-top: 20px;
  font-weight: 300;
`;

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
