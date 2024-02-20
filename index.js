import express from "express";
import "./src/db/database.js";
import { sequelize } from "./src/db/database.js";
// import { Receitas } from "./src/model/receitas-model.js";

const server = express();

server.use(express.json());

try {
  sequelize.sync({ force: true }).then((result) => {
    console.log(result);
  });
} catch (error) {
  console.log(error);
}

server.listen(3000, () => {
  console.log("Server up");
});
