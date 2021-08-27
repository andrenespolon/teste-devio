const INITIAL_STATE = {
  orders: [],
};

function kitchen(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@kitchen/ADD_ORDER":
      const date = new Date().toLocaleTimeString();
      action.order["date"] = date;
      state.orders.push(action.order);
      return {
        ...state,
      };

    case "@kitchen/FINISHED_ORDER":
      const idx = state.orders.findIndex(
        (o) => o.orderNumber === action.orderNumber
      );
      if (idx >= 0) {
        state.orders.splice(idx, 1);
      }
      return {
        ...state,
      };

    case "@kitchen/SEND_ORDER_REQUEST":
      return state;

    default:
      return state;
  }
}

export default kitchen;
