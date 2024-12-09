import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8082 });

wss.on("connection", (ws) => {
  console.log("New client connected!");

  ws.on("message", (data) => {
    console.log(`Client has sent us : ${data}`);

    // console.log("Received data type: ", data.toString("utf8"));
    const actualData = data.toString("utf8");

    ws.send(actualData.toUpperCase());
    // try {
    //   ws.send(String(data.toUpperCase()));
    // } catch (error) {
    //   console.log("We got this error", error);
    // }
  });

  ws.on("close", () => {
    console.log("Client has disconnected!");
  });
});
