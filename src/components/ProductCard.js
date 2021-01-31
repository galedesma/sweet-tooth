import React from "react";
import "../css/ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="four wide column">
      <div className="ui card">
        <div className="image">
          <img src={props.productImage} alt="productImage" />
        </div>
        <div className="content">
          <a className="header" href="#" id="productName">
            {props.productName}
          </a>
        </div>
        <div className="extra content">
          <div className="price">$1000</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
