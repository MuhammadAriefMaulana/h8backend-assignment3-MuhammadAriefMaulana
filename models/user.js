"use strict";
const { hash, verify: verifyHash } = require("argon2");
const { sign, verify } = require("jsonwebtoken");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    generateToken() {
      const { id, email } = this;
      const token = sign({ id, email }, process.env.JWT_SECRET);
      return token;
    }

    async verify(password) {
      return verifyHash(this.password, password);
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate(async (user) => {
    user.password = await hash(user.password);
  });

  return User;
};
