import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgresql://rafaelberger.dev:pr9famA5cPtd@ep-white-sky-a5afmok7.us-east-2.aws.neon.tech/receitas?sslmode=require"
);

try {
  await sequelize.authenticate();
  console.log("Conectado com o banco");
} catch (error) {
  console.error("Não foi conectado com o banco:", error);
}
