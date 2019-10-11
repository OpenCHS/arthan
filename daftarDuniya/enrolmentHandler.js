import {
    StatusBuilderAnnotationFactory, 
    RuleFactory,  
    FormElementsStatusHelper
} from 'rules-config/rules';

const filter = RuleFactory('e650d3f4-bae2-4bf7-ab7a-e2fcc7049acb', 'ViewFilter');
const WithStatusBuilder = StatusBuilderAnnotationFactory('programEnrolment', 'formElement');

@filter('48662ca0-467f-42a0-b3d3-91cdd89f9284', 'EnrolmentFormHandler', 100.0)
class EnrolmentFormHandler {
    static exec(programEnrolment, formElementGroup, today) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new EnrolmentFormHandler(), programEnrolment, formElementGroup, today);
    }

    @WithStatusBuilder
    dummy([], statusBuilder) {
        statusBuilder.show().whenItem(false).is.truthy;
    }

}




module.exports = {EnrolmentFormHandler};