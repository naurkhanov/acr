const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const payments = router.db.get('payments');
const purchases = router.db.get('purchases');
const clients = router.db.get('clients');
const admin = router.db.get('admin');
const dayjs = require('dayjs');

server.use(middlewares);

//Functions

//оставляем платежи одного конкретного клиента (в итоге получается  массив из платежей определенного пользователя)
const getUserPayments = (payments, id) => {
  return payments.filter((item) => {
    return item.clientId === id;
  });
};

//оставляем покупки одного конкретного клиента (в итоге получаем массив из покупок опрделенного клиента)
const getUserPurchases = (purchases, id) => {
  return purchases.filter((item) => {
    return item.clientId === id;
  });
};

//общая сумма платежей определенного клиента
const getTotalPaymentsAmount = (getUserPayments) => {
  return getUserPayments.reduce((total, payment) => total + payment.amount, 0);
};

//общая сумма покупок определенного клиента
const getTotalPurchasesAmount = (getUserPurchases) => {
  return getUserPurchases.reduce(
    (total, purchase) => total + purchase.price,
    0
  );
};

//добавили новые ключи
const newClients = clients.map((client) => {
  const purchasesAmount = getTotalPurchasesAmount(
    getUserPurchases(purchases, client.id)
  );
  const paymentsAmount = getTotalPaymentsAmount(
    getUserPayments(payments, client.id)
  );
  return {
    ...client,
    totalPurchasesAmount: purchasesAmount,
    totalPaymentsAmount: paymentsAmount,
    indebtedness: purchasesAmount - paymentsAmount,
  };
});

//добавляем новый ключ с разницей между датами
const paymentsWithDiff = payments.map((payment) => {
  const now = dayjs();
  const date = payment.date;
  const diff = now.diff(date, 'day');
  return {
    ...payment,
    difference: diff,
  };
});

//оставляем последние платежи
const lastPayments = clients.map((client) => {
  const userPayments = getUserPayments(paymentsWithDiff, client.id);
  const diffs = userPayments.map((item) => item.difference);
  const minDiff = Math.min(...diffs);
  return userPayments.reverse().find((item) => item.difference === minDiff);
});

//Routes
server.get('/clientsides', (req, res) => {
  return res.json(newClients);
});

server.get('/clientsides/:clientId', (req, res) => {
  const clientId = req.params.clientId;
  const clientsFilter = newClients.find(
    (client) => client.id === parseInt(clientId)
  );
  return res.json(clientsFilter);
});

server.get('/paymentswithdiff', (req, res) => {
  return res.json();
});

server.get('/debtors', (req, res) => {
  return res.json(newClients.filter((client) => client.indebtedness > 0));
});

server.get('/lastpayments', (req, res) => {
  return res.json(lastPayments);
});

server.get('/payments/:clientId', (req, res) => {
  const paymentsFilter = paymentsWithDiff.filter(
    (payment) => payment.clientId === parseInt(req.params.clientId)
  );
  return res.json(paymentsFilter);
});

server.get('/payments', (req, res) => {
  return res.json(paymentsWithDiff);
});

server.get('/purchases', (req, res) => {
  return res.json(purchases);
});

server.get('/purchases/:clientId', (req, res) => {
  const purchasesFilter = purchases.filter(
    (purchase) => purchase.clientId === parseInt(req.params.clientId)
  );
  return res.json(purchasesFilter);
});

// маршрут от и до

server.get('lastpayments/from=:from/to=:to', (req, res) => {
  const lastpaymentsFilter = lastPayments.filter((payment) => {});
  return res.json();
});

server.use(router);
server.listen(process.env.PORT || 3005, () => {
  console.log('run JSON server');
});
