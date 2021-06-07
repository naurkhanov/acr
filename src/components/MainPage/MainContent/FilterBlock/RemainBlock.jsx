import React from 'react';
import styled from 'styled-components';

const Remain = styled.div`
  margin-top: 20px;

  & > .remainTitle {
    font-weight: 400;
    font-size: 18px;
  }

  & > .fromAndTo {
    display: flex;
    justify-content: space-between;
    width: 165px;
    margin-top: 10px;

    & > .from {
      color: #d0d0d0;
    }

    & > .to {
      color: #d0d0d0;
    }
  }

  & > .fromAndToForms {
    width: 260px;
    justify-content: space-between;
    display: flex;
    margin-top: 10px;

    & > input {
      width: 120px;
      height: 61px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      outline: none;
      padding: 20px;
      font-size: 18px;
      font-weight: 300;
      border-radius: 5px;
    }

    & > input::placeholder {
      color: #d0d0d0;
    }
  }
`;

function RemainBlock(props) {
  return (
    <Remain>
      <div className="remainTitle">Остаток оплаты</div>
      <div className="fromAndTo">
        <div className="from">От</div>
        <div className="to">До</div>
      </div>
      <div className="fromAndToForms">
        <input type="text" placeholder="100" />
        <input type="text" placeholder="26500" />
      </div>
    </Remain>
  );
}
export default RemainBlock;
