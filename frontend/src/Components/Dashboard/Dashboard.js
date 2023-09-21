import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import './Dashboard.css'
import { Modal, Button, Form,TextArea } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Dashboard() {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
      projectNumber: '',
      client: '',
      projectName: '',
      summary: '',
      startDate: '',
      endDate: '',
      // Add more fields as needed
    });

    const navigate = useNavigate()
 
    useEffect(()=>{
       
        const token=cookies.get("token");
        if(!token){
        toast.error("Authentication failed! Please Login.",{autoClose:1200})
        navigate("/")
        }
        
    },[]);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSave = () => {
      // Send formData to the server to save data
      // Implement API call here
      console.log('Saving data:', formData);
      handleClose();
    };


    const cookies = new Cookies();

    const handleLogout=()=>{
    
      cookies.remove('role')
      cookies.remove('Email')
      cookies.remove('token')
      navigate('/')
    }




  return (
    <>
      <Navbar bg="light" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Weekly Status Project Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="primary" id='ReportButton' onClick={handleLogout}>Logout</Button>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <div>
      <Button variant="primary" onClick={handleShow} className='ProjectButton'>
        Create Weekly Project Status
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Weekly Project Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form Section 1 */}
          <Form.Group controlId="projectNumber">
            <Form.Label>Project Number</Form.Label>
            <Form.Control
              type="text"
              name="projectNumber"
              value={formData.projectNumber}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="client">
            <Form.Label>Client</Form.Label>
            <Form.Control
              type="text"
              name="client"
              value={formData.client}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Add other fields for Form Section 1 here */}
          
          {/* Form Section 2 */}
          <Form.Group controlId="summary">
            <Form.Label>Summary</Form.Label>
            <Form.Control
              as='TextArea'
              rows={3}
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Add other fields for Form Section 2 here */}
          
          {/* Add more form sections here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Include Next and Previous buttons here for navigation */}
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
      </>
      )
      
      }
export default Dashboard;