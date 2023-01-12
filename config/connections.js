const Sequelize = require('sequelize');
const sequel = new Sequelize("carWarehouse","root","08134715847",{dialect:"mysql",host:"localhost"})

module.exports = sequel;