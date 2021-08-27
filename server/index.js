const app = require("express")();
const cors = require("cors");
const server = require("http").createServer(app);
const options = {
  path: "/api/",
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
};
const io = require("socket.io")(server, options);

// simula o database
const ordersKitchen = [];
const ordersDelivery = [];
const connections = [];

io.on("connection", function (socket) {
  console.log(`Conectado: ${socket.id}`);
  connections.push(socket);

  // recebe novo pedido e envia para a cozinha
  socket.on("recieveOrderFromTable", function (order) {
    // registra pedido
    ordersKitchen.push(order);
    // envia para a cozinha
    console.log(order);
    socket.broadcast.emit("sendOrderToKitchen", order);
  });

  // recebe status da cozinha e envia para a retirada
  socket.on("sendOrderFromKitchen", function (order) {
    // registra e envia para o delivery
    ordersDelivery.push(order);
    console.log(order);
    // socket.broadcast.emit("sendOrderToDelivery", order);
  });
});

server.listen(5001, () => {
  console.log("API rodando na porta 5001 (socket).");
});
