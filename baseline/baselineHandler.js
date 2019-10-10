import {
    FormElementsStatusHelper,
    RuleFactory,
    StatusBuilderAnnotationFactory,
    WithName
} from 'rules-config/rules';

const filter = RuleFactory('c7ae45cb-16f2-4950-8f5d-4de8fb045262', 'ViewFilter');
const WithStatusBuilder = StatusBuilderAnnotationFactory('programEncounter', 'formElement');

const visitCount = (programEncounter) => {
    const enrolment = programEncounter.programEnrolment;
    const visitCount = enrolment.encounters.filter(e => e.encounterType.uuid === 'a30afe96-cdbb-42d9-bf30-6cf4b07354d1').length;
    return visitCount;
}

@filter('cbea568f-4077-4fd2-a95d-8b8450904e8b', 'BaselineHandler', 100.0)
class BaselineHandler {
    static exec(programEncounter, formElementGroup, today) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new BaselineHandler(), programEncounter, formElementGroup, today);
    }

   @WithName('Baseline can be filled only once')
   @WithStatusBuilder
    a1([programEncounter], statusBuilder) {
     statusBuilder.show().whenItem(visitCount(programEncounter) > 0).is.truthy;
    }

    @WithName('Have you thought of what you want to be when you grow up?')
   @WithStatusBuilder
    a2([programEncounter], statusBuilder) {
     statusBuilder.show().whenItem(visitCount(programEncounter) <1 ).is.truthy;
    }

    @WithName('Do you know what your interests are?')
   @WithStatusBuilder
    a3([programEncounter], statusBuilder) {
        statusBuilder.show().whenItem(visitCount(programEncounter) <1 ).is.truthy;
    }

    @WithName('Can you think of 3 strengths you have?')
   @WithStatusBuilder
    a4([programEncounter], statusBuilder) {
        statusBuilder.show().whenItem(visitCount(programEncounter) <1 ).is.truthy;
    }

    @WithName('Can you think of 3 weaknesses you have?')
   @WithStatusBuilder
    a5([programEncounter], statusBuilder) {
       statusBuilder.show().whenItem(visitCount(programEncounter) <1 ).is.truthy;
    }

}

export {
    BaselineHandler
}