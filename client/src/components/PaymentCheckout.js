import React, { useState } from "react";
import { connect } from "react-redux";
import { addPayment } from "../store/modules/checkout/action";
import { Select, Input, InputNumber, Button, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { fix } from "../utils/fixNum";

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  div.change {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  div.space {
    padding: 8px 16px;
    display: flex;
  }
`;

function PaymentCheckout({ data, dispatch }) {
  const { payments, rest, payload } = data;

  const [method, setMethod] = useState("Dinheiro");
  const [payment, setPayment] = useState(0);

  const optionsPayment = [
    {
      value: "Cartão de Crédito",
      label: "Cartão de Crédito",
    },
    {
      value: "Dinheiro",
      label: "Dinheiro",
    },
  ];

  const onChangeMethod = (value) => {
    setMethod(value);
  };

  const onChangeValuePayment = (value) => {
    setPayment(value);
  };

  const addPay = () => {
    dispatch(addPayment(method, payment));
    setPayment(0);
    setMethod("Dinheiro");
  };

  return (
    <>
      <Container>
        <h2>Pagamanto</h2>

        {!payments.length ? null : (
          <List
            split={false}
            size="small"
            dataSource={payments}
            itemLayout="horizontal"
            renderItem={(item) => (
              <List.Item>
                <div>{`${item.method} ${fix(item.payment)}`}</div>
              </List.Item>
            )}
          />
        )}

        <div className="space">
          <Input.Group compact>
            <Select
              onChange={onChangeMethod}
              placeholder="Selecione"
              options={optionsPayment}
              defaultValue="Dinheiro"
              style={{ width: 120 }}
            />
            <InputNumber
              min={0}
              upHandler={false}
              downHandler={false}
              precision={2}
              value={payment}
              decimalSeparator=","
              onChange={onChangeValuePayment}
            />
          </Input.Group>
          <Button
            onClick={addPay}
            disabled={!method || !payment}
            icon={<PlusOutlined />}
            type="link"
          >
            Adicionar
          </Button>
        </div>
        <div className="change">
          <h3>Valor a receber:</h3>
          <h3>{fix(payload)}</h3>
        </div>
        <div className="change">
          <h3>Valor a devolver (troco):</h3>
          <h3>{rest >= 0 ? fix(rest) : fix(0)}</h3>
        </div>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.checkout,
});

export default connect(mapStateToProps)(PaymentCheckout);
