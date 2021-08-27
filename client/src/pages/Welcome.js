import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    padding: 10px;
    a {
      padding: 30px;
    }
  }
`;

function Welcome() {
  return (
    <Container>
      <h1>Olá! Seja bem-vindo.</h1>
      <div>
        <h3>Por favor, navegue até o ambiente de trabalho desejado.</h3>
      </div>
      <div>
        <span type="secondary">
          💡 Você pode abrir cada ambiente em uma aba do navegador!
        </span>
      </div>
      <div className="links">
        <Link to="/checkout">
          <h2>Checkout</h2>
        </Link>
        <Link to="/kitchen">
          <h2>Cozinha</h2>
        </Link>
        {/* <Link to="/delivery">Delivery</Link> */}
      </div>
    </Container>
  );
}

export default Welcome;
