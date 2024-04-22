import { sequelize } from "./Database";

export const dataBaseConnect = async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
};
