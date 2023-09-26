import React, { useState, useEffect } from 'react'
import { Button, Container, Modal, Form, Col, Card, Table } from 'react-bootstrap';
import ProjectReportService from '../../Services/ProjectReportService';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import './ShowReport.css'
import { format } from 'date-fns';


function ShowReport(props) {

  const [show, setShow] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);

  // const [formData, setFormData] = useState({
  //   projectNumber: '',
  //   client: '',
  //   projectName: '',
  //   summary: '',
  //   startDate: '',
  //   endDate: '',
  //   scope: '',
  //   schedule: '',
  //   quality: '',
  //   customerSatisfaction: '',
  //   issueRisk: '',
  //   impact: '',
  //   mitigationPlan: '',
  //   activitiesThisWeek: '',
  //   activitiesNextWeek: '',
  //   highlights: '',
  //   support: '',
  //   expansionOpportunities: '',
  //   chennaiLead: '',
  //   londonLead: '',

  // });

  const [projectData, setProjectData] = useState([])
  const cookies = new Cookies();
  const token = cookies.get("token");

  const handleClose = () => setShow(false);





  const handleShow = () => {
    
    setShow(true);
    ProjectReportService.getProjectStatusData(token).
      then((res) => {
        console.log(res)
        console.log(res.data.ProjectDataFrontend);
        setProjectData(res.data.ProjectDataFrontend)

        // console.log(projectData.map((data,index)=>{
        //   console.log(data);

        // }));
      }).catch(err => {
        console.log("Error", err)
      })


  }
  var firstObject = projectData[0];
  console.log("projectData[0]", firstObject?.projectName);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };




  const navigate = useNavigate()





  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePrevious = () => {
    setCurrentSection(currentSection - 1);
  };

  // const handleSave = () => {
  //   // Send formData to the server to save data
  //   // Implement API call here
  //   console.log('Saving data:', formData);
  //   handleClose();
  // };

  const getReport =(id,project_no)=>{
    // navigate(`/reportDashoard/${id}`)
    navigate(`/reportDashoard/${id}`,{state: { data: project_no }})
  }


  // Define a mapping of scope values to CSS classes
  const scopeClassMapping = {
    RED: 'red',
    AMBER: '#FF8C00',
    GREEN: 'green',
  };

  // Get the CSS class based on the scope value
  const scopeClassName = scopeClassMapping[firstObject?.scope] || '';

  return (
    <>
      <div>
        {/* <Button variant="primary" onClick={handleShow}>
        Get Report
      </Button> */}

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="Title">Weekly Project Status Report of {firstObject?.projectName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Conditional rendering of form sections based on currentSection */}
            {currentSection === 1 && (
              <Card>
                <Card.Header className="Title" >Project Details</Card.Header>
                <Card.Body>
                  <Form.Group controlId="projectNumber">
                    <Form.Label className="Title" >Project Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="projectNumber"
                      value={firstObject?.projectNumber}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="client">
                    <Form.Label className="Title">Client</Form.Label>
                    <Form.Control
                      type="text"
                      name="client"
                      value={firstObject?.client}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="projectName">
                    <Form.Label className="Title">Project Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="projectName"
                      value={firstObject?.projectName}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="summary">
                    <Form.Label className="Title">Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="summary"
                      value={firstObject?.summary}
                      disabled
                    />
                  </Form.Group>
                  {/* Add other fields for Form Section 1 here */}
                </Card.Body>
              </Card>
            )}

            {currentSection === 2 && (
              <Card>
                {/* <Card.Header className="Title">Brief Summary</Card.Header> */}
                <Card.Body>
                  <div className='row' style={{backgroundColor:"#ff6196",paddingTop:"10px"}}>
                  <div className='col'>
                <Form.Label className='Title' style={{color:"white"}}>Start Date:<span style={{fontWeight:"100"}}> {format(new Date(firstObject?.startDate), 'dd/MM/yyyy')}</span></Form.Label>
                </div>
                <div className='col'>
                <Form.Label className='Title'  style={{color:"white"}}>End Date: <span style={{fontWeight:"100"}}>{format(new Date(firstObject.endDate), 'dd/MM/yyyy')}</span></Form.Label>
                </div>
                </div>
         
                  <div className='row mt-4 mb-3'>
                    <div className='col'>
                      <Form.Group controlId="scope">
                        <Form.Label className='Title'>Scope</Form.Label>
                        <div className="color-picker">
                          <div className="color-preview" style={{ backgroundColor: firstObject?.scope }}></div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className='col'>
                      <Form.Group controlId="schedule">
                        <Form.Label className='Title'>Schedule    </Form.Label>
                        <div className="color-picker">
                          <div className="color-preview" style={{ backgroundColor: firstObject?.schedule }}></div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className='col'>


                      <Form.Group controlId="quality">
                        <Form.Label className='Title'>Quality</Form.Label>
                        <div className="color-picker">
                          <div className="color-preview" style={{ backgroundColor: firstObject?.quality }}></div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className='col'>
                      <Form.Group controlId="customerSatisfaction">
                        <Form.Label className='Title'>CSat* </Form.Label>
                        <div className="color-picker">
                          <div className="color-preview" style={{ backgroundColor: firstObject?.customerSatisfaction }}></div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  {/* Add other fields for Form Section 2 here */}
                </Card.Body>
              </Card>
            )}

            {currentSection === 3 && (
              <div>
                <h5 className="Title" id="tabletitle">Key Issues/Risks</h5>
                <Table striped bordered hover>

                  <thead>
                    <tr>
                      <th>Issue/ Risk</th>
                      <th>Impact</th>
                      <th>Mitigation Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{firstObject?.issueRisk}</td>
                      <td>{firstObject?.impact}</td>
                      <td>{firstObject?.mitigationPlan}</td>
                    </tr>
                    {/* Add more rows for additional data */}
                  </tbody>
                </Table>
              </div>
            )}

            {currentSection === 4 && (
              <Card>
                <Card.Header className="Title">Project Activities</Card.Header>
                <Card.Body>
                  <Form.Group controlId="activitiesThisWeek">
                    <Form.Label className="Title">Activities This Week</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="activitiesThisWeek"
                      value={firstObject?.activitiesThisWeek}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="activitiesNextWeek">
                    <Form.Label className="Title">Activities Next Week</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="activitiesNextWeek"
                      value={firstObject?.activitiesNextWeek}
                      disabled
                    />
                  </Form.Group>
                  {/* Add other fields for Form Section 4 here */}
                </Card.Body>
              </Card>
            )}

            {currentSection === 5 && (
              <Card>
                <Card.Header className="Title">Project Highlights</Card.Header>
                <Card.Body>
                  <Form.Group controlId="highlights">
                    <Form.Label className="Title">Highlights</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="highlights"
                      value={firstObject?.highlights}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="support">
                    <Form.Label className="Title">Support</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="support"
                      value={firstObject?.support}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="expansionOpportunities">
                    <Form.Label className="Title">Expansion Opportunities</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="expansionOpportunities"
                      value={firstObject?.expansionOpportunities}
                      disabled
                    />
                  </Form.Group>
                  {/* Add other fields for Form Section 5 here */}
                </Card.Body>
              </Card>
            )}

            {currentSection === 6 && (
              <div className="lead-names">
                <div className="lead-name"><label className="Title">Chennai Lead:</label> {firstObject?.chennaiLead}</div>
                <div className="lead-name"><label className="Title">London Lead:</label> {firstObject?.londonLead}</div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            {/* Render "Previous" button if not on the first section */}
            {currentSection > 1 && (
              <Button variant="secondary" onClick={handlePrevious}>
                Previous
              </Button>
            )}
            {/* Render "Next" button if not on the last section */}
            {currentSection < 6 && (
              <Button variant="primary" onClick={handleNext}>
                Next
              </Button>
            )}

          </Modal.Footer>
        </Modal>
      </div>


      <Button variant="primary" id= "button" onClick={handleShow}>
        Get Report
      </Button>

      <div className="table-responsive">
        <Table className="table-responsive table table-hover table-borderless">
          <thead className='tableheadings'>
            <tr>
              <td className="tf">Project Number</td>
              <td className="tf">Project Name</td>
              <td className="tf">Client</td>
              {/* <td className="tf">Brief Summary</td> */}
              <td className="tf">Scope</td>
              <td className="tf">Schedule</td>
              <td className="tf">Quality</td>
              <td className="tf">C*Sat</td>
              <td className="tf">Chennai Lead</td>
              <td className="tf">London Lead</td>
              {/* <td className='tf'>Start Date</td> */}
              <td className='tf'>End Date</td>
              <td className="tf">Get Report</td>
              {/* <td className="tf">Location/Meeting Link</td>
                    <td className="tf">Description</td>
                    <td className="tf">Edit</td>
                    <td className="tf">Delete</td> */}
            </tr>
          </thead>
          <tbody>
            {projectData.map((projectData, index) => (
              <tr key={projectData.Id}>
                <td className='td'>{projectData.projectNumber}</td>
                <td className='td'>{projectData.projectName}</td>
                <td className='td'>{projectData.client}</td>
                {/* <td className='td'>{projectData.summary}</td> */}
                <td className='td'>
                <div className="color-picker">
                          <div className="color-preview" style={{ backgroundColor: projectData?.scope }}></div>
                        </div>
                  </td>
                <td className='td'>
                <div className="color-picker">
                          <div className="color-preview" style={{ backgroundColor: projectData?.schedule }}></div>
                        </div>
                </td>
                <td className='td'><div className="color-picker">
                          <div className="color-preview" style={{ backgroundColor: projectData?.quality }}></div>
                        </div>
                  
                </td>
                <td className='td'><div className="color-picker">
                          <div className="color-preview" style={{ backgroundColor: projectData?.customerSatisfaction }}></div>
                        </div></td>
                {/* <td className='td'>{format(new Date(projectData.startDate), 'dd/MM/yyyy')}</td> */}
                <td className='td'>{projectData.chennaiLead}</td>
                <td className='td'>{projectData.londonLead}</td>
                <td className='td'>{format(new Date(projectData.endDate), 'dd/MM/yyyy')}</td>
                <td className='td' ><Button variant="primary" id="button" onClick={()=>getReport(projectData.Id,projectData.projectNumber)}>Show Report</Button></td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>



    </>


  );
            }



export default ShowReport