import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CardProduct from "./CardProduct";

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
  padding-top: 30px;

  img {
    opacity: 0.8;
  }

  div.action {
    display: flex;
    justify-content: space-between;
  }
`;

function ListOfProducts({ data }) {
  const { items } = data;
  return (
    <>
      <Grid>
        {items.map((ele, idx) => (
          <CardProduct key={idx} item={ele} />
        ))}
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.products,
});

export default connect(mapStateToProps)(ListOfProducts);
