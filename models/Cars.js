// sample model
const Sequelize = require("sequelize");//imported module
const sequel = require("../config/connections.js");//connection
const Cars  = sequel.define("cars",{ //table creation
    carid:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull:false
    },
    carModel:{
        type:Sequelize.STRING,
        allowNull:false
    },
    carMake:{
        type:Sequelize.STRING,
        allowNull:false 
    },
    carYear:{
        type:Sequelize.STRING,
        allowNull:false 
    }
})
module.exports = Cars


































// // sample model
// const Sequelize = require('sequelize'); //imported module
// const seqconnection = require("../config/connections.js") //connection

// const Raymodel = seqconnection.define("models",{ //table creation
//     modelid:{
//         type:Sequelize.INTEGER,
//         primaryKey:true,
//         allowNull:false
//     },
//     modelName:{
//         type:Sequelize.STRING,
//         allowNull:false,
//     },
//     modelhgt:{
//         type:Sequelize.INTEGER,
//         allowNull:false
//     },
//     modelage:{
//         type:Sequelize.INTEGER,
//         allowNull:false
//     }
// })
// module.exports = Raymodel;
