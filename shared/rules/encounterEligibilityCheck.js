
import {EncounterEligibilityCheck} from 'rules-config/rules';

@EncounterEligibilityCheck({
    name: 'BaselineEligibility',
    uuid: '2c1df66b-ffdb-4b06-802b-51223c4bf4b7',
    encounterTypeUUID: 'a30afe96-cdbb-42d9-bf30-6cf4b07354d1',
    executionOrder: 100.0,
    metadata: {}
})
class BaselineEligibility {
    static exec({individual}) {
        // console.log(individual);
       
        const visitCount = individual.enrolments[0].encounters.filter(e => e.encounterType.uuid === 'a30afe96-cdbb-42d9-bf30-6cf4b07354d1').length;

        let visibility = true;
        if (_.isEqual(visitCount, 1))
            visibility = false;

        return visibility;
    }
}

@EncounterEligibilityCheck({
    name: 'EndlineEligibility',
    uuid: '65323062-f5be-467f-b205-8add709a6602',
    encounterTypeUUID: '36afebcf-0b68-477f-ae5c-190da5d9f1d8',
    executionOrder: 100.0,
    metadata: {}
})
class EndlineEligibility {
    static exec({individual}) {
          // console.log(individual);
       
          const visitCount = individual.enrolments[0].encounters.filter(e => e.encounterType.uuid === '36afebcf-0b68-477f-ae5c-190da5d9f1d8').length;

          let visibility = true;
          if (_.isEqual(visitCount, 1))
              visibility = false;
  
          return visibility;
    }
}

@EncounterEligibilityCheck({
    name: 'PsychometricEligibility',
    uuid: '006de399-1bd4-4155-a422-68e1a7049282',
    encounterTypeUUID: '494b6c57-e314-48fa-90f1-c5d1ccf135b8',
    executionOrder: 100.0,
    metadata: {}
})
class PsychometricEligibility {
    static exec({individual}) {
          // console.log(individual);
       
          const visitCount = individual.enrolments[0].encounters.filter(e => e.encounterType.uuid === '494b6c57-e314-48fa-90f1-c5d1ccf135b8').length;

          let visibility = true;
          if (_.isEqual(visitCount, 4))
              visibility = false;
  
          return visibility;
    }
}

export {
    BaselineEligibility,
    EndlineEligibility,
    PsychometricEligibility
};

