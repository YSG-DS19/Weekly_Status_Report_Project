module.exports = (sequelize, DataTypes) => {
  const ProjectReport = sequelize.define("ProjectReport", {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectNumber: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    client: {
      type: DataTypes.STRING,
      allownull: false,
    },
    projectName: {
      type: DataTypes.STRING,
      allownull: false,
    },
    summary: {
      type: DataTypes.TEXT, 
      allownull: false,
    },
    startDate: { 
        type: DataTypes.DATEONLY,
         allownull: false
     },
    endDate: {
        type: DataTypes.DATEONLY,
        allownull: false,
      },
      scope: {
        type: DataTypes.STRING,
        allownull: false,
      },
      schedule: {
        type: DataTypes.STRING,
        allownull: false,
      },
      quality: {
        type: DataTypes.STRING,
        allownull: false,
      },
      
    customerSatisfaction: {
        type: DataTypes.STRING,
        allownull: false,
      },
      issueRisk: {
        type: DataTypes.TEXT,
        allownull: false,
      },
  
    impact: {
      type: DataTypes.TEXT,
      allownull: false,
    },
    mitigationPlan: {
        type: DataTypes.TEXT,
        allownull: false,
      },
      activitiesThisWeek: {
        type: DataTypes.TEXT,
        allownull: false,
      },
  
    activitiesNextWeek: {
      type: DataTypes.TEXT,
      allownull: false,
    },
    highlights: {
        type: DataTypes.TEXT,
        allownull: false,
      },
      support: {
        type: DataTypes.TEXT,
        allownull: false,
      },
      
      expansionOpportunities: {
        type: DataTypes.TEXT,
        allownull: false,
      },
      chennaiLead: {
        type: DataTypes.STRING,
        allownull: false,
      },
      londonLead: {
        type: DataTypes.STRING,
        allownull: false,
      },
      // isDeleted: {
      //   type: DataTypes.STRING,
      //   allownull: false,
      //   defaultValue: false
      // },


  });
  return ProjectReport;
};
