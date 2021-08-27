import React from "react";
import ListOrdersKitchen from "../components/ListOrdersKitchen";
import styled from "styled-components";

const Container = styled.div`
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

function Kitchen() {
  document.title = "Kitchen";
  return (
    <Container>
      <View>
        <Header>
          <h1>Cozinha</h1>
        </Header>
        <ListOrdersKitchen />
      </View>
    </Container>
  );
}

export default Kitchen;
