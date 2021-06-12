import React from 'react';
import { LastPaymentWrap } from './styled';

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
