import {
    FormElementsStatusHelper,
    RuleFactory,
    StatusBuilderAnnotationFactory,
    FormElementStatusBuilder
} from 'rules-config/rules';

const filter = RuleFactory('c7ae45cb-16f2-4950-8f5d-4de8fb045262', 'ViewFilter');
const WithStatusBuilder = StatusBuilderAnnotationFactory('programEncounter', 'formElement');

@filter('cbea568f-4077-4fd2-a95d-8b8450904e8b', 'BaselineHandler', 100.0)
class BaselineHandler {
    static exec(programEncounter, formElementGroup, today) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new BaselineHandler(), programEncounter, formElementGroup, today);
    }

   @WithStatusBuilder
    error([programEncounter], statusBuilder) {
    const enrolment = programEncounter.programEnrolment;
        // console.log(enrolment.encounters.filter(e => e.encounterType.uuid === 'a30afe96-cdbb-42d9-bf30-6cf4b07354d1').length);
        if(enrolment.encounters.filter(e => e.encounterType.uuid === 'a30afe96-cdbb-42d9-bf30-6cf4b07354d1').length > 0)
	    {
         statusBuilder.validationError("Form can't be filled more than once");
        }
        return statusBuilder.build();
    }

}

export {
    BaselineHandler
}