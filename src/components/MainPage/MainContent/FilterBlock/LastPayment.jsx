import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAll,
  setMonthAgo,
  setWeekAgo,
} from '../../../../redux/ducks/clients';
import styled from 'styled-components';
import checked from '../../../../icons/checked.svg';
import { InputGroup } from 'react-bootstrap';

console.log(checked);

const LastPaymentWrap = styled.div`
  margin-top: 20px;
  & > .LastPaymentTitle {
    padding: 0 0 10px 0;
    font-weight: 400;
    font-size: 18px;
  }
  & > .radio_wrap {
    display: flex;
    align-items: center;
    position: relative;

    & > input {
      appearance: none;
      position: absolute;
    }

    & > label {
      padding-left: 25px;
      font-weight: 400;
      font-size: 16px;
      &:before {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        border: 1px solid #9d65c9;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        border-radius: 50%;
      }
      &:after {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        color: black;
        background: url('../../../../icons/checked.png') no-repeat;
        background-size: 16px 16px;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
    }

    input:checked + label:before {
      background-color: #9d65c9;
      border-color: #fff;
    }
    input:checked + label:after {
      opacity: 1;
    }
  }
`;

function LastPayment() {
  const dispatch = useDispatch();
  const all = useSelector((state) => state.clients.all);
  const weekAgo = useSelector((state) => state.clients.weekAgo);
  const monthAgo = useSelector((state) => state.clients.monthAgo);

  const handleChangeAll = () => {
    dispatch(setAll(all));
  };

  const handleChangeWeekAgo = () => {
    dispatch(setWeekAgo(weekAgo));
  };

  const handleChangeMonthAgo = () => {
    dispatch(setMonthAgo(monthAgo));
  };

  return (
    <LastPaymentWrap>
      <div className="LastPaymentTitle">Последняя оплата</div>
      <div className="radio_wrap">
        <input
          type="radio"
          id="all"
          className="custom_radio"
          name="radio"
          checked={all}
          onChange={handleChangeAll}
        />
        <label for="all">Все</label>
      </div>
      <div className="radio_wrap">
        <input
          type="radio"
          id="week_ago"
          name="radio"
          className="custom_radio"
          checked={weekAgo}
          onChange={handleChangeWeekAgo}
        />
        <label htmlFor="week_ago">Неделю назад</label>
      </div>
      <div className="radio_wrap">
        <input
          type="radio"
          id="month_ago"
          name="radio"
          className="custom_radio"
          checked={monthAgo}
          onChange={handleChangeMonthAgo}
        />
        <label htmlFor="month_ago">Месяц назад</label>
      </div>
    </LastPaymentWrap>
  );
}

export default LastPayment;
