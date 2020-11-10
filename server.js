const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./users/users-router.js");

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use("/api/users", userRouter);

module.exports = server;
