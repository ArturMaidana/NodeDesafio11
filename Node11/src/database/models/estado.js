'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estado= sequelize.define('Estado', {
    name: DataTypes.STRING,
    sigla: DataTypes.STRING
  }, {});
  Estado.associate = function(models) {
    Estado.hasMany(models.Candidato, {as: 'name'})
  };
  return Estado;
};