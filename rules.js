const _ = require('lodash');

module.exports = _.merge({},
    require('./registration/rules/registrationFormHandler'),
    require('./psychometricformat/psychometricCalculations.js'),
    require('./daftarDuniya/enrolmentHandler.js'),
    require('./shared/rules/encounterEligibilityCheck.js'),
);