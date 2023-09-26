//Defining Employee Table

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      EmployeeID: {
        type: DataTypes.INTEGER,

        allowNull: false,

        primaryKey: true,
      },

      EmployeeName: {
        type: DataTypes.STRING,

        allowNull: false,
      },
      Status:{
        type: DataTypes.STRING,

        allowNull: false,

      },
      Designation: {
        type: DataTypes.STRING,

        allowNull: false,
      },

      Project_allocated: {
        type: DataTypes.STRING,

        allowNull: false,
      },


    },

    {
      timestamps: false,

      createdAt: false,

      updatedAt: false,
    }
  );

  return Employee;
};
