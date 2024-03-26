'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidato = sequelize.define('Candidato', {
    id: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {});
  Candidato.ssociate = function(models) {
    Candidato.belongsTo(models.Cargo, {foreignKey: 'IDCandidato', as: 'candidato'})
     };
  return Candidato;
};