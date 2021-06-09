const initialState = {
  items: [],
  loadDebtors: false,
  payments: [],
  lastpayments: [],
  filter: '',
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
