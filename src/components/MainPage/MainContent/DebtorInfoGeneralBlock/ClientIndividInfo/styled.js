import styled from 'styled-components';

export const PaymentsListWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  table-layout: fixed;
  border-collapse: collapse;

  & > table {
    width: 100%;
    table-layout: fixed;
    border: none;
    & > thead {
      & > tr {
        & > th {
          &:nth-child(1) {
            width: 5%;
          }

          &:nth-child(2) {
            width: 20%;
          }

          &:nth-child(3) {
            width: 15%;
          }

          &:nth-child(4) {
            width: 20%;
          }

          &:nth-child(5) {
            width: 30%;
          }
        }
      }
    }
  }

  & > th,
  td {
    box-sizing: border-box;
    padding: 10px 0px 10px 0;
    border-collapse: collapse;
  }

  tr {
    & > th {
      font-size: 18px;
      font-weight: 400;
    }
  }

  & > .scroll-table-body {
    max-height: 300px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0;
    }

    & > table {
      width: 100%;
      table-layout: fixed;
      border: none;

      & > tbody {
        & > tr {
          & > th {
            font-weight: 300;
            padding: 10px 0 10px 0;
            &:nth-child(1) {
              width: 5%;
            }

            &:nth-child(2) {
              width: 20%;
            }

            &:nth-child(3) {
              width: 15%;
            }

            &:nth-child(4) {
              width: 20%;
            }

            &:nth-child(5) {
              width: 30%;
            }
          }
        }
      }
    }
  }
`;

export const AllPaymentsWrap = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;

  & > .AllPaymentsGeneral {
    display: flex;
    align-items: center;

    & > .PaymentsTitle {
      font-weight: 500;
      font-size: 18px;
    }

    & > span {
      cursor: pointer;
    }
  }

  & > .addPayments {
    color: #5d54a4;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AllPaymentsWrapPurchase = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;

  & > .AllPaymentsGeneral {
    display: flex;
    align-items: center;

    & > .PaymentsTitle {
      font-weight: 500;
      font-size: 18px;
      margin-left: 1px;
    }

    & > span {
      cursor: pointer;
    }
  }

  & > .addPurchase {
    color: #5d54a4;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DebtorContactInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  & > .debtorContactNumber {
    display: flex;
    align-items: center;

    & > span {
      color: #adadad;
    }

    & > .debtorNumber {
      font-weight: 500;
      font-size: 18px;
      color: #adadad;
      margin-left: 10px;
    }

    & > .reminder {
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      color: #5d54a4;
      margin-left: 10px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  & > .debtorLocation {
    display: flex;
    align-items: center;
    & > span {
      color: #adadad;
    }

    & > .debtorAdress {
      font-size: 18px;
      font-weight: 500;
      color: #adadad;
      margin-left: 4px;
    }
  }
`;

export const CloseWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .nameDone {
    display: flex;
    align-items: center;

    & > .debtorName {
      font-weight: 500;
      font-size: 36px;
    }

    & > span {
      font-size: 30px;
      margin-left: 10px;
      color: #4bdc26;
    }

    & > .attention {
      color: orange;
    }

    & > .green {
      color: green;
    }
  }

  & > .close {
    color: grey;
    cursor: pointer;
    &:hover {
      transition: 1000ms;
      transform: scale(1.2);
    }
  }
`;

export const DebtorPaymentsWrap = styled.div`
  margin-top: 30px;

  & > div {
    font-weight: 400;
    font-size: 18px;
    margin-top: 10px;
  }
`;
