import React from 'react';
import {
  Background,
  ButtonAdd,
  ButtonWrap,
  CityInfWrap,
  cityInfWrap,
  CommentWrap,
  InitialInputWrap,
  initialInputWrap,
  ModalHeaderWrap,
  ModalWrapper,
  NameInputWrap,
  PassportInputWrap,
  SocialInfoWrap,
  SumPaymentsWrap,
  TimePay,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAddClient } from '../../../redux/ducks/clients';
import Button from '../../Button/button';

function ClientAddModal(props) {
  const dispatch = useDispatch();
  const showUnShowModal = useSelector(
    (state) => state.clients.showAddClientModal
  );
  console.log(showUnShowModal);
  const handleChangeState = () => {
    dispatch(closeModalAddClient());
  };

  return (
    <Background>
      <ModalWrapper>
        <ModalHeaderWrap>
          <div>Добавить клиента</div>
          <span className="material-icons" onClick={handleChangeState}>
            close
          </span>
        </ModalHeaderWrap>
        <InitialInputWrap>
          <input type="text" placeholder="Фамилия" />
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Отчество" />
        </InitialInputWrap>
        <SocialInfoWrap>
          <input className="countryCode" type="text" placeholder="Код" />
          <input className="number" type="text" placeholder="Номер" />
          <input className="mail" type="text" placeholder="Почта" />
        </SocialInfoWrap>
        <PassportInputWrap>
          <input
            className="passportNumber"
            type="text"
            placeholder="Номер паспорта"
          />
          <input
            className="passportSerial"
            type="text"
            placeholder="Серия паспорта"
          />
        </PassportInputWrap>
        <CityInfWrap>
          <input className="city" type="text" placeholder="Город" />
          <input className="adress" type="text" placeholder="Адрес" />
        </CityInfWrap>

        <ButtonWrap>
          <Button addClient>Добавить</Button>
        </ButtonWrap>
      </ModalWrapper>
    </Background>
  );
}

export default ClientAddModal;
