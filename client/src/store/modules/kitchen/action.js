export function connectKitchen() {
  return {
    type: "@kitchen/CONNECT_KITCHEN",
  };
}

export function addOrder(order) {
  return {
    type: "@kitchen/ADD_ORDER",
    order,
  };
}

export function finishedOrder(orderNumber) {
  return {
    type: "@kitchen/FINISHED_ORDER",
    orderNumber,
  };
}

export function sendOrderRequest(order) {
  return {
    type: "@kitchen/SEND_ORDER_REQUEST",
    order,
  };
}
