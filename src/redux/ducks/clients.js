const initialState = {
  items: [],
  loadDebtors: false,
  payments: [],
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
