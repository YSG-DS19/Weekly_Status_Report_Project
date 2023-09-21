import React, { useState } from 'react'
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
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import LoginService from '../../Services/LoginService';
import { toast } from 'react-toastify';

function Signup() {

   const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    
    
   /*const [state, setState] = useState({
        name: '',
        email: '',
        password:'' 
      });

      const handleChange = evt => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
        console.log(state)
      };*/

      
    
    
      const handleOnSubmit = async (evt) => {
        evt.preventDefault();
        // console.log(state);
        // console.log(name,email,password);
        // let data=  await LoginService.saveUserDetails({name,email,password}).then((d)=>{
          
            let data=  await LoginService.saveUserDetails({name,email,password}).
            then((d)=>{
              console.log(d.data);
          if (d.data.message==="User added"){
            toast.success(d.data.message);
          }
    
          if (d.data.message==="Password must have a capital letter a small letter and a number and include any special character"){
            toast.warning(d.data.message);
          }
    
          if (d.data.message=== "In email domain name should contain jmangroup and only small letters"){
            toast.error(d.data.message);
          }
    
    
          if (d.data.message=== "User already exists!"){
            toast.error(d.data.message);
          }
    
          if (d.data.message=== "All fields are mandatory ; Please fill it."){
            toast.warning(d.data.message);
          }
        })
        .catch(err=>{
          toast.error("Server Error catch block frontend")
        })
    }

  return (
    <>
    <MDBContainer fluid>

    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Your Name' id='form1'  /*onChange={handleChange}*/  onChange={(e)=>{setName(e.target.value)}} type='text' className='w-100'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput label='Your Email' id='form2' /*onChange={handleChange}*/ onChange={(e)=>{setEmail(e.target.value)}} type='email'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password' id='form3'  /*onChange={handleChange}*/ onChange={(e)=>{setPassword(e.target.value)}}  type='password'/>
            </div>



            <MDBBtn className='mb-4' size='lg' onClick={handleOnSubmit}>Register</MDBBtn>

            <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">Don't have an account?<a href="/"> Login</a></p>
          </div>

          </MDBCol>

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>

  </MDBContainer>
{/*
<div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="title">Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          className="name-input-feild"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          className="email-input-feild"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          className="password-input-feild"
        />
        <button type = 'submit' className = 'sign-up-button'>Sign Up</button>
      </form>
    </div>*/}





  </>

  )
}


export default Signup;