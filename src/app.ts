import express from "express";
import config from "config";
import connect from "./utils/dbConnection";

const app = express();
const port = config.get<number>("port");

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(port, async () => {
  console.log(`Server listening at port ${port}`);
  await connect();
});
