import React, { useState } from 'react';
import MainWrap from './MainWrap';
import MainSection from './MainSection';
import MainBrand from './MainBrand';
import AddClientsButton from './AddClientsButton';
import Wrapper from '../Registration/Wrapper';
import MainExport from './MainExport';
import MainExit from './MainExit';
import { useDispatch } from 'react-redux';
import { authReset } from '../../redux/ducks/registration';
import SpanExportIcon from './SpanExportIcon';

function Main(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authReset());
  };

  return (
    <MainWrap generalWrapper>
      <MainSection header>
        <Wrapper headerWrap>
          <MainBrand deni>Naurkhanov</MainBrand>
          <AddClientsButton>Добавить клиента</AddClientsButton>
        </Wrapper>
        <Wrapper headerWrap>
          <MainWrap export>
            <MainExport>Экспорт</MainExport>
            <SpanExportIcon />
          </MainWrap>
          <MainExit onClick={handleClick}>Exit</MainExit>
        </Wrapper>
      </MainSection>
    </MainWrap>
  );
}

export default Main;
