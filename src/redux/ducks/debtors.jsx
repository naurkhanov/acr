const initialState = {
  items: [],
  loadDebtors: false,
};

export const debtors = (state = initialState, action) => {
  switch (action.type) {
    case 'debtors/load/start':
      return {
        ...state,
        loadDebtors: true,
      };

    case 'debtors/load/success':
      return {
        ...state,
        items: action.payload,
        loadDebtors: false,
      };
    default:
      return state;
  }
};

export const loadDebtors = () => {
  return (dispatch) => {
    dispatch({
      type: 'debtors/load/start',
    });

    fetch('http://localhost:3005/clients')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'debtors/load/success',
          payload: json,
        });
      });
  };
};
