import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "./translate/i18n";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);
