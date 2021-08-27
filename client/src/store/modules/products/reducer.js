import { response } from "../../../data/index.json";

const INITIAL_STATE = {
  items: response,
};

function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default products;
