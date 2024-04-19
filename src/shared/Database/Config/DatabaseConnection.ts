import { sequelize } from "./Database";


export const dataBaseConnect = async () => {
    try {
        await sequelize.sync({ force: false });
    } catch (error) {
        console.log(error);
    }
}