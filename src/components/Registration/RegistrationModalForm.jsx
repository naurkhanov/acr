import React, { useState } from 'react';
import {
  InputWrapper,
  RegistrationFormLogin,
  RegistrationFormPassword,
} from './styled';

function RegistrationModalForm(props) {
  const [passwordShow, setPasswordShow] = useState(false);

  const handleChangePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <InputWrapper>
      <RegistrationFormLogin
        type="text"
        placeholder="Введите логин"
        value={props.login}
        onChange={(e) => props.setLogin(e.target.value)}
      />
      <div className="inputWrap">
        <span className="material-icons" onClick={handleChangePasswordShow}>
          {passwordShow !== true ? 'visibility_off' : 'visibility'}
        </span>
        <RegistrationFormPassword
          type={passwordShow === true ? 'text' : 'password'}
          placeholder="Введите пароль"
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
        />
      </div>
    </InputWrapper>
  );
}

export default RegistrationModalForm;
