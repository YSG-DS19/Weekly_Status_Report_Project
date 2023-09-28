const db = require("../Entities");
const ProjectReport = db.ProjectReportTable;


const Store_project_report_data = async (req, res) => {


        // console.log(req.body);
    console.log("ProjectStatusdataForm>>>>>",req.body.data);


    const {data} = req.body;
    // const data = req.body.data;
    console.log("Data from req>>>", data)
        
        if(data.projectNumber&&data.client&&data.projectName&&data.summary&&data.startDate&&data.endDate&&data.scope&&data.schedule&&data.quality&&data.customerSatisfaction&&data.issueRisk&&data.impact&&data.mitigationPlan&&data.activitiesThisWeek&&data.activitiesNextWeek&&data.highlights&& data.support&&data.expansionOpportunities&&
            data.chennaiLead&&data.londonLead ){

                const WeeklyReport = await ProjectReport.create({
                    projectNumber:data.projectNumber,
                    projectName:data.projectName,
                    client:data.client,
                    summary:data.summary,
                    startDate:data.startDate,
                    endDate:data.endDate,
                    scope:data.scope,
                    schedule:data.schedule,
                    quality:data.quality,
                    customerSatisfaction:data.customerSatisfaction,
                    issueRisk:data.issueRisk,
                    impact:data.impact,
                    mitigationPlan:data.mitigationPlan,
                    activitiesNextWeek:data.activitiesNextWeek,
                    activitiesThisWeek:data.activitiesThisWeek,
                    highlights:data.highlights,
                    support:data.support,
                    expansionOpportunities:data.expansionOpportunities,
                    chennaiLead:data.chennaiLead,
                    londonLead:data.londonLead
                  });
                  console.log(WeeklyReport)
                  res.status(200).json({ message: "Report published successfully." });
            }

}
module.exports = {
    Store_project_report_data,
};
