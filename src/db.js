import models from './models/index'
import config from '../config'

export default () => {
  models.sequelize.sync({
    force: config.db.forceSync,
    alter: config.db.alter
  })
    .then(function doForceSync () {
      console.log('db synced!')
    })
}
