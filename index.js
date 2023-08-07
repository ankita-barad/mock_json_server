require("dotenv").config();
const jsonserver = require("json-server");
const cors = require("cors");
const server = jsonserver.create();
const router = jsonserver.router("db.json");

server.use(cors());
server.use(jsonserver.bodyParser);
server.use(router);

server.listen(process.env.PORT, () => {
  console.log(`JSON server is running on port ${process.env.PORT}`);
});
