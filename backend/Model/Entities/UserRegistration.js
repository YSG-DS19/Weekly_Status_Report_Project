module.exports=(sequelize,DataTypes)=>{
    const UAReg=sequelize.define("UserRegistration",{
       Id:{
           type:DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       FullName:{
           type:DataTypes.STRING,
           allownull:false  
       },
       Email:{
          type:DataTypes.STRING,
          unique:true,
          allownull:false
       },
       Password:{
           type:DataTypes.STRING,
           allownull:false
       }
       
    }
    )
    return UAReg;
   }
   