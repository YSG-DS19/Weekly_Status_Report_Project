import axios from 'axios';


// for saving the weekly project status report
const saveProjectReport  = async(data)=>{
    
    const SavingUserDetails = await axios.post(`http://localhost:8080/projectReport`,data)
    
    return SavingUserDetails
}


const getProjectStatusData = async() =>{

    const getData = await axios.get(`http://localhost:8080/getprojectdata`)
    console.log(getData);
     return getData
}



const getProjectDataByProjectId =async(id) =>{

    const  projectData = await axios.get(`http://localhost:8080/reportDashboard/${id}`)
    console.log(projectData)
    return projectData
}

export default {saveProjectReport,getProjectStatusData,getProjectDataByProjectId}