import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import './ProjectReport.css'
import { Modal, Button, Form } from 'react-bootstrap';
// import "textarea" from 'react-bootstrap'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import ProjectReportService from '../../Services/ProjectReportService';

function ProjectReport() {
    const [show, setShow] = useState(false);
    const [currentSection, setCurrentSection] = useState(1); // Track the current section
  
    const [formData, setFormData] = useState({
      projectNumber: '',
      client: '',
      projectName: '',
      summary: '',
      startDate: '',
      endDate: '',
      scope:'GREEN',
      schedule:'GREEN',
      quality: 'GREEN',
      customerSatisfaction:'GREEN',
      issueRisk: '',
      impact: '',
      mitigationPlan: '',
      activitiesThisWeek: '',
      activitiesNextWeek: '',
      highlights: '',
      support: '',
      expansionOpportunities: '',
      chennaiLead:'',
      londonLead:''
    });
  
      // State to track form validation errors
      const [formErrors, setFormErrors] = useState({});
  
      const handleClose = () => {
        setShow(false);
        // Reset form validation errors when closing the modal
        setFormErrors({});
      };
  
    const handleShow = () => setShow(true);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleNext = () => {
      // Validate the form before proceeding to the next section
      const validateCurrentSection = () => {
      const errors = {};
      if (currentSection === 1){
      if (!formData.projectNumber) {
        errors.projectNumber = 'Field is mandatory!';
      }
      if (!formData.projectName) {
        errors.projectName = 'Field is mandatory!';
      }
      if (!formData.client) {
        errors.client = 'Field is mandatory!';
      }
      if (!formData.summary) {
        errors.summary = 'Field is mandatory!';
      }
      if (!formData.startDate) {
        errors.startDate = 'Field is mandatory!';
      }
      if (!formData.endDate) {
        errors.endDate = 'Field is mandatory!';
      }}
  
      else if (currentSection === 2) {
  
      if (!formData.scope) {
        errors.summary = 'Field is mandatory!';
      }
      if (!formData.schedule) {
        errors.schedule = 'Field is mandatory!';
      }
      if (!formData.quality) {
        errors.quality = 'Field is mandatory!';
      }
      if (!formData.customerSatisfaction) {
        errors.customerSatisfaction = 'Field is mandatory!';
      }}
  
      else if (currentSection === 3) {
      if (!formData.issueRisk) {
        errors.issueRisk = 'Field is mandatory!';
      }
      if (!formData.impact) {
        errors.impact = 'Field is mandatory!';
      }
      if (!formData.mitigationPlan) {
        errors.mitigationPlan = 'Field is mandatory!';
      }}
      else if (currentSection === 4) {
      if (!formData.activitiesNextWeek) {
        errors.activitiesNextWeek = 'Field is mandatory!';
      }
      if (!formData.activitiesThisWeek) {
        errors.activitiesThisWeek = 'Field is mandatory!';
      }}
      else if (currentSection === 5) {
      if (!formData.highlights) {
        errors.highlights = 'Field is mandatory!';
      }
      if (!formData.support) {
        errors.support = 'Field is mandatory!';
      }
      if (!formData.expansionOpportunities) {
        errors.expansionOpportunities = 'Field is mandatory!';
      }}
      else if (currentSection === 6) {
      if (!formData.chennaiLead) {
        errors.chennaiLead = 'Field is mandatory!';
      }
      if (!formData.londonLead) {
        errors.londonLead = 'Field is mandatory!';
      }}
  
      // Add validations for other mandatory fields
      setFormErrors({
        ...formErrors,
        [`section${currentSection}`]: errors,
      });
  
      return Object.keys(errors).length === 0; // Return true if there are no errors
    };
  
    // Validate the current section
    const isSectionValid = validateCurrentSection();
  
    // If the current section is valid, move to the next section
    if (isSectionValid) {
      setCurrentSection(currentSection + 1);
    }
      // console.log(errors)
      // console.log(currentSection);
  
      // const sectionErrors = Object.keys(errors).filter(
      //   (errorKey) => errorKey.startsWith(`section${currentSection}`)
      // );
      //     // Check if there are any validation errors
      //     if (sectionErrors.length === 0) {
      //       setCurrentSection(currentSection + 1);
      //     }
        
          
        };
      
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
    // const handleNext = () => {
    //   setCurrentSection(currentSection + 1);
    // };
  
    const handlePrevious = () => {
      setCurrentSection(currentSection - 1);
    };
  
    const handleSave = () => {
      // Send formData to the server to save data
      // Implement API call here
      console.log('Saving data:', formData);
  
      ProjectReportService.saveProjectReport(formData).
      then((res)=>{
        console.log(res);
        if (res.data.message === "Report published successfully."){
          toast.success(res.data.message,{autoClose:1000})
        }
      }).catch((err)=>{
        console.log("Frontend Error:=>",err);
      })
      handleClose();
    };
  return (
    <>
    

    <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Weekly Project Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Conditional rendering of form sections based on currentSection */}
            {currentSection === 1 && (
              <div>
                {/* Form Section 1 */}
                <Form.Group controlId="projectNumber">
                  <label className="Title">Project Number</label>
                  <Form.Control
                    type="text"
                    name="projectNumber"
                    value={formData.projectNumber}
                    onChange={handleInputChange}
                    required // Make the field mandatory
                  />
                {/* Display error message if the field is required and not filled */}
                {formErrors.projectNumber && (
                  <Form.Text className="text-danger">
                    {formErrors.projectNumber}
                  </Form.Text>
                )}
                </Form.Group>

                <Form.Group controlId="projectName">
                <label className="Title">Project Name</label>
                  <Form.Control
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.projectName && (
                  <Form.Text className="text-danger">
                    {formErrors.projectName}
                  </Form.Text>
                )}
                </Form.Group>

                <Form.Group controlId="client">
                  <label className='Title'>Client</label>
                  <Form.Control
                    type="text"
                    name="client"
                    value={formData.client}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.client && (
                  <Form.Text className="text-danger">
                    {formErrors.client}
                  </Form.Text>
                )}
                </Form.Group>

                <Form.Group controlId="summary">
                  <label className='Title'>Brief Summary</label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="summary"
                    value={formData.summary}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.summary && (
                  <Form.Text className="text-danger">
                    {formErrors.summary}
                  </Form.Text>
                )}
                </Form.Group>
                <Form.Group controlId="startDate">
                  <label className='Title'>Start Date</label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                  />
                               {formErrors.startDate && (
                  <Form.Text className="text-danger">
                    {formErrors.startDate}
                  </Form.Text>
                )}
                </Form.Group>
                <Form.Group controlId="endDate">
                  <label className='Title'>End Date</label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.endDate && (
                  <Form.Text className="text-danger">
                    {formErrors.endDate}
                  </Form.Text>
                )}
                </Form.Group>


                {/* Add other fields for Form Section 1 here */}
              </div>
            )}

            {currentSection === 2 && (
              <div>
              <Form.Group controlId="scope">
                <label className='Title'>Scope</label>
                <div className="color-picker">
                  <Form.Control as="select" name="scope" value={formData.scope} onChange={handleInputChange} required>
                    <option value="GREEN" style={{ backgroundColor: 'green', color: 'white' }}>GREEN</option>
                    <option value="#FF8C00" style={{ backgroundColor: '#FF8C00', color: 'white' }}>AMBER</option>
                    <option value="RED" style={{ backgroundColor: 'red', color: 'white' }}>RED</option>
                  </Form.Control>
                  <div className="color-preview" style={{ backgroundColor: formData.scope }}></div>
                </div>
                {formErrors.scope && (
                  <Form.Text className="text-danger">
                    {formErrors.scope}
                  </Form.Text>
                )}
              </Form.Group>

                <Form.Group controlId="schedule">
                  <label className='Title'>Schedule</label>
                  <div className="color-picker">
                  <Form.Control as="select" name="schedule" value={formData.schedule} onChange={handleInputChange} required>
                    <option value="GREEN" style={{ backgroundColor: 'green', color: 'white' }}>GREEN</option>
                    <option value="#FF8C00" style={{ backgroundColor: '#FF8C00', color: 'white' }}>AMBER</option>
                    <option value="RED" style={{ backgroundColor: 'red', color: 'white' }}>RED</option>
                  </Form.Control>
                  <div className="color-preview" style={{ backgroundColor: formData.schedule }}></div>
                  </div>
                  {formErrors.schedule && (
                  <Form.Text className="text-danger">
                    {formErrors.schedule}
                  </Form.Text>
                )}
                </Form.Group>

                <Form.Group controlId="quality">
                  <label className='Title'>Quality</label>
                  <div className="color-picker">
                  <Form.Control as="select" name="quality" value={formData.quality} onChange={handleInputChange} required>
                    <option value="GREEN" style={{ backgroundColor: 'green', color: 'white' }}>GREEN</option>
                    <option value="#FF8C00" style={{ backgroundColor: '#FF8C00', color: 'white' }}>AMBER</option>
                    <option value="RED" style={{ backgroundColor: 'red', color: 'white' }}>RED</option>
                  </Form.Control>
                  <div className="color-preview" style={{ backgroundColor: formData.quality }}></div>
                  </div>
                  {formErrors.quality && (
                  <Form.Text className="text-danger">
                    {formErrors.quality}
                  </Form.Text>
                )}
                </Form.Group>

                <Form.Group controlId="customerSatisfaction">
                  <label className='Title'>Customer Satisfaction</label>
                  <div className="color-picker">
                  <Form.Control as="select" name="customerSatisfaction" value={formData.customerSatisfaction} onChange={handleInputChange} required>
                    <option value="GREEN" style={{ backgroundColor: 'green', color: 'white' }}>GREEN</option>
                    <option value="#FF8C00" style={{ backgroundColor: '#FF8C00', color: 'white' }}>AMBER</option>
                    <option value="RED" style={{ backgroundColor: 'red', color: 'white' }}>RED</option>
                  </Form.Control>
                  <div className="color-preview" style={{ backgroundColor: formData.customerSatisfaction }}></div>
                  </div>
                  {formErrors.customerSatisfaction && (
                  <Form.Text className="text-danger">
                    {formErrors.customerSatisfaction}
                  </Form.Text>
                )}
                </Form.Group>
              </div>
            )}

            {currentSection === 3 && (
              <div>
                {/* Form Section 3 */}
                <Form.Group controlId="issueRisk">
                  <label className='Title'>Issue/Risk</label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="issueRisk"
                    value={formData.issueRisk}
                    onChange={handleInputChange}
                    required
                  />
                                 {formErrors.issueRisk && (
                  <Form.Text className="text-danger">
                    {formErrors.issueRisk}
                  </Form.Text>
                )}
                </Form.Group>
 
                <Form.Group controlId="impact">
                  <label className='Title'>Impact</label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="impact"
                    value={formData.impact}
                    onChange={handleInputChange}
                    required
                  />
                               {formErrors.impact && (
                  <Form.Text className="text-danger">
                    {formErrors.impact}
                  </Form.Text>
                )}
                </Form.Group>
                <Form.Group controlId="mitigationPlan">
                  <label className='Title'>Mitigation Plan</label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="mitigationPlan"
                    value={formData.mitigationPlan}
                    onChange={handleInputChange}
                    required
                  />
                               {formErrors.mitigationPlan && (
                  <Form.Text className="text-danger">
                    {formErrors.mitigationPlan}
                  </Form.Text>
                )}
                </Form.Group>
                {/* Add other fields for Form Section 3 here */}
              </div>
            )}

            {currentSection === 4 && (
              <div>
                {/* Form Section 4 */}
                <Form.Group controlId="activitiesThisWeek">
                  <label className='Title'>Activity plan for this week & Status </label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="activitiesThisWeek"
                    value={formData.activitiesThisWeek}
                    onChange={handleInputChange}
                    required
                  />    {formErrors.activitiesThisWeek && (
                    <Form.Text className="text-danger">
                      {formErrors.activitiesThisWeek}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group controlId="activitiesNextWeek">
                  <label className='Title'>Activity plan for next week</label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="activitiesNextWeek"
                    value={formData.activitiesNextWeek}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.activitiesNextWeek && (
                  <Form.Text className="text-danger">
                    {formErrors.activitiesNextWeek}
                  </Form.Text>
                )}
                  
                </Form.Group>
                {/* Add other fields for Form Section 4 here */}
              </div>
            )}

            {currentSection === 5 && (
              <div>
                {/* Form Section 5 */}
                <Form.Group controlId="highlights">
                  <label className='Title'>Key Hightlights</label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="highlights"
                    value={formData.highlights}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.highlights && (
                  <Form.Text className="text-danger">
                    {formErrors.highlights}
                  </Form.Text>
                )}
                </Form.Group>
                <Form.Group controlId="support">
                  <label className='Title'>Support Required</label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="support"
                    value={formData.support}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.support && (
                  <Form.Text className="text-danger">
                    {formErrors.support}
                  </Form.Text>
                )}
                </Form.Group>
                <Form.Group controlId="expansionOpportunities">
                  <label className='Title'>Expansion Opportunities</label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="expansionOpportunities"
                    value={formData.expansionOpportunities}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.expansionOpportunities && (
                  <Form.Text className="text-danger">
                    {formErrors.expansionOpportunities}
                  </Form.Text>
                )}
                </Form.Group>
                {/* Add other fields for Form Section 5 here */}
              </div>
            )}

            {currentSection === 6 && (
              <div>
                <Form.Group controlId="chennaiLead">
                  <label className="Title">Chennai Lead</label>
                  <Form.Control
                    type="text"
                    name="chennaiLead"
                    value={formData.chennaiLead}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.chennaiLead && (
                  <Form.Text className="text-danger">
                    {formErrors.chennaiLead}
                  </Form.Text>
                )}
                </Form.Group>

                <Form.Group controlId="londonLead">
                  <label className="Title">London Lead</label>
                  <Form.Control
                    type="text"
                    name="londonLead"
                    value={formData.londonLead}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.londonLead && (
                  <Form.Text className="text-danger">
                    {formErrors.londonLead}
                  </Form.Text>
                )}
                </Form.Group>
             
            </div>
            )}

            {/* Add more form sections here using similar conditional rendering */}
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
            {/* Render "Save" button on the last section */}
            {currentSection === 6 && (
              <Button variant="primary" onClick={handleSave}>
                Save
              </Button>
            )}
          </Modal.Footer>
        </Modal>
    
    </>
  


  )
}

export default ProjectReport