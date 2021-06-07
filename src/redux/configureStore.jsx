import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import { registration } from './ducks/registration';
import { clients } from './ducks/clients';
import { individualclient } from './ducks/individualclient';

const logger = createLogger({
  collapsed: true,
});

export const store = createStore(
  combineReducers({ registration, clients, individualclient }),
  applyMiddleware(thunk, logger)
);
