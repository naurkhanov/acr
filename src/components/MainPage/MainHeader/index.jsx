import React from 'react';
import Wrapper from '../../Registration/Wrapper';
import MainBrand from './MainBrand';
import AddClientsButton from './AddClientsButton';
import MainWrap from './MainWrap';
import MainExport from './MainExport';
import MainExit from './MainExit';
import MainSection from './MainSection';
import { authReset } from '../../../redux/ducks/registration';
import { useDispatch } from 'react-redux';

function MainHeader(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(authReset());
  };
  return (
    <div>
      <MainSection header>
        <Wrapper headerWrap>
          <MainBrand deni>Naurkhanov</MainBrand>
          <AddClientsButton>Добавить клиента</AddClientsButton>
        </Wrapper>
        <Wrapper headerWrap>
          <MainWrap export>
            <MainExport />
          </MainWrap>
          <MainExit onClick={handleClick}>Exit</MainExit>
        </Wrapper>
      </MainSection>
    </div>
  );
}

export default MainHeader;
