import React, { useEffect } from 'react';
import ClientSearch from './ClientSearch';
import ClientInfo from './ClientInfo';
import { useDispatch, useSelector } from 'react-redux';
import ScrollWrap from './ScrollWrap';
import {
  loadDebtors,
  loadLastPayments,
} from '../../../../../redux/ducks/clients';
import { DebtorInfoGeneralBlockStyles } from './styled';
import dayjs from 'dayjs';

function DebtorInfoGeneralBlock(props) {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.items);
  const filterText = useSelector((state) => state.clients.filter);
  const from = useSelector((state) => state.clients.from);
  const to = useSelector((state) => state.clients.to);
  const debtors = useSelector((state) => state.clients.debtors);
  const lastPayments = useSelector((state) => state.clients.lastpayments);
  const all = useSelector((state) => state.clients.all);
  const weekAgo = useSelector((state) => state.clients.weekAgo);
  const monthAgo = useSelector((state) => state.clients.monthAgo);
  const repaidDept = useSelector((state) => state.clients.repaidDeptShow);
  //фильтрация
  const showDebtors = useSelector((state) => state.clients.debtorsShow);
  const getOrDefault = (value, defaultValue) => {
    return value === undefined ? defaultValue : value;
  };
  const fromOpred = getOrDefault(from, 0);
  const toOpred = getOrDefault(to, 100000000);
  const filteredToFrom = clients.filter((client) => {
    return fromOpred && toOpred
      ? client.indebtedness >= fromOpred && toOpred >= client.indebtedness
      : fromOpred
      ? client.indebtedness >= fromOpred
      : toOpred
      ? client.indebtedness <= toOpred
      : client.indebtedness;
  });
  const filteredToFromDebtors = debtors.filter((client) => {
    return fromOpred && toOpred
      ? client.indebtedness >= fromOpred && toOpred >= client.indebtedness
      : fromOpred
      ? client.indebtedness >= fromOpred
      : toOpred
      ? client.indebtedness <= toOpred
      : client.indebtedness;
  });
  const filteredClients = filteredToFrom.filter((client) => {
    const clientInicial =
      client.firstname + ' ' + client.lastname + ' ' + client.lastname;
    return clientInicial.toUpperCase().indexOf(filterText.toUpperCase()) > -1;
  });
  const filteredDebtors = filteredToFromDebtors.filter((debtor) => {
    const debtorInicial =
      debtor.firstname + ' ' + debtor.lastname + ' ' + debtor.lastname;
    return debtorInicial.toUpperCase().indexOf(filterText.toUpperCase()) > -1;
  });

  const filteredPaymentsWeekAgo = lastPayments.filter((payment) => {
    const diffDate = dayjs().diff(dayjs(payment.date), 'd');
    return diffDate <= 7;
  });

  const filteredPaymentsMonthAgo = lastPayments.filter((payment) => {
    const diffDate = dayjs().diff(dayjs(payment.date), 'd');
    return diffDate > 30;
  });

  const lastPaymentsClientsWeekAgo = filteredPaymentsWeekAgo.map((payment) => {
    return clients.find((client) => client?.id === payment?.clientId);
  });

  const lastPaymentsClientsMonthAgo = filteredPaymentsMonthAgo.map(
    (payment) => {
      return clients.find((client) => client?.id === payment?.clientId);
    }
  );

  const filteredLastPaymentsClientsWeekAgo = lastPaymentsClientsWeekAgo.filter(
    (client) => {
      const clientInicial =
        client?.firstname + ' ' + client?.lastname + ' ' + client?.lastname;
      return clientInicial.toUpperCase().indexOf(filterText.toUpperCase()) > -1;
    }
  );

  const filteredLastPaymentsClientsMonthAgo =
    lastPaymentsClientsMonthAgo.filter((client) => {
      const clientInicial =
        client?.firstname + ' ' + client?.lastname + ' ' + client?.lastname;
      return clientInicial.toUpperCase().indexOf(filterText.toUpperCase()) > -1;
    });

  const choiseAndWeekAgo = (
    showDebtors,
    filteredDebtors,
    weekAgo,
    filteredLastPaymentsClientsWeekAgo,
    monthAgo,
    filteredLastPaymentsClientsMonthAgo,
    all,
    filteredClients,
    repaidDept
  ) => {
    if (showDebtors) {
      return filteredDebtors;
    } else if (weekAgo) {
      return filteredLastPaymentsClientsWeekAgo;
    } else if (monthAgo) {
      return filteredLastPaymentsClientsMonthAgo;
    } else if (all) {
      return filteredClients;
    } else if (repaidDept) {
      return filteredDebtors;
    }
    return filteredClients;
  };

  useEffect(() => {
    dispatch(loadLastPayments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadDebtors());
  }, [dispatch]);

  return (
    <DebtorInfoGeneralBlockStyles>
      <ClientSearch />
      <ScrollWrap>
        {choiseAndWeekAgo(
          showDebtors,
          filteredDebtors,
          weekAgo,
          filteredLastPaymentsClientsWeekAgo,
          monthAgo,
          filteredLastPaymentsClientsMonthAgo,
          all,
          filteredClients,
          repaidDept
        ).map((client) => {
          return <ClientInfo client={client} key={client?.id} />;
        })}
      </ScrollWrap>
    </DebtorInfoGeneralBlockStyles>
  );
}

export default DebtorInfoGeneralBlock;
