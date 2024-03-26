'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cargo = sequelize.define('Cargo', {
    IDcargo: DataTypes.INTEGER,
    nome: DataTypes.STRING
  }, {});
  Cargo.associate = function(models) {
    Cargo.belongsTo(models.Candidato, {foreignKey: 'IDCandidato'})
  };
  return Cargo;
};