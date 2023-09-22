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
      type: DataTypes.STRING, 
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
        type: DataTypes.STRING,
        allownull: false,
      },
  
    impact: {
      type: DataTypes.STRING,
      allownull: false,
    },
    mitigationPlan: {
        type: DataTypes.STRING,
        allownull: false,
      },
      activitiesThisWeek: {
        type: DataTypes.STRING,
        allownull: false,
      },
  
    activitiesNextWeek: {
      type: DataTypes.STRING,
      allownull: false,
    },
    highlights: {
        type: DataTypes.STRING,
        allownull: false,
      },
      support: {
        type: DataTypes.STRING,
        allownull: false,
      },
      required: {
        type: DataTypes.STRING,
        allownull: false,
      },
      expansionOpportunities: {
        type: DataTypes.STRING,
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

  });
  return ProjectReport;
};
