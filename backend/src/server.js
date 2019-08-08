const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3333);