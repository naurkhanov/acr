import React, { useState } from 'react';
import MainWrap from './MainHeader/MainWrap';
import MainHeader from './MainHeader';
import MainContent from './MainContent';

function MainPage(props) {
  return (
    <MainWrap generalWrapper>
      <MainHeader />
      <MainContent />
    </MainWrap>
  );
}

export default MainPage;
