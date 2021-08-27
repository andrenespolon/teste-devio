export function addToCheckout(product, quantity) {
  return {
    type: "@chckout/ADD_PRODUCT",
    product,
    quantity,
  };
}

export function removeToCheckout(id) {
  return {
    type: "@checkout/REMOVE_PRODUCT",
    id,
  };
}

export function addPayment(method, payment) {
  return {
    type: "@checkout/ADD_PAYMENT",
    method,
    payment,
  };
}

export function addClientName(str) {
  return {
    type: "@checkout/ADD_CLIENT_NAME",
    str,
  };
}

export function addNotes(str) {
  return {
    type: "@checkout/ADD_NOTES",
    str,
  };
}

export function clearCheckout() {
  return {
    type: "@checkout/CLEAR_CHECKOUT",
  };
}

export function sendOrderRequest(order) {
  return {
    type: "@checkout/SEND_ORDER_REQUEST",
    order,
  };
}

// export function sendOrderSuccess() {
//   return {
//     type: "@checkout/SEND_ORDER_SUCCESS",
//   };
// }

// export function sendOrderError(error) {
//   return {
//     type: "@checkout/SEND_ORDER_ERROR",
//     error,
//   };
// }
