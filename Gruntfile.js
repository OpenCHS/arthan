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
            "./forms/Student registration.json",
            "./forms/Student Identification.json",
            "./forms/Enrolment.json",
            "./forms/Baseline.json",
            "./forms/Classroom session.json",
            "./forms/Psychometric Format Form.json",
            "./forms/Endline.json",
            "./testEncounter.json"
        ],
        "formMappings": ["./formMappings.json"],
        "formDeletions": [],
        "formAdditions": [],
        "catchments": ["./catchments.json"],
        "checklistDetails": [],
        "concepts": [
            "./concepts.json"
            
        ],
        "addressLevelTypes": [
            "./addressLevelTypes.json",
        ],
        "locations": [
            "./locations.json",
        ],
        "programs": ["./programs.json"],
        "encounterTypes": ["./encounterTypes.json"],
        "operationalEncounterTypes": ["./operationalEncounterTypes.json"],
        "operationalPrograms": ["./operationalPrograms.json"],
        "subjectTypes": ["subjectTypes.json"],
        "operationalSubjectTypes": ["./operationalSubjectTypes.json"],
        "users": {
            "dev": ["./users/dev-users.json"],
        },
        "rules": [
            "./rules.js",
        ],
        "organisationSql": [
            "create_gender.sql"
        ],
        "organisationConfig": ["organisationConfig.json"],
        "translations": [
            "translations/en.json",
            "translations/hi_IN.json",
        ]
    }
}, rulesConfigInfra);
