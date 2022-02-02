const Sequelize = require("sequelize");

module.exports = class user extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        surveyCheck1: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        surveyCheck2: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        surveyCheck3: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        surveyCheck4: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "user",
        tableName: "users",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
