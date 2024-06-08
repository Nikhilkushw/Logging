const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/route");
const db = require("./config/database");
const morgan = require("morgan");
const fs = require('fs');
const path = require('path')

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.json());

morgan.token('timestamp', () => {
  return new Date().toLocaleString();
});
const customMorganFormat = 'method::method url::url status::status timestamp::timestamp';

app.use(morgan(customMorganFormat, {
  stream: fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' })
}))

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server is started on port ", PORT);
});
