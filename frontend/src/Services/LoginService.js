import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
// for SignUp
const saveUserDetails = async(data)=>{
    console.log("HHJBDADAS",data)
    const SavingUserDetails = await axios.post(`http://localhost:8080/signup`,data)
    console.log(SavingUserDetails)
    return SavingUserDetails
}


// for Login 
const checkUserDetails = async(data)=>{
    console.log(data);
    const CheckUserDetails = await axios.post(`http://localhost:8080/login`,data)
    console.log(checkUserDetails);
    return CheckUserDetails
}


export default {saveUserDetails,checkUserDetails}