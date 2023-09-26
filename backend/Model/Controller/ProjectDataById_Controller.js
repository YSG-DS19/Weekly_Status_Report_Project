const { parse } = require("dotenv");
const db = require("../Entities");
const ProjectReport = db.ProjectReportTable;

const getProjectDataById = async (req, res) => {
    // console.log(parse(URL));
    // console.log("Project ID=>",req.params.id);      
    // console.log("Get Project Data By Id",req.params.id)
    try {
        const ProjectData = await ProjectReport.findOne({
            where:{
                Id: req.params.id
            }
        });
        // console.log(ProjectData)
        res.status(200).json({msg: "Data Fetched",ProjectDataById :ProjectData});
    } catch (error) {
        console.log(error.message);
    }

}

module.exports={
    getProjectDataById,
}

