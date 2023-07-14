import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
//variables de entorno auth0 settings
const domain = process.env.REACT_APP_ATH0_DOMINIO;
const clientId = process.env.REACT_APP_ATH0_CLIENT_ID;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}  //envia al usuario a la ruta donde estaba
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
