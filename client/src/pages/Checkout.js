import React from "react";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import ListOfProducts from "../components/ListOfProducts";

const Container = styled.div`
  margin-right: 400px;
  padding: 10px;
  height: 100vh;
  width: 100%;
`;

const View = styled.div`
  width: 100%;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #cacaca80;
  padding: 20px;
  h1 {
    margin: 0;
  }
`;

function Checkout() {
  document.title = "Checkout";
  return (
    <Container>
      <View>
        <Header>
          <h1>Produtos</h1>
        </Header>
        <ListOfProducts />
      </View>
      <SideMenu />
    </Container>
  );
}

export default Checkout;
