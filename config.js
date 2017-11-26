module.exports = {
  project: 'express-es6-boilerplate',
  version: '0.1',
  port: 8080,
  db: {
    dialect: 'mysql',
    host: '',
    database: '',
    username: '',
    password: '',
    timezone: '+09:00', // for South Korea
    forceSync: false,
    alter: false
  },
  privateKey: 'express-es6-boilerplate',
  header: {
    token: 'x-access-token'
  }
}
