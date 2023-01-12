const sequelize = require('./config/connections.js');
const carlog = require('./models/carlog.js');
const Cars = require('./models/Cars.js');

Cars.hasMany(carlog);

sequelize.sync({force:true}).then(result=>{
    //console.log(result);
   return Cars.create({carid:2,carModel:"Navara",carMake:"Nissan",carYear:"2021"})
}).then(res=>{
    return carlog.create({color:"black",regNum:"123456",carCarid:res.carid})
}).catch(err=>{
    console.log(err)
})
