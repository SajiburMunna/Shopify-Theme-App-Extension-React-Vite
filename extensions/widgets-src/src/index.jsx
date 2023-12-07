import ReactDOM from "react-dom";
import React from "react";
import "../src/css/widgets.css"; 
import App from "./App";

// The element ID is defined in app-block.liquid
const container = document.getElementById("react-rvxpo_reviews_widget");

ReactDOM.createRoot(container).render(<App />);
