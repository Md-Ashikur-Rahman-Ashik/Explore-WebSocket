import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log("Server is listening...", port);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log(console.log("Data from client : "), data);
    ws.send("Jajak Allah Khayran");
  });
});
