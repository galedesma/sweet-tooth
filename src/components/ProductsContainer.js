import React from "react";
import "../css/ProductsContainer.css";

const ProductsContainer = (props) => {
  return (
    <div className="ui grid container segment" id="ProductsContainer">
      <h2 className="ui header">Más Vendidos</h2>
      <div className="row">{props.children}</div>
    </div>
  );
};

export default ProductsContainer;
