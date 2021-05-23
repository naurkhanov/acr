import React from 'react';
import styled from 'styled-components';

const LastPaymentWrap = styled.div`
  margin-top: 20px;

  & > .LastPaymentTitle {
    font-weight: 400;
    font-size: 18px;
    color: #000;
  }

  & > .radio_wrap {
    margin-top: 10px;

    & > input[type='radio'] {
      display: none;
    }

    & > label {
      display: inline-block;
      cursor: pointer;
      position: relative;
      padding-left: 25px;
      margin-right: 0;
      line-height: 18px;
      user-select: none;
      font-size: 18px;
      font-weight: 400;
    }

    & > label:before {
      content: '';
      display: inline-block;
      width: 17px;
      height: 18px;
      position: absolute;
      left: 0;
      bottom: 1px;
      background: url('https://snipp.ru/img/radio-1.png') no-repeat;
    }

    & > input[type='radio']:checked + label:before {
      background: url('https://snipp.ru/img/radio-2.png') 0 0 no-repeat;
    }

    & > label:hover:before {
      filter: brightness(120%);
    }

    & > input[type='radio']:disabled + label:before {
      filter: grayscale(100%);
    }
  }
`;

function LastPayment(props) {
  return (
    <LastPaymentWrap>
      <div className="LastPaymentTitle">Последняя оплата</div>
      <div className="radio_wrap">
        <input type="radio" id="all" name="radio" />
        <label for="all">Все</label>
      </div>
      <div className="radio_wrap">
        <input type="radio" id="week_ago" name="radio" />
        <label htmlFor="week_ago">Неделю назад</label>
      </div>
      <div className="radio_wrap">
        <input type="radio" id="month_ago" name="radio" />
        <label htmlFor="month_ago">Месяц назад</label>
      </div>
    </LastPaymentWrap>
  );
}

export default LastPayment;
