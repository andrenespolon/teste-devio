import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCheckout } from "../store/modules/checkout/action";
import { Typography, InputNumber, Button, Space } from "antd";
import styled from "styled-components";

import { fix } from "../utils/fixNum";

const Card = styled.div`
  border: solid 1px #cacaca80;
  border-radius: 2px;
  div.cover {
    max-width: 100%;
    height: 150px;
    background-image: ${({ src }) => `url(${src})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  div.content {
    padding: 20px;
  }
`;

function CardProduct({ item, dispatch }) {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (number) => {
    setQuantity(number);
  };

  const addProductToCheckout = () => {
    dispatch(addToCheckout(item, quantity));
  };

  return (
    <>
      <Card src={item.img}>
        <div className="cover" />
        <div className="content">
          <h3>{item.name}</h3>
          <Typography.Text type="secondary">{`Código: ${item.id}`}</Typography.Text>
          <h2>{fix(item.price)}</h2>
          <Space>
            <span>Qtde.</span>
            <InputNumber
              value={quantity}
              onChange={changeQuantity}
              defaultValue={1}
              min={1}
              step={1}
            />
            <Button onClick={addProductToCheckout} type="primary">
              Adicionar
            </Button>
          </Space>
        </div>
      </Card>
    </>
  );
}

export default connect(null)(CardProduct);
