import ReactDOM from "react-dom";
import React from "react";

import "../src/css/widgets.css"; 
import App from "./App";

// The element ID is defined in app-block.liquid
const container = document.getElementById("react-rvxpo_reviews_widget");
const rvxpo_productId = container.getAttribute("data-product_id");
if(container){
    ReactDOM.createRoot(container).render(<App rvxpo_productId={rvxpo_productId}/>);
}
 
 

 

