// import express from "express";
import { WebSocketServer } from "ws";

// const app = express();
// const port = 3000;

// const server = app.listen(port, () => {
//   console.log("Server is listening...");
// });

const server = new WebSocketServer.Server({ port: "8080" });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.send(`Roger that! ${message}`);
  });
});

// wss.on("connection", (ws) => {
//   ws.on("message", (data) => {
//     console.log("Data from client : ", data);
//     ws.send("Jajak Allah Khayran");
//   });
// });
