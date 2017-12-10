module.exports = {
  project: 'express-es6-boilerplate',
  version: '0.1',
  port: 8080,
  db: {
    host: 'mysql-micro-sep.czpjgtsu7oqq.ap-northeast-2.rds.amazonaws.com',
    database: 'dev',
    username: 'dev',
    password: 'qwerTY!@',
    dialect: 'mysql',
    timezone: '+09:00',
    forceSync: true,
    alter: false
  },
  privateKey: 'express-es6-boilerplate',
  header: {
    token: 'x-access-token'
  },
  pagination: {
    defaultPage: 1,
    defaultPageSize: 10
  }
}
