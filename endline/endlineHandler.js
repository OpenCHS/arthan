import {
    FormElementsStatusHelper,
    RuleFactory,
    StatusBuilderAnnotationFactory,
    WithName
} from 'rules-config/rules';

const filter = RuleFactory('c199add4-5769-4282-be33-4efa292cc080', 'ViewFilter');
const WithStatusBuilder = StatusBuilderAnnotationFactory('programEncounter', 'formElement');

const visitCount = (programEncounter) => {
    const enrolment = programEncounter.programEnrolment;
    const visitCount = enrolment.encounters.filter(e => e.encounterType.uuid === '36afebcf-0b68-477f-ae5c-190da5d9f1d8').length;
    return visitCount;
}

@filter('9714ef86-ec9f-4d9b-af60-27bf5942e586', 'EndlineHandler', 100.0)
class EndlineHandler {
    static exec(programEncounter, formElementGroup, today) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new EndlineHandler(), programEncounter, formElementGroup, today);
    }

   @WithName('Endline can be filled only once')
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
    EndlineHandler
}