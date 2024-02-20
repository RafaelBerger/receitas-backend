import { DataTypes } from "sequelize";
import { sequelize } from "../db/database";

const Receitas = sequelize.define(
  "Receitas",
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    imagem_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredientes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_de_ingredientes: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    modo_de_preparo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "Receita" }
);

module.exports = Receitas;
