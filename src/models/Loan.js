"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loan.hasOne(models.Member, {
        foreignKey: "id_member",
      });

      Loan.hasMany(models.Book, {
        foreignKey: "id_book",
      });
    }
  }
  Loan.init(
    {
      id_member: DataTypes.INTEGER,
      id_book: DataTypes.INTEGER,
      loan_date: DataTypes.DATE,
      return_date: DataTypes.DATE,
      penalty: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Loan",
    }
  );
  return Loan;
};
