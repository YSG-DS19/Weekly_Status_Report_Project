const db = require("../Entities");
const ProjectReport = db.ProjectReportTable;


const Store_project_report_data = async (req, res) => {
        console.log(req.body);

        
        if(req.body.projectNumber&&req.body.client&&req.body.projectName&&req.body.summary&&req.body.startDate&&req.body.endDate&&req.body.scope&&req.body.schedule&&req.body.quality&&req.body.customerSatisfaction&&req.body.issueRisk&&req.body.impact&&req.body.mitigationPlan&&req.body.activitiesThisWeek&&req.body.activitiesNextWeek&&req.body.highlights&& req.body.support&&req.body.expansionOpportunities&&
            req.body.chennaiLead&&req.body.londonLead ){

                const WeeklyReport = await ProjectReport.create({
                    projectNumber:req.body.projectNumber,
                    projectName:req.body.projectName,
                    client:req.body.client,
                    summary:req.body.summary,
                    startDate:req.body.startDate,
                    endDate:req.body.endDate,
                    scope:req.body.scope,
                    schedule:req.body.schedule,
                    quality:req.body.quality,
                    customerSatisfaction:req.body.customerSatisfaction,
                    issueRisk:req.body.issueRisk,
                    impact:req.body.impact,
                    mitigationPlan:req.body.mitigationPlan,
                    activitiesNextWeek:req.body.activitiesNextWeek,
                    activitiesThisWeek:req.body.activitiesThisWeek,
                    highlights:req.body.highlights,
                    support:req.body.support,
                    expansionOpportunities:req.body.expansionOpportunities,
                    chennaiLead:req.body.chennaiLead,
                    londonLead:req.body.londonLead
                  });
                  console.log(WeeklyReport)
                  res.status(200).json({ message: "Report published successfully." });
            }

}
module.exports = {
    Store_project_report_data,
};
