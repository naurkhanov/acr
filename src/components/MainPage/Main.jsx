import React from 'react';
import MainWrap from './MainWrap';
import MainSection from './MainSection';
import MainBrand from './MainBrand';
import AddClientsButton from './AddClientsButton';
import Wrapper from '../Registration/Wrapper';
import MainExport from './MainExport';
import MainExit from './MainExit';

function Main(props) {
  return (
    <MainWrap generalWrapper>
      <MainSection header>
        <Wrapper headerWrap>
          <MainBrand deni>Naurkhanov</MainBrand>
          <AddClientsButton>Добавить клиента</AddClientsButton>
        </Wrapper>
        <Wrapper headerWrap>
          <MainExport>Экспорт </MainExport>
          <MainExit>Выход</MainExit>
        </Wrapper>
      </MainSection>
    </MainWrap>
  );
}

export default Main;
