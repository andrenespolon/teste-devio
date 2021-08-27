import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fix } from "../utils/fixNum";

const Container = styled.div`
  padding: 10px 20px;
`;

function TotalCheckout({ total }) {
  return (
    <Container>
      <h2>Total</h2>
      <h1>{total > 1 ? fix(total) : fix(0)}</h1>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  total: state.checkout.total,
});

export default connect(mapStateToProps)(TotalCheckout);
