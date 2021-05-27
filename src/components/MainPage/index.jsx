import React, { useState } from 'react';
import styled from 'styled-components';
import MainWrap from './MainHeader/MainWrap';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import PaymentsModal from './ModalIcons/PaymentsModal';
import { useSelector } from 'react-redux';
function MainPage(props) {
  const showPaymentsModal = useSelector(
    (state) => state.individualdebtor.showModalPayment
  );

  const GeneralWrapper = styled.div`
    overflow: hidden;
  `;
  return (
    <GeneralWrapper>
      <MainWrap generalWrapper>
        <MainHeader />
        <MainContent />
      </MainWrap>
      {showPaymentsModal === true ? <PaymentsModal /> : null}
    </GeneralWrapper>
  );
}

export default MainPage;
