import React from "react";
import { connect } from "react-redux";
import { sendOrderRequest } from "../store/modules/kitchen/action";
import styled from "styled-components";
import { Divider, Button, Typography, Tag } from "antd";
import {
  ClockCircleOutlined,
  UserOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const Card = styled.div`
  border: solid 1px #cacaca50;
  border-radius: 2px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Descriptions = styled.div`
  padding: 10px;
`;

const Item = styled.div`
  span {
    text-transform: uppercase;
    padding: 6px;
  }
`;

function CardOrder({ item, dispatch }) {
  const sendOrder = () => {
    dispatch(sendOrderRequest(item));
  };

  return (
    <Card>
      <Header>
        <h2>{`Pedido ${item.orderNumber}`}</h2>
      </Header>
      <Divider dashed />
      <Tag color="error">{`${item.products.length} itens`}</Tag>
      <Divider dashed />
      <Descriptions>
        {item.products.map((ele, idx) => (
          <Item key={idx}>
            <span>{ele.quantity}</span>
            <span>x</span>
            <span>{ele.name}</span>
          </Item>
        ))}
      </Descriptions>
      <Divider dashed />
      <Descriptions>
        <Item>
          <div>
            <ClockCircleOutlined />
            <Typography.Text mark>{`Entrada: ${item.date}`}</Typography.Text>
          </div>
          <div>
            <UserOutlined />
            <span>{`Cliente: ${item.client}`}</span>
          </div>
          <div>
            <InfoCircleOutlined />
            <span>{`Observações: ${item.note}`}</span>
          </div>
        </Item>
      </Descriptions>
      <Divider dashed />
      <Button onClick={sendOrder} type="primary">
        Finalizar
      </Button>
    </Card>
  );
}

export default connect(null)(CardOrder);
