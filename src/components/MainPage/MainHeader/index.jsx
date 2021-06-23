import React, { useEffect } from 'react';
import Wrapper from '../../Registration/Wrapper';
import MainBrand from './MainBrand';
import AddClientsButton from './AddClientsButton';
import MainWrap from './MainWrap';
import MainExport from './MainExport';
import MainExit from './MainExit';
import MainSection from './MainSection';
import { authReset } from '../../../redux/ducks/registration';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAddClientModalState,
  loadTipClient,
} from '../../../redux/ducks/clients';

function MainHeader() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(authReset());
  };
  const showAddClientModal = useSelector(
    (state) => state.clients.showAddClientModal
  );

  useEffect(() => {
    dispatch(loadTipClient());
  }, [dispatch]);

  const handleChangeAddClientModal = () => {
    dispatch(changeAddClientModalState(showAddClientModal));
  };

  return (
    <div>
      <MainSection header>
        <Wrapper headerWrap>
          <MainBrand deni>Naurkhanov</MainBrand>
          <AddClientsButton onClick={handleChangeAddClientModal}>
            Добавить клиента
          </AddClientsButton>
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
