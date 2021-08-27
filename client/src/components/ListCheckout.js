import React from "react";
import { connect } from "react-redux";
import { removeToCheckout } from "../store/modules/checkout/action";
import { List, Button, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px 20px;
`;

function ListCheckout({ data, dispatch }) {
  const { products } = data;
  const dataSource = products;

  return (
    <>
      <Container>
        <h2>Checkout</h2>
        {!dataSource.length ? (
          <Typography.Text type="secondary">
            Nenhum produto selecionado.
          </Typography.Text>
        ) : (
          <List
            split={false}
            size="small"
            dataSource={dataSource}
            itemLayout="horizontal"
            renderItem={(item) => (
              <List.Item
                className="item"
                actions={[
                  <Button
                    type="link"
                    onClick={(e) => dispatch(removeToCheckout(item.id))}
                    danger
                    icon={<DeleteOutlined />}
                  />,
                ]}
              >
                <div>{`${item.quantity} x ${item.name}`}</div>
              </List.Item>
            )}
          />
        )}
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.checkout,
});

export default connect(mapStateToProps)(ListCheckout);
