import React from "react";
import { connect } from "react-redux";
import { clearCheckout } from "../store/modules/checkout/action";
import { sendOrderRequest } from "../store/modules/checkout/action";
import styled from "styled-components";
import { Button, Space } from "antd";

const Container = styled.div`
  border-top: solid 1px #cacaca50;
  padding: 20px;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
`;

function ActionsCheckout({ data, dispatch }) {
  const { products, payments, rest } = data;

  const clearCurrentCheckout = () => {
    dispatch(clearCheckout());
  };

  const sendOrderToProduce = () => {
    dispatch(sendOrderRequest(data));
  };

  return (
    <>
      <Container>
        <Space>
          <Button onClick={clearCurrentCheckout} danger>
            Cancelar
          </Button>
          <Button
            disabled={!products.length || !payments.length || rest < 0}
            onClick={sendOrderToProduce}
            type="primary"
          >
            Finalizar
          </Button>
        </Space>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.checkout,
});

export default connect(mapStateToProps)(ActionsCheckout);
