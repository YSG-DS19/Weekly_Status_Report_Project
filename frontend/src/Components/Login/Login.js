import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./Login.css";
import Signup from "./Signup";
import { useState } from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import LoginService from "../../Services/LoginService";


function Login() {
 
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

 /* const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };*/


  const cookies = new Cookies();
  const navigate = useNavigate()


  const handleOnSubmit = evt => {
    evt.preventDefault();

    LoginService.checkUserDetails({email,password}).then((res)=>{
      console.log(res.data.message);

      if (res.data.message==="Login Successful"){
        
        toast.success(res.data.message);
        // setCookie('UserData',res.data.userdata)
        cookies.set("role",res.data.userdata.Role);
        const roles=cookies.get("role");
        
        cookies.set("Email",res.data.userdata.Email);


        cookies.set("token",res.data.token)
        const token=cookies.get("token");
        console.log(token);



        if (roles.includes("Admin")){
          
          navigate('/adminTrainingTable')
        }
        else{
          navigate('/userTrainingTable')
        }    
      }


  
      if (res.data.message=== "All fields are mandatory ; Please fill it."){
        toast.warning(res.data.message);
      }
  
      
    }).catch(err=>{
      console.log(err);
      toast.error("Invalid email or password!")
    })
  }


  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"/>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleOnSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                  <label className="form-label" for="form1Example13">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="form-control form-control-lg" />
                  <label className="form-label" for="form1Example23">
                    Password
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">
                    Don't have an account?<a href="/signup"> SignUp</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
