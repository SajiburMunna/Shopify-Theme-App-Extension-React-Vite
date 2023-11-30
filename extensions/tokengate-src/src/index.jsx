import ReactDOM from "react-dom";
import React from "react";

import "@shopify/connect-wallet/styles.css";
import "@shopify/tokengate/styles.css";
import App from "./App";

// The element ID is defined in app-block.liquid
const container = document.getElementById("tokengating-example-app");

ReactDOM.createRoot(container).render(<App />);
