import React from "react";
import styled from "styled-components";
import ListCheckout from "./ListCheckout";
import TotalChekout from "./TotalCheckout";
import PaymentCheckout from "./PaymentCheckout";
import ActionsCheckout from "./ActionsCheckout";
import NotesCheckout from "./NotesCheckout";
import { Divider } from "antd";

const Container = styled.div`
  /* width: ${({ open }) => (open ? "400px" : "0")}; */
  min-height: 100vh;
  width: 400px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  border-left: solid 1px #f1f1f1;
  transition: all ease 0.3s;
`;

const Content = styled.div`
  /* height: calc(100% - 50px); */
  margin-bottom: 100px;
`;

const Footer = styled.div`
  position: absolute;
`;

function SideMenu() {
  return (
    <>
      <Container>
        <Content>
          <ListCheckout />
          <Divider style={{ margin: 0 }} dashed />
          <TotalChekout />
          <Divider style={{ margin: 0 }} dashed />
          <PaymentCheckout />
          <Divider style={{ margin: 0 }} dashed />
          <NotesCheckout />
        </Content>
        <Footer>
          <ActionsCheckout />
        </Footer>
      </Container>
    </>
  );
}

export default SideMenu;
