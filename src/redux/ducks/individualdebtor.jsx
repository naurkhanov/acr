const initialState = {
  items: [],
  loadIndividualDebtors: false,
  paymentsOpen: false,
  payments: [],
  loadPayments: false,
  paymentMethods: [],
  paymentMethodsLoading: false,
  showModalPayment: false,
  addPaymentLoading: false,
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
    case 'payments/load/start':
      return {
        ...state,
        loadPayments: true,
      };
    case 'payments/load/success':
      return {
        ...state,
        loadPayments: false,
        payments: action.payload,
      };
    case 'paymentMethods/load/start':
      return {
        ...state,
        paymentMethodsLoading: true,
      };

    case 'paymentMethods/load/success':
      return {
        ...state,
        paymentMethods: action.payload,
        paymentMethodsLoading: false,
      };
    case 'change/showModal':
      return {
        ...state,
        showModalPayment: !action.payload,
      };
    case 'modal/payments/close':
      return {
        ...state,
        showModalPayment: !action.payload,
      };
    case 'add/payment/start':
      return {
        ...state,
        addPaymentLoading: true,
      };
    case 'add/payment/success':
      return {
        ...state,
        payments: action.payload,
        addPaymentLoading: false,
      };
    default:
      return state;
  }
};

//санки деда мороза ежжи

// подгрузка личной инфы должников
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

//подгрузка оплатыдолжников

export const loadPayments = (debtorId) => {
  return (dispatch) => {
    dispatch({
      type: 'payments/load/start',
    });
    fetch(`http://localhost:3005/payments/${debtorId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'payments/load/success',
          payload: json,
        });
      });
  };
};

//подгрузка вариантов оплаты

export const loadPaymentMethods = () => {
  return (dispatch) => {
    dispatch({
      type: 'paymentMethods/load/start',
    });

    fetch('http://localhost:3005/paymentMethods')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'paymentMethods/load/success',
          payload: json,
        });
      });
  };
};

// открытие закрытие модального окна для выплат

export const showPaymentsModal = (paymentsModalShow) => {
  return (dispatch) => {
    dispatch({
      type: 'change/showModal',
      payload: paymentsModalShow,
    });
  };
};

//закрываем модальное окно

export const closePaymentsModal = (modalClose) => {
  return (dispatch) => {
    dispatch({
      type: 'modal/payments/close',
      payload: modalClose,
    });
  };
};

//добавляем платёж

export const addpayment = (id, sumPayment, paymentComment, methodPayment) => {
  return (dispatch) => {
    dispatch({
      type: 'add/payment/start',
    });

    fetch('http://localhost:3005/payments', {
      method: 'POST',
      body: JSON.stringify({
        id: '',
        date: new Date(),
        clientId: id,
        amount: sumPayment,
        note: paymentComment,
        methodId: methodPayment,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'add/payment/success',
          payload: json,
        });
      });
  };
};
