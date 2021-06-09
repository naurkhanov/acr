import dayjs from 'dayjs';

const initialState = {
  items: [],
  loadIndividualDebtors: false,
  paymentsOpen: false,
  payments: [],
  purchases: [],
  loadPayments: false,
  paymentMethods: [],
  paymentMethodsLoading: false,
  showModalPayment: false,
  addPaymentLoading: false,
  purchaseListOpen: false,
  showModalPurchase: false,
  paymentMethodSelection: false,
};

// reducer
export const individualclient = (state = initialState, action) => {
  switch (action.type) {
    case 'load/loadIndividualClientInfo/start':
      return {
        ...state,
        loadIndividualDebtors: true,
      };
    case 'load/loadIndividualClientInfo/success':
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
        payments: [...state.payments, action.payload],
        addPaymentLoading: false,
      };
    case 'purchaseList/open':
      return {
        ...state,
        purchaseListOpen: !action.payload,
      };
    case 'load/client/purchase/success':
      return {
        ...state,
        purchases: action.payload,
      };
    case 'purchase/modal/open':
      return {
        ...state,
        showModalPurchase: !action.payload,
      };
    case 'close/purchase/modal':
      return {
        ...state,
        showModalPurchase: false,
      };
    case 'payments/add/success':
      return {
        ...state,
        purchases: [...state.purchases, action.payload],
      };
    case 'set/paymentsSelection':
      return {
        ...state,
        paymentMethodSelection: !action.payload,
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
      type: 'load/loadIndividualClientInfo/start',
    });
    fetch(`http://localhost:3005/clientsides/${debtorId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/loadIndividualClientInfo/success',
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

export const closePaymentsModal = (closeOpen) => {
  return (dispatch) => {
    dispatch({
      type: 'modal/payments/close',
      payload: closeOpen,
    });
  };
};

//добавляем платёж

export const addpayment = (
  id,
  sumPayment,
  paymentComment,
  methodPayment,
  date
) => {
  return (dispatch) => {
    dispatch({
      type: 'add/payment/start',
    });

    fetch(`http://localhost:3005/payments`, {
      method: 'POST',
      body: JSON.stringify({
        id: '',
        date: date,
        clientId: id,
        amount: parseInt(sumPayment),
        note: paymentComment,
        methodId: parseInt(methodPayment),
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

//открываем покупки

export const openPurchaseList = (purchaseOpen) => {
  return (dispatch) => {
    dispatch({
      type: 'purchaseList/open',
      payload: purchaseOpen,
    });
  };
};

//подгрузка покупок определенного клиента

export const loadClientPurchases = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'load/client/purchase/start',
    });
    fetch(`http://localhost:3005/purchases/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/client/purchase/success',
          payload: json,
        });
      });
  };
};

//закрытие модального окна добавления платежей

export const closePurchaseModal = (modalclose) => {
  return (dispatch) => {
    dispatch({
      type: 'close/purchase/modal',
      payload: modalclose,
    });
  };
};

//открытие модального окна
export const showPurchaseModal = (purchasesOpen) => {
  return (dispatch) => {
    dispatch({
      type: 'purchase/modal/open',
      payload: purchasesOpen,
    });
  };
};

//добавление покупок

export const addpurchases = (
  id,
  purchasePrice,
  namePurchase,
  purchaseComment,
  date
) => {
  return (dispatch) => {
    dispatch({
      type: 'purchase/add/start',
    });
    fetch(`http://localhost:3005/purchases`, {
      method: 'POST',
      body: JSON.stringify({
        id: '',
        name: namePurchase,
        clientId: id,
        price: parseInt(purchasePrice),
        date: parseInt(date),
        completed: true,
        note: purchaseComment,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'payments/add/success',
          payload: json,
        });
      });
  };
};

// открываем/закрываем менюшку для выбора оплаты

export const paymentSelection = (paymentSelection) => {
  return (dispatch) => {
    dispatch({
      type: 'set/paymentsSelection',
      payload: paymentSelection,
    });
  };
};
