import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

const Global = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto',sans-serif;
    font-weight: 300;
    font-size: 16px;
    
    a {
      text-decoration:none;
    }
   
  }
  
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Global />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
