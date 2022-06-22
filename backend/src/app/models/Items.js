import Sequelize, { Model } from "sequelize";

class Items extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        quantity: Sequelize.STRING,
        use_time: Sequelize.STRING,
        hours_or_minutes: Sequelize.STRING,
        potency: Sequelize.STRING,
        total_consume: Sequelize.STRING,
        total_value: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Items;
