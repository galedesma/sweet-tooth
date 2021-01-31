import React from "react";
import ReactDOM from "react-dom";
import ProductCard from "./components/ProductCard";
import ProductsContainer from "./components/ProductsContainer";
import faker from "faker";

class App extends React.Component {
  render() {
    return (
      <div>
        Hola! Hice un componente
        <ProductsContainer>
          <ProductCard
            productImage={faker.image.image()}
            productName="Producto 1"
          />
          <ProductCard
            productImage={faker.image.image()}
            productName="Producto 2"
          />
          <ProductCard
            productImage={faker.image.image()}
            productName="Producto 3"
          />
          <ProductCard
            productImage={faker.image.image()}
            productName="Producto 4"
          />
        </ProductsContainer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
