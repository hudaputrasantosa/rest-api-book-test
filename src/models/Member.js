"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Member.hasMany(models.Loan, {
        foreignKey: "id_member",
      });
    }
  }
  Member.init(
    {
      name: DataTypes.STRING,
      sex: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      isPenalty: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Member",
    }
  );
  return Member;
};
