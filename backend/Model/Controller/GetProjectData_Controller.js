const db = require("../Entities");
const ProjectReport = db.ProjectReportTable;

const getProjectData = async (req, res) => {
    console.log("body",req.body);
    try{
       
        const ProjectData = await ProjectReport.findAll();
        // console.log(ProjectData)
        
        res.status(200).json({ message: "data Fetched" ,ProjectDataFrontend :ProjectData});
        

        
    
      
    }
    catch (error) {
        console.log(error.message);
    }

}

module.exports={
getProjectData,
}



