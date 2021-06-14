import React from 'react';
import { LastPaymentWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAll,
  setMonthAgo,
  setWeekAgo,
} from '../../../../redux/ducks/clients';

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
          checked={monthAgo}
          onChange={handleChangeMonthAgo}
        />
        <label htmlFor="month_ago">Месяц назад</label>
      </div>
    </LastPaymentWrap>
  );
}

export default LastPayment;
