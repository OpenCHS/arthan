import {
    FormElementsStatusHelper,
    RuleFactory,
    FormElementStatus,
    StatusBuilderAnnotationFactory,
    WithName
} from 'rules-config/rules';
import _ from 'lodash';

const filter = RuleFactory('1a764140-f028-438d-9db4-a81c95d36f7c', 'ViewFilter');
const WithStatusBuilder = StatusBuilderAnnotationFactory('programEncounter', 'formElement');

const visitCount = (programEncounter) => {
    const enrolment = programEncounter.programEnrolment;
    const visitCount = enrolment.encounters.filter(e => e.encounterType.uuid === '494b6c57-e314-48fa-90f1-c5d1ccf135b8').length;
    console.log(visitCount);
    return visitCount;
}

@filter('3bbbbfcd-656a-4d47-a961-0b7133a01103', 'Psychometric calculations', 100.0)
class PsychometricCalculationHandler {
    static exec(programEncounter, formElementGroup, today) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new PsychometricCalculationHandler(), programEncounter, formElementGroup, today);
    }

    @WithName('Psychometric can be filled only 4 times')
   @WithStatusBuilder
    a1([programEncounter], statusBuilder) {
     statusBuilder.show().whenItem(visitCount(programEncounter) >= 4).is.truthy;
    }

    @WithName('Repair a TV/radio')
   @WithStatusBuilder
    a2([programEncounter], statusBuilder) {
     statusBuilder.show().whenItem(visitCount(programEncounter) < 4).is.truthy;
    }

    @WithName('Design a magazine cover')
   @WithStatusBuilder
    a3([programEncounter], statusBuilder) {
        statusBuilder.show().whenItem(visitCount(programEncounter) < 4 ).is.truthy;
    }

    @WithName('Do scientific experiments')
   @WithStatusBuilder
    a4([programEncounter], statusBuilder) {
        statusBuilder.show().whenItem(visitCount(programEncounter) < 4 ).is.truthy;
    }

    @WithName('Draw and Paint')
   @WithStatusBuilder
    a5([programEncounter], statusBuilder) {
       statusBuilder.show().whenItem(visitCount(programEncounter) < 4 ).is.truthy;
    }

    @WithName('Teach younger children')
   @WithStatusBuilder
    a6([programEncounter], statusBuilder) {
       statusBuilder.show().whenItem(visitCount(programEncounter) < 4 ).is.truthy;
    }

    @WithName('Talk to people and build connections with them')
   @WithStatusBuilder
    a7([programEncounter], statusBuilder) {
       statusBuilder.show().whenItem(visitCount(programEncounter) < 4 ).is.truthy;
    }
    







    result(programEncounter, formElement){
        let obs1 = programEncounter.getObservationValue('Repair a TV/radio');
        let obs2 = programEncounter.getObservationValue('Design a magazine cover');
        let obs3 = programEncounter.getObservationValue('Do scientific experiments');
        let obs4 = programEncounter.getObservationValue('Draw and Paint');
        let obs5 = programEncounter.getObservationValue('Teach younger children');
        let obs6 = programEncounter.getObservationValue('Talk to people and build connections with them');

        let obs7 = programEncounter.getObservationValue('Plan a strategy to launch a new soap in the market');
        let obs8 = programEncounter.getObservationValue('Maintain financial record of money your family earns and spends');
        let obs9 = programEncounter.getObservationValue('Research the properties of a chemical');
        let obs10 = programEncounter.getObservationValue('Make a greeting card');
        let obs11 = programEncounter.getObservationValue('Help a blind person by reading aloud a book to him/her');
        let obs12 = programEncounter.getObservationValue('Give tuitions to children');

        let obs13 = programEncounter.getObservationValue('Make notes for every subject');
        let obs14 = programEncounter.getObservationValue('Install cupboards in a house');
        let obs15 = programEncounter.getObservationValue('Look at cells through a microscope');
        let obs16 = programEncounter.getObservationValue('Write a story for a film');
        let obs17 = programEncounter.getObservationValue('Counsel a depressed child');
        let obs18 = programEncounter.getObservationValue('Calculate the loan that can be taken up on your family income');

        let obs19 = programEncounter.getObservationValue('Build a house');
        let obs20 = programEncounter.getObservationValue('Operate a bulldozer');
        let obs21 = programEncounter.getObservationValue('Plan activities for elderly people');
        let obs22 = programEncounter.getObservationValue('Be the class leader/group leader');
        let obs23 = programEncounter.getObservationValue('Calculate the cost of a family trip your family plans to take');
        let obs24 = programEncounter.getObservationValue('Analyse river water for pollution');

        let obs25 = programEncounter.getObservationValue('Do lab tests to find out about a disease');
        let obs26 = programEncounter.getObservationValue('Open up a radio to see how it works');
        let obs27 = programEncounter.getObservationValue('Write a poem');
        let obs28 = programEncounter.getObservationValue('Make diet charts for yourself and your family members');
        let obs29 = programEncounter.getObservationValue('Give a motivational speech in front of many people');
        let obs30 = programEncounter.getObservationValue('Persuade others to your view point');
 
        let collectionR = [obs1,obs14,obs19,obs20,obs26];
        let collectionA = [obs2,obs4,obs10,obs16,obs27];
        let collectionI = [obs3,obs9,obs15,obs24,obs25];
        let collectionS = [obs5,obs11,obs12,obs17,obs21];
        let collectionC = [obs8,obs13,obs18,obs23,obs28];
        let collectionE = [obs6,obs7,obs22,obs29,obs30];

        let countR =0 , countA =0, countI =0, countS =0, countC =0, countE =0;

        _.forEach(collectionR, function(value) {
            if(value === '60e6cd73-8d0c-4939-840e-955fa8fb8421')
            countR++;
          });

          _.forEach(collectionA, function(value) {
            if(value === '60e6cd73-8d0c-4939-840e-955fa8fb8421')
            countA++;
          });

          _.forEach(collectionI, function(value) {
            if(value === '60e6cd73-8d0c-4939-840e-955fa8fb8421')
            countI++;
          });

          _.forEach(collectionS, function(value) {
            if(value === '60e6cd73-8d0c-4939-840e-955fa8fb8421')
            countS++;
          });

          _.forEach(collectionC, function(value) {
            if(value === '60e6cd73-8d0c-4939-840e-955fa8fb8421')
            countC++;
          });

          _.forEach(collectionE, function(value) {
            if(value === '60e6cd73-8d0c-4939-840e-955fa8fb8421')
            countE++;
          });

        let obsCollectionOfCount = {"R":countR,
                                    "I":countI,
                                    "A":countA,
                                    "S":countS,
                                    "E":countE,
                                    "C":countC};

        let countArray = new Array(countR,countI,countA,countS,countE,countC);
        let resultCombination = '';

        const getCombinationResult = (maxkey) => {

           _.forEach(obsCollectionOfCount,function(value, key) {
            //  console.log(key, value);
             if (_.isEqual(value, maxKey)){
              resultCombination = resultCombination + key ;
             }
           });
           
           return resultCombination;
          };

        var maxKey = Math.max.apply(Math,countArray);
        // console.log('max value', maxKey);
        do{          
           getCombinationResult(maxKey);
           maxKey = maxKey-1;
        }while(resultCombination.length < 3)

        return new FormElementStatus(formElement.uuid, true,resultCombination);
    }
}

export {
    PsychometricCalculationHandler
}