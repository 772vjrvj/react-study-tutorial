import React from "react";
import ReactDOM from "react-dom";
import Step5AddInverseDataFlow from "./MAIN CONCEPTS/12. Thinking In React/Step 5 Add Inverse Data Flow";

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

ReactDOM.render(
  <React.StrictMode>
    <Step5AddInverseDataFlow products={PRODUCTS} />
  </React.StrictMode>,
  document.getElementById("root")
);
