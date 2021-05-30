import React, { useEffect } from 'react';
import styled from 'styled-components';
import DebtorSearch from './DebtorSearch';
import DebtorInfo from './DebtorInfo';
import { useDispatch, useSelector } from 'react-redux';
import { loadDebtors } from '../../../../../redux/ducks/debtors';
import ScrollWrap from './ScrollWrap';

const DebtorInfoGeneralBlockStyles = styled.div`
  width: 100%;
  height: 850px;
  margin-left: 20px;
  padding: 20px 20px 0 20px;
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

function DebtorInfoGeneralBlock(props) {
  const dispatch = useDispatch();
  const debtors = useSelector((state) => state.debtors.items);

  useEffect(() => {
    dispatch(loadDebtors());
  }, [dispatch]);

  return (
    <DebtorInfoGeneralBlockStyles>
      <DebtorSearch />
      <ScrollWrap>
        {debtors.map((debtor) => {
          return <DebtorInfo debtor={debtor} />;
        })}
      </ScrollWrap>
    </DebtorInfoGeneralBlockStyles>
  );
}

export default DebtorInfoGeneralBlock;
