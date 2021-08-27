import socket from "../../../socket";
import { put, takeLatest, all } from "redux-saga/effects";
import { clearCheckout } from "./action";

import { notification } from "antd";

// notification success
const notifySuccess = (number) => {
  notification.open({
    type: "success",
    message: `Pedido ${number} enviado com sucesso!`,
    description: "Para mais informações, acompanhe o status em 'Delivery'.",
  });
};

function* _sendOrderRequest({ order }) {
  try {
    // fake order number
    const num = new Date().getTime().toString().substr(9);
    order.orderNumber = num;

    // emit to cuzize
    socket.emit("recieveOrderFromTable", order);

    // if ok, clear the order
    yield put(clearCheckout());
    notifySuccess(num);
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest("@checkout/SEND_ORDER_REQUEST", _sendOrderRequest),
]);
