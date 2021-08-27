import React, { useEffect } from "react";
import { connect } from "react-redux";
import { connectKitchen } from "../store/modules/kitchen/action";
import CardOrder from "./CardOrder";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 2fr));
  grid-auto-flow: dense;
  grid-column-end: -1;
  padding: 30px 0;

  img {
    opacity: 0.8;
  }

  div.action {
    display: flex;
    justify-content: space-between;
  }
`;

function ListOrdersKitchen({ data, dispatch }) {
  const { orders } = data;

  useEffect(() => {
    dispatch(connectKitchen());
  });

  return (
    <>
      <Grid>
        {orders.reverse().map((ele, idx) => (
          <CardOrder key={idx} item={ele} />
        ))}
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.kitchen,
});

export default connect(mapStateToProps)(ListOrdersKitchen);
