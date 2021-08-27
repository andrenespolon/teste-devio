import socket from "../../../socket";
import { eventChannel } from "redux-saga";
import { call, fork, take, put, takeLatest, all } from "redux-saga/effects";
import { addOrder, finishedOrder } from "./action";

function watchOrders(socket) {
  return eventChannel((emit) => {
    socket.on("sendOrderToKitchen", (order) => {
      emit(addOrder(order));
    });
    return () => {};
  });
}

function* _connectKitchen() {
  const channel = yield call(watchOrders, socket);
  while (true) {
    try {
      let action = yield take(channel);
      yield put(action);
      yield fork(_connectKitchen, socket);
    } catch (error) {
      console.log(error);
    }
  }
}

function* _sendOrderRequest({ order }) {
  try {
    // emit to delivery
    socket.emit("sendOrderFromKitchen", order);

    // if ok, clear the order
    yield put(finishedOrder(order.orderNumber));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest("@kitchen/CONNECT_KITCHEN", _connectKitchen),
  takeLatest("@kitchen/SEND_ORDER_REQUEST", _sendOrderRequest),
]);
