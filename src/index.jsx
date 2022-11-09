import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './reducers/store';
import { ThemeProvider } from '@mui/material/styles';

import theme from './utils/theme'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
<ThemeProvider theme={theme}><App /></ThemeProvider> 
</Provider>
);

reportWebVitals();
