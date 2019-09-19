import {FormElementsStatusHelper, RuleFactory} from 'rules-config/rules';

const RegistrationViewFilter = RuleFactory("6c4331e6-6600-4279-9376-279216229916", "ViewFilter");

@RegistrationViewFilter("63510db8-4f2e-44dd-bf31-c76b923a2208", "Registration View Filter", 100.0, {})
class RegistrationHandler {
    static exec(individual, formElementGroup) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new RegistrationHandler(), individual, formElementGroup);
    }
}

export {
    RegistrationHandler
}
