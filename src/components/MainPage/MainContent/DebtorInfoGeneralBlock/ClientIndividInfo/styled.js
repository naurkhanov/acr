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
