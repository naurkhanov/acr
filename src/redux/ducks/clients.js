const initialState = {
  items: [],
  loadDebtors: false,
  payments: [],
  lastpayments: [],
  filter: '',
  debtorsShow: false,
  debtors: [],
  from: undefined,
  to: undefined,
  all: false,
  weekAgo: false,
  monthAgo: false,
};

export const clients = (state = initialState, action) => {
  switch (action.type) {
    case 'clients/load/start':
      return {
        ...state,
        loadDebtors: true,
      };

    case 'clients/load/success':
      return {
        ...state,
        items: action.payload,
        loadDebtors: false,
      };
    case 'payments/general/load/success':
      return {
        ...state,
        payments: action.payload,
      };
    case 'load/lastPayments/success':
      return {
        ...state,
        lastpayments: action.payload,
      };
    case 'set/filter':
      return {
        ...state,
        filter: action.payload,
      };
    case 'set/debtors/show':
      return {
        ...state,
        debtorsShow: !action.payload,
        monthAgo: false,
        all: false,
        weekAgo: false,
      };
    case 'load/debtors/success':
      return {
        ...state,
        debtors: action.payload,
      };
    case 'set/from':
      return {
        ...state,
        from: action.payload,
      };
    case 'set/to':
      return {
        ...state,
        to: action.payload,
      };
    case 'set/all':
      return {
        ...state,
        all: !action.payload,
        weekAgo: false,
        monthAgo: false,
      };
    case 'set/WeekAgo':
      return {
        ...state,
        weekAgo: !action.payload,
        monthAgo: false,
        all: false,
      };
    case 'set/monthAgo':
      return {
        ...state,
        monthAgo: !action.payload,
        weekAgo: false,
        all: false,
      };
    default:
      return state;
  }
};

export const loadClients = () => {
  return (dispatch) => {
    dispatch({
      type: 'clients/load/start',
    });

    fetch('http://localhost:3005/clientsides')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'clients/load/success',
          payload: json,
        });
      });
  };
};

export const loadPayments = () => {
  return (dispatch) => {
    dispatch({
      type: 'payments/general/load/start',
    });
    fetch(`http://localhost:3005/payments`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'payments/general/load/success',
          payload: json,
        });
      });
  };
};

export const loadLastPayments = () => {
  return (dispatch) => {
    dispatch({
      type: 'load/lastPayments/start',
    });
    fetch(`http://localhost:3005/lastpayments`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/lastPayments/success',
          payload: json,
        });
      });
  };
};

//фильтрация по имени

export const filterClientsName = (text) => {
  return (dispatch) => {
    dispatch({
      type: 'set/filter',
      payload: text,
    });
  };
};

//показывать должников

export const debtorsshowchange = (debtorsShow) => {
  return (dispatch) => {
    dispatch({
      type: 'set/debtors/show',
      payload: debtorsShow,
    });
  };
};

//подгружаем должников

export const loadDebtors = () => {
  return (dispatch) => {
    dispatch({
      type: 'load/debtors/start',
    });
    fetch('http://localhost:3005/debtors')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/debtors/success',
          payload: json,
        });
      });
  };
};

//изменение инпута from

export const setForm = (from) => {
  return (dispatch) => {
    dispatch({
      type: 'set/from',
      payload: from,
    });
  };
};

//изменения инпута to

export const setOt = (to) => {
  return (dispatch) => {
    dispatch({
      type: 'set/to',
      payload: to,
    });
  };
};

//изменение радио кнопки all

export const setAll = (all) => {
  return (dispatch) => {
    return dispatch({
      type: 'set/all',
      payload: all,
    });
  };
};

//изменение радио кнопки месяц назад
export const setWeekAgo = (weekAgo) => {
  return (dispatch) => {
    dispatch({
      type: 'set/WeekAgo',
      payload: weekAgo,
    });
  };
};

//изменение радио кнопки месяц назад

export const setMonthAgo = (monthAgo) => {
  return (dispatch) => {
    dispatch({
      type: 'set/monthAgo',
      payload: monthAgo,
    });
  };
};
