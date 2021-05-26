const initialState = {
  items: [],
  loadIndividualDebtors: false,
  paymentsOpen: false,
};

// reducer
export const individualdebtor = (state = initialState, action) => {
  switch (action.type) {
    case 'load/loadIndividualDebtorInfo/start':
      return {
        ...state,
        loadIndividualDebtors: true,
      };
    case 'load/loadIndividualDebtorInfo/success':
      return {
        ...state,
        loadIndividualDebtors: false,
        items: action.payload,
      };

    case 'set/paymentsshow':
      return {
        ...state,
        paymentsOpen: !action.payload,
      };
    default:
      return state;
  }
};

//санки деда мороза ежжи
export const loadIndividualDebtorInfo = (debtorId) => {
  return (dispatch) => {
    dispatch({
      type: 'load/loadIndividualDebtorInfo/start',
    });
    fetch(`http://localhost:3005/clients/${debtorId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/loadIndividualDebtorInfo/success',
          payload: json,
        });
      });
  };
};

export const paymentsShow = (paymentOpen) => {
  return (dispatch) => {
    dispatch({
      type: 'set/paymentsshow',
      payload: paymentOpen,
    });
  };
};
