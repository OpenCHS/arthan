const rulesConfigInfra = require('rules-config/infra');
const IDI = require('openchs-idi');

module.exports = IDI.configure({
    "chs-admin": "admin",
    "org-admin": "admin@arthan",
    "secrets": '../secrets.json',
    "files": {
        "adminUsers": {
            "dev": ["./users/dev-admin-user.json"],
        },
        "forms": [
            "./registration/registrationForm.json",
            "./registration/beneficiaryIdentificationForm.json",
            "./daftarDuniya/enrolment.json",
            "./baseline/baselineForm.json",
            "./classroomSession/classroomSessionForm.json",
            "./psychometricformat/psychometricFormatForm.json",
            "./endline/endlineForm.json"
        ],
        "formMappings": ["./formMappings.json"],
        "formDeletions": [],
        "formAdditions": [],
        "catchments": ["./catchments.json"],
        "checklistDetails": [],
        "concepts": [
            "./registration/concepts.json",
            "./daftarDuniya/enrolmentConcepts.json",
            "./baseline/baselineConcepts.json",
            "./classroomSession/classroomSessionConcepts.json",
            "./psychometricformat/psychometricFormatConcepts.json"
        ],
        "addressLevelTypes": [
            "locations/addressLevelType.json",
        ],
        "locations": [
            "locations/all.json",
        ],
        "programs": ["./programs.json"],
        "encounterTypes": ["./encounterTypes.json"],
        "operationalEncounterTypes": ["./operationalModules/operationalEncounterTypes.json"],
        "operationalPrograms": ["./operationalModules/operationalPrograms.json"],
        "subjectTypes": ["subjectTypes.json"],
        "operationalSubjectTypes": ["./operationalModules/operationalSubjectTypes.json"],
        "users": {
            "dev": ["./users/dev-users.json"],
        },
        "rules": [
            "./rules.js",
        ],
        "organisationSql": [
            "create_gender.sql"
        ]

    }
}, rulesConfigInfra);
