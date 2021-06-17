import styled from 'styled-components';

export const DebtorSearchForm = styled.input`
  width: 100%;
  height: 45px;
  font-size: 18px;
  font-weight: 300;
  padding: 20px 20px 20px 20px;
  outline: #9d65c9;
  border-radius: 5px;

  border: none;
  background-color: transparent;

  &:focus {
    border: 1px solid #9d65c9;
  }

  &:hover {
    border: 1px solid #9d65c9;
  }
`;

export const SearchFixed = styled.div`
  position: sticky;
  top: 5px;
  z-index: 1000;
  background-color: #fff;
  padding: 10px 0 0 0;
`;

export const DebtorInfoGeneralBlockStyles = styled.div`
  width: 100%;
  height: 850px;
  margin-left: 20px;
  padding: 0 20px 0 20px;
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const BlockWrap = styled.div`
  & > .debtorAndIcon {
    display: flex;
    align-items: center;

    & > .debtorTitle {
      font-weight: 700;
      font-size: 26px;
      color: black;
    }

    & > .debtor_icon {
      margin-left: 10px;
      & > .green {
        color: #4bdc26;
      }
      & > .attention {
        color: #ed940e;
      }
    }
  }

  & > .lastPaymentTitle {
    margin-top: 10px;
    color: #adadad;
    font-size: 20px;
    font-weight: 300;
  }
  & > .leftPaymentTitle {
    margin-top: 10px;
    color: #adadad;
    font-size: 20px;
    font-weight: 300;
  }
`;

export const Debtor = styled.div`
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px 20px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;

  & > .strelka {
    cursor: pointer;
    font-size: 30px;
  }
`;
