module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    username: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  })
}
