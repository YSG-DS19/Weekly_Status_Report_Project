import React, { useState, useEffect,useRef,usePDF } from "react";
import { useParams } from "react-router-dom";
import ProjectReportService from "../../Services/ProjectReportService";
import "./ReportDashboard.css";
import { Row, Col,Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import ReactToPdf from 'react-to-pdf';
import { saveAs } from 'file-saver';
import generatePDF from 'react-to-pdf';
import { BsDownload } from 'react-icons/bs';

function ReportDashboard() {
  const [projectData, setProjectData] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const { id } = useParams();
  console.log(id);

  // const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const componentRef = useRef();
  const generatePdf = () => {
    // Call the toPdf function from react-to-pdf to generate the PDF
    if (componentRef.current) {
      componentRef.current.toPdf();
    }
  };

  const downloadPdf = () => {
    if (componentRef.current) {
      // Use the toPdf function provided by react-to-pdf to generate the PDF
      componentRef.current.toPdf().then((pdf) => {
        // Create a Blob object from the PDF data
        const blob = new Blob([pdf], { type: "application/pdf" });
        // Use the saveAs function from file-saver to trigger the download
        saveAs(blob, "report.pdf");
      });
    }
  };

  const targetRef = useRef();




  const location = useLocation();
  const stateData = location.state;

  const cookies = new Cookies();
  const token = cookies.get("token");

  const projectNumber = stateData.data;
  console.log("Project Number: >>>>", projectNumber);

  useEffect(() => {
    getProjectDatabyId();
    getEmployeeDetails();
  }, []);

  const getEmployeeDetails = () => {
    ProjectReportService.getEmpDetails(projectNumber, token)
      .then((res) => {
        console.log("Employee Details", res);
        setEmployeeData(res.data.EmployeeDetails);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  console.log("Name of Employee>>>", employeeData?.EmployeeName);

  const getProjectDatabyId = () => {
    console.log("fun id", id);
    ProjectReportService.getProjectDataByProjectId(id, token)
      .then((res) => {
        console.log("Project Data by ID:->>>>>", res.data.ProjectDataById);
        setProjectData(res.data.ProjectDataById);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <>
    <Button id="dwnbtn" onClick={() => generatePDF(targetRef, {filename: `${projectData?.projectNumber + "-"+projectData?.client}.pdf`})} >Download as PDF<BsDownload/></Button>
    <div ref={targetRef} >
    
      <div  className="parent-container">
        <div>
        <div className="container page">
          <div className="row">
            <div className="col textBold">
              <h2 className="textBold">
                {projectData?.projectNumber +
                  " " +
                  projectData?.client +
                  " " +
                  projectData?.projectName}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col textBold">
              <h5>{projectData?.summary}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col" className="headers text-center mt-2 mb-2">
              Project status summary
            </div>
          </div>
          <div class="row">
            <Col xs={6}>
              <Row className="p-1 mb-1">
                {" "}
                {/*style={{backgroundColor:"#ff6196",paddingTop:"10px", marginBottom:"5px "}}*/}
                <Col xs={6}>
                  <label className="textBoldPink">Start date : </label>{" "}
                  <label className="textColor">{projectData?.startDate}</label>
                </Col>
                <Col xs={6}>
                  <label className="textBoldPink">End date : </label>{" "}
                  <label className="textColor">{projectData?.endDate}</label>
                </Col>
              </Row>
            </Col>

            <Col xs={6}>
              <Row className="p-1 mb-2">
                <Col>
                  <label className="textBold">Scope</label>
                  <div className="color-picker">
                    <div
                      className="color-preview"
                      style={{ backgroundColor: projectData?.scope }}
                    ></div>
                  </div>
                </Col>
                <Col>
                  <label className="textBold">Schedule</label>
                  <div className="color-picker">
                    <div
                      className="color-preview "
                      style={{ backgroundColor: projectData?.schedule }}
                    ></div>
                  </div>
                </Col>
                <Col>
                 
                  <label className="textBold"> Quality</label>
                  <div className="color-picker">
                    <div
                      className="color-preview"
                      style={{ backgroundColor: projectData?.quality }}
                    ></div>
                  </div>
                </Col>
                <Col>
                  <label className="textBold">CSat*</label>
                  <div className="color-picker">
                    <div
                      className="color-preview"
                      style={{
                        backgroundColor: projectData?.customerSatisfaction,
                      }}
                    ></div>
                  </div>
                </Col>
              </Row>
            </Col>
          </div>
          <div class="row">
            <div class="col" className="headers text-center">
              Key issues/risks
            </div>

            <table class="table table-bordered border-dark">
              <thead>
                <tr>
                  <th scope="col-4" className="textBold text-center">
                    Issue/Risk
                  </th>
                  <th scope="col-4" className="textBold text-center">
                    Impact
                  </th>
                  <th scope="col-4" className="textBold text-center">
                    Mitigation Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td  className=" col-4 textColor">
                    <ul>
                      {projectData?.issueRisk
                        ?.split("•")
                        .map((sentence, index) => (
                          <li key={index} className="textColor">
                            {sentence.trim()}
                          </li>
                        ))}
                    </ul>
                  </td>
                  {/* <th scope="row" className="textColor">
                    {projectData?.issueRisk}
                  </th> */}
                  <td className=" col-4 textColor">
                    <ul>
                      {projectData?.impact
                        ?.split("•")
                        .map((sentence, index) => (
                          <li key={index} className="textColor">
                            {sentence.trim()}
                          </li>
                        ))}
                    </ul>
                  </td>
                  {/* <td className="textColor">{projectData?.impact}</td> */}

                  <td className=" col-4 textColor">
                    <ul>
                      {projectData?.mitigationPlan
                        ?.split("•")
                        .map((sentence, index) => (
                          <li key={index} className="textColor">
                            {sentence.trim()}
                          </li>
                        ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="row">
            <div class="col border headers">
              Activities planned for this week & status
            </div>
            <div class="col border headers">
              Activities planned for next week(s)
            </div>
          </div>

          <div class="row">
            <div class="col textColor">{projectData?.activitiesThisWeek}</div>
            <div class="col textColor ">{projectData?.activitiesNextWeek}</div>
          </div>

          <div class="row">
            <div class="col border headers">
              Highlights, Support Required and Expansion opportunities
            </div>
            <div class="col border headers">Project Team</div>
          </div>

          <div class="row">
            <div class="col-6 textColor">
              {projectData?.highlights +
                "\n" +
                projectData?.support +
                "\n" +
                projectData?.expansionOpportunities}
            </div>

            <div className="col-4 border textColor">
              {employeeData.map((emp, index) => (
                <div key={index} className="col-12 border-bottom">
                  {emp.EmployeeName}
                </div>
              ))}
            </div>

            <div className="col-2 border textColor">
              {employeeData.map((emp, index) => (
                <div key={index} className="col-12 border-bottom">
                  {emp.Status}
                </div>
              ))}
            </div>

            {/* <div className="container"> 
  <div className="row">
    <div className="col-4 border border-dark">
      <div className="row">
        {employeeData.map((emp, index) => (
          <div key={index} className="col-12 border-bottom">
            {emp.EmployeeName}
          </div>
        ))}
      </div>
    </div>

    <div className="col-2 border border-dark">
      <div className="row">
        {employeeData.map((emp, index) => (
          <div key={index} className="col-12 border-bottom">
            {emp.Status}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div> */}
          </div>

       
          <div class="row bottom-fixed">
            <div class="col-3 textColor">
              <label className="textBold">Circulation Limited :</label>{" "}
              Commercial
            </div>
            <div class="col-3 textColor">
              <label className="textBold">London Lead :</label>{" "}
              {projectData?.chennaiLead}
            </div>
            <div class="col-6 textColor">
              <label className="textBold">Chennai Lead :</label>
              {projectData?.londonLead}
            </div>
          </div>
       
        </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default ReportDashboard;
