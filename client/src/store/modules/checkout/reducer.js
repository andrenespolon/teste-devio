const INITIAL_STATE = {
  orderNumber: "",
  products: [],
  payments: [],
  payload: 0,
  total: 0,
  rest: 0,
  note: "",
  client: "",
};

function checkout(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@chckout/ADD_PRODUCT":
      const productIndex = state.products.findIndex(
        (p) => p.id === action.product.id
      );
      if (productIndex < 0) {
        state.products.push({
          ...action.product,
          quantity: action.quantity,
        });
      } else {
        state.products[productIndex].quantity += Number(action.quantity);
      }

      state.total += Number(action.quantity * action.product.price);

      return {
        ...state,
      };

    case "@checkout/REMOVE_PRODUCT":
      const idx = state.products.findIndex((p) => p.id === action.id);
      if (idx >= 0) {
        state.total -= Number(
          state.products[idx].quantity * state.products[idx].price
        );
        state.products.splice(idx, 1);
      }
      return {
        ...state,
      };

    case "@checkout/ADD_PAYMENT":
      const { method, payment } = action;
      state.payments.push({
        method,
        payment,
      });

      state.payload += payment;

      state.rest = Number(state.payload - state.total);

      return {
        ...state,
      };

    case "@checkout/CLEAR_CHECKOUT":
      return {
        orderNumber: "",
        products: [],
        payments: [],
        payload: 0,
        total: 0,
        rest: 0,
        note: "",
        client: "",
      };

    case "@checkout/ADD_CLIENT_NAME":
      return {
        ...state,
        client: action.str,
      };

    case "@checkout/ADD_NOTES":
      return {
        ...state,
        note: action.str,
      };

    // send request do server
    case "@checkout/SEND_ORDER_REQUEST":
      return state;

    default:
      return state;
  }
}

export default checkout;
