import { createSelector } from 'reselect';

const allClients = (state) => state.clients.items;
const allLastPayments = (state) => state.clients.payments;
const getDebtors = (state) => state.clients.debtors;
const getLoadDebtors = (state) => state.clients.loadDebtors;
const getIndividualClients = (state) => state.individualclient.items;
const getPaymentsOpen = (state) => state.individualclient.paymentsOpen;
const getPayments = (state) => state.individualclient.payments;
const getPurchase = (state) => state.individualclient.purchases;
const getPaymentMethods = (state) => state.individualclient.paymentMethods;
const getPaymentModalShow = (state) => state.individualclient.showModalPayment;
const getPurchasesListOpen = (state) => state.individualclient.purchaseListOpen;
const getShowModalPurchase = (state) =>
  state.individualclient.showModalPurchase;

export const allClientsSelector = createSelector(
  allClients,
  (allClientInfo) => allClientInfo
);

export const allLastPaymentsSelector = createSelector(
  allLastPayments,
  (lastPayments) => lastPayments
);

export const debtorsSelector = createSelector(getDebtors, (debtors) => debtors);

export const loadDebtorsSelector = createSelector(
  getLoadDebtors,
  (loadDebtors) => loadDebtors
);

export const IndividualClientsSelector = createSelector(
  getIndividualClients,
  (items) => items
);

export const PaymentsOpenSelector = createSelector(
  getPaymentsOpen,
  (PaymentsOpen) => PaymentsOpen
);

export const PaymentsSelector = createSelector(
  getPayments,
  (payments) => payments
);

export const PurchaseSelector = createSelector(
  getPurchase,
  (purchases) => purchases
);

export const PaymentMethodsSelector = createSelector(
  getPaymentMethods,
  (paymentMethods) => paymentMethods
);

export const PaymentsModalShowSelector = createSelector(
  getPaymentModalShow,
  (show) => show
);

export const PurchasesListOpenSelector = createSelector(
  getPurchasesListOpen,
  (show) => show
);

export const ShowModalPurchaseSelector = createSelector(
  getShowModalPurchase,
  (openClose) => openClose
);
