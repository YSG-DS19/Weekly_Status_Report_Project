import axios from 'axios';


// for saving the weekly project status report
const saveProjectReport  = async(data)=>{
    console.log("HHJBDADAS",data)
    const SavingUserDetails = await axios.post(`http://localhost:8080/projectReport`,data)
    console.log(SavingUserDetails)
    return SavingUserDetails
}

export default {saveProjectReport}