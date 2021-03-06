import React, { useState } from 'react';
import RegistrationModalTitle from './RegistrationModalTitle';
import RegistrationModalForm from './RegistrationModalForm';
import Wrapper from './Wrapper';
import Button from '../Button/button';
import Demologin from './Demologin';
import RegistrationModal from './RegistrationModal';
import RegistrationHref from './RegistrationHref';
import RegistrationError from './RegistrationError';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart } from '../../redux/ducks/registration';
import ReactLoading from 'react-loading';
import { SpinnerWrap } from './styled';

function Registration() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.registration.error);
  const autorizing = useSelector((state) => state.registration.authorizing);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    dispatch(loginStart(login, password));
  };

  return (
    <div>
      <RegistrationModal>
        <RegistrationModalTitle>Авторизация</RegistrationModalTitle>
        {error && (
          <RegistrationError error>
            Данные введены неверно. Попробуйте еще раз
          </RegistrationError>
        )}
        <RegistrationModalForm
          login={login}
          password={password}
          setLogin={setLogin}
          setPassword={setPassword}
        />
        <Wrapper>
          <Button autorization click={handleClick} disabled={autorizing}>
            {error === true ? (
              <SpinnerWrap>
                <ReactLoading
                  type={'spin'}
                  color={'#fff'}
                  height={'20%'}
                  width={'20%'}
                />
              </SpinnerWrap>
            ) : (
              'Авторизация'
            )}
          </Button>
        </Wrapper>
        <Demologin>Данные для демо-входа: admin:12345</Demologin>
        <Wrapper registrationhref>
          <RegistrationHref registrationhref>Регистрация</RegistrationHref>
          <RegistrationHref registrationhref>Забыли пароль?</RegistrationHref>
        </Wrapper>
      </RegistrationModal>
    </div>
  );
}

export default Registration;
