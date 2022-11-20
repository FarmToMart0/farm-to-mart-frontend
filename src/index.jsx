import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './reducers/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme'
import PWAInstallerPrompt from 'react-pwa-installer-prompt';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
<ThemeProvider theme={theme}>
<PWAInstallerPrompt 
      render={({ onClick }) => (
        <button type="button" onClick={onClick}> // make sure you pass onClick
          Install
        </button>
      )}
      callback={(data) => console.log(data)} 
    />
    <App />
</ThemeProvider> 
</Provider>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
reportWebVitals();
