import React from 'react';
import LeftSidePanel from './FilterBlock/leftSidePanel';
import styled from 'styled-components';
import DebtorInfoGeneralBlock from './DebtorInfoGeneralBlock';

const MainContentWrap = styled.div`
  margin-top: 40px;
  display: flex;
`;

function MainContent(props) {
  return (
    <MainContentWrap>
      <LeftSidePanel />
      <DebtorInfoGeneralBlock />
    </MainContentWrap>
  );
}

export default MainContent;
