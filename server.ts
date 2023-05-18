import express from "express";

const server = express();

server.all("/", (req, res) => {
  res.send(`OK`);
});

function keepAlive() {
  server.listen(process.env.PORT, () => {
    console.log("Server is Ready!!" + Date.now());
  });
}

export default keepAlive;
