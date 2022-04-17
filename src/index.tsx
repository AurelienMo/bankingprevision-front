import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from "./authentication/keycloak";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const tokenLogger = (tokens: unknown) => {
    console.log(tokens);
    // @ts-ignore
    if (!tokens.token) {
        keycloak.login()
    }
}
root.render(
  // <React.StrictMode>
      <ReactKeycloakProvider
          onTokens={tokenLogger}
          authClient={keycloak}
      >
        <App />
      </ReactKeycloakProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
