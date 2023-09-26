// const { parse } = require("dotenv");
const db = require("../Entities");
const Employee = db.EmployeeTable;

const getEmployeeData = async (req, res) => {
    // console.log(parse(URL));
    console.log("Project Number=>",req.params.projectNumber);      
    
    try {
        const EmployeeData = await Employee.findAll({
            where:{
                Project_allocated: req.params.projectNumber
            }
        });
        // console.log(EmployeeData)
        res.status(200).json({msg: "Data Fetched",EmployeeDetails :EmployeeData});
    } catch (error) {
        console.log(error.message);
    }

}

module.exports={
    getEmployeeData,
}
