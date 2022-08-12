const express = require("express");

const server = express();
server.use(express.json());

server.post("/", (req, res) => {
  res.send(req.body);
});

server.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

server.post("/api/mirror", (req, res) => {
  res.status(201).json(req.body);
});

module.exports = server;
