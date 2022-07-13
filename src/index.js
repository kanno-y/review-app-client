import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import { App } from "./App.js";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.querySelector("#content");
const root = createRoot(container);
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.querySelector("#content")
);
