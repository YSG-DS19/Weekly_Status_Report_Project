import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProjectReportService from '../../Services/ProjectReportService';

function ReportDashboard() {
    const {id}  = useParams();
    console.log(id);



    useEffect(()=>{
        getProjectDatabyId()
    },[])



    const getProjectDatabyId =()=>{
        ProjectReportService.getProjectDataByProjectId(id)
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log("Error:",err)
        })
    }

  return (
    <div className='container'>
        <div className='row'>


        </div>
    </div>
  )


}

export default ReportDashboard