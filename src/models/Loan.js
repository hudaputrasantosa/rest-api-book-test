"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Loan.init(
    {
      id_member: DataTypes.INTEGER,
      id_book: DataTypes.INTEGER,
      loan_date: DataTypes.DATE,
      deadline: DataTypes.DATE,
      return_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Loan",
    }
  );
  return Loan;
};
