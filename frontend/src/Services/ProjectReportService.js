import axios from 'axios';


// for saving the weekly project status report
const saveProjectReport  = async(data)=>{
    
    const SavingUserDetails = await axios.post(`http://localhost:8080/projectReport`,data)
    
    return SavingUserDetails
}


const getProjectStatusData = async(token) =>{
    console.log("TOKEN>>>>>>>>>",token);

    const getData = await axios.get(`http://localhost:8080/getprojectdata`,{headers:{Authorization:token}})
    console.log(getData);
     return getData
}



const getProjectDataByProjectId =async(id,token) =>{
    console.log("project",id)

    const  projectData = await axios.get(`http://localhost:8080/reportDashboard/${id}`,{headers:{Authorization:token}})
  
    return projectData
}


const getEmpDetails =async(data,token) =>{
    console.log("adadad",data)
    const  projectData = await axios.get(`http://localhost:8080/getEmpData/${data}`,{headers:{Authorization:token}})
    return projectData
}





export default {saveProjectReport,getProjectStatusData,getProjectDataByProjectId, getEmpDetails}