import dotenv from "dotenv"

dotenv.config()

const {
  NODE_ENV = "develop",
  DB_HOST,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
} = process.env

let config = {
  project: "express-sequelize-boilerplate",
  version: "0.1",
  port: 8080,
  db: {
    host: DB_HOST,
    database: DB_DATABASE,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    dialect: "mysql",
    timezone: "+09:00",
    forceSync: false,
    alter: false,
  },
  sentry: {
    DSN: "",
  },
  privateKey: "express-sequelize-boilerplate",
  header: {
    token: "x-access-token",
  },
  pagination: {
    defaultPage: 1,
    defaultPageSize: 10,
  },
}

if (NODE_ENV == "production") {
  config.port = 8080
}

export default config
