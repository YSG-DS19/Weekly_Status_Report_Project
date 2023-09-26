const dbconfig=require("../../Config/dbconfig");
require('dotenv').config()
const sql=require("pg");
const {Sequelize,DataTypes}=require("sequelize");
const db={};

const client= new sql.Client({ user: dbconfig.USER, password: dbconfig.PASSWORD })


console.log("4. In  Entties index.js file before Connection to Postgres");
// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL DATABASE Successfully');
    // You can start executing queries here
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database:', err);
  });
    
console.log("5. In  Entties index.js file After Connection to Postgres");
 
  const sequelize=new Sequelize(
    dbconfig.DATABASE,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        dialect:dbconfig.DIALECT,
        host:dbconfig.HOST
    }
);

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully for Sequelize.');
    //   console.log("Express Server is running on ", process.env.BACKEND_PORT);
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();

db.sequelize=sequelize;

db.UserRegTable=require("./UserRegistration")(sequelize,DataTypes);
db.ProjectReportTable=require("./ProjectReport")(sequelize,DataTypes);
db.EmployeeTable=require("./Employee")(sequelize,DataTypes);




db.sequelize.sync({force:false}).then(()=>{
    console.log("re-sync-done")
})

module.exports=db