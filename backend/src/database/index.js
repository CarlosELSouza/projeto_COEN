import Sequelize from "sequelize";
import Items from "../app/models/Items";
import databaseConfig from "../config/database";

const model = Items;

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    model.init(this.connection);
  }
}

export default new Database();
