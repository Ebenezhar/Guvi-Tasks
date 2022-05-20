const myResume = {
    CarrerObjective: `To work for the organization that improve my skill and to make best use of my
    skill to achieve the organization’s target.`,
    Education: {
        underGraduation: {
            collegeName:"ANJALAI AMMAL MAHALINGAM ENGINEERING COLLEGE, Thiruvarur.",
            subject: "B.E. Electrical and Electronics",
            cgpa: 7.05,
            year : "2014-2018",
        },
        higherSecondary: {
            school: "TOWN HIGHER SECONDARY SCHOOL, Kumbakonam.",
            subject: "Computer Science",
            Marks: 811,
            year: "2012-2014",
        },
        secondary:{
            school: "TOWN HIGHER SECONDARY SCHOOL, Kumbakonam.",
            subject: "State Board",
            Marks: 405,
            year: "2012-2014",
        }
    },
    professionalExp: {
        eaton: {
            Year: "Sept 2018 - Jan 2020",
            keyWorks: [`Pre-validation of LV and HV Fuses as per the National (IS) and international standards (IEC
                / UL).`, `Responsible for Performing benchmarking analysis and preparing design input for the new projects
                 LV and HV Fuses.`, `Responsible for Prototype and validation sample build for internal and external 
                 testing of new and VAVE projects.`,`Compilation of DVP&R and PVP&R reports for Gate approvals of new projects.`],
            keyProjects: [`Worked on Insourcing of IEC Cylindrical Fuses (690V,500V & 400V) from Spain to India - Project 
                of Value-4.1M$`,`Worked on Custom solution Project for Weatherproof NH fuses.`, `Worked on
                 New rating development in NH Fuses.`],
            keyPerformance: [`Accuracy, responsibility and accountability – Excellent attention to details and well 
                organized.`,`Little knowledge in Design Failure Mode and Effective Analysis (DFMEA) and Process
                 Failure Mode and Effective Analysis (PFMEA).`,`Working Knowledge in SAP in order to check the BOM,
                  process, stock, basic data about the fuses.`],
        },
        tagCorp: {
            Year: "Apr 2021 - Feb 2022  ",
            keyWorks: [`Acknowledge the enquiry to customer and register in our tracker.`, `Review and enter the data
             of enquiries like type of conductor, bundle configuration, conductor diameter, Hardware fittings and Conductor 
             Accessories information in the Checklist.`, `Forward the checklist to design team for drawings & GTP 
             (Guaranteed Technical Particulars and support them if any Clarification in this regard.`],    
        }
    },
    academicProjects: {
        title: "Smart energy meter with e-billing System.",
        description: "The objective of the project is to automatically acquire energy meter reading and pay the amount using smart card.",
    },
    areaOfInterest: ["Protection and Switchgear","Transmission and Distribution","Transformers"],
    technicalSkils: {
        programmingLanguage: "Basics of C and C++.",
        professionalSoftware: "SAP, Basic of MATLAB 7.5",
        Expert: "Microsoft Office, with a focus on Excel.",
    },
    coCorricularActivities: [`Visited ‘DIESEL LOCO SHED’ in Ponmalai, Trichy and learned 
        about Loco mechanism and service & maintainance procedures.`,`Visited ‘GAS TURBINE POWER PLANT’ in Thirumakkottai and 
        learned about Electrical power Generation and Distribution.`],
    personalQualities: ["Leadership Skills","Adaptive","Quick Learner"],
    personalProfile: {
        fathersName: "Balu M",
        dateOfBirth: "15-10-1996",
        Language: "Tamil & English",
    },
};
const finalResume = JSON.stringify(myResume);
console.log(finalResume);