import { io } from "socket.io-client";

const socket = io(`http://${window.location.hostname}:5001`, {
  path: "/api/",
});

export default socket;
