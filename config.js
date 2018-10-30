const NODE_ENV = process.env.NODE_ENV || "develop"

let config = {
  project: "express-sequelize-boilerplate",
  version: "0.1",
  port: 8080,
  db: {
    host: "nbarocluster.cluster-ch6crw5rtc89.ap-northeast-2.rds.amazonaws.com",
    database: "test",
    username: "baroship-dev",
    password: "talaria2018!!",
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

module.exports = config
