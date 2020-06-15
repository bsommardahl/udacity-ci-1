import express from "express";
const app: express.Application = express();

import { generateMessage } from "./messages";

app.get("/", (req, res) => {
  const message = generateMessage();
  res.send(message);
});

app.listen(3000, () => {
  // tslint:disable-next-line:no-console
  console.log("App is listening on port 3000!");
});
