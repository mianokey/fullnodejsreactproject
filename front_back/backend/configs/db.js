import { Sequelize } from "sequelize";

const db = new Sequelize('may_online', 'root', 'mintz_ke', {
    host: "localhost",
    dialect: "mysql"
})

export default db;