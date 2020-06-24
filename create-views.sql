drop view arthan_indicators_view;
create view arthan_indicators_view as (
    select concat(i.first_name, ' ', i.last_name)                                           as "Full Name",
           classroom.title                                                                  as "Class Name",
           school.title                                                                     as "School Name",
           g.name                                                                           as "Gender",
           o.name                                                                           as "Partner",
           'Baseline'                                                                       as "Encounter Type",
           single_select_coded(enc.observations ->> 'e7e49e0e-6fcb-4156-a3d6-b911f4ee4c25') as "Interest",
           single_select_coded(enc.observations ->> '10252114-030d-44c0-a5e8-96b8fb03db66') as "Strenghts",
           single_select_coded(enc.observations ->> '00f8c0f0-c3e6-4ae1-bc7d-bad6f284ba01') as "Weakness",
           single_select_coded(
                       enc.observations ->> '5e27aea0-b651-4dfd-b974-f21bc2111537')             as "Like Working with others",
           single_select_coded(enc.observations ->> '17ad944f-81b8-48e5-bb48-6729ee60d2cb') as "Group Activity",
           single_select_coded(
                       enc.observations ->> 'a97bee1a-7674-4bdb-98d7-d003ef35bb0b')             as "People Like Working with me ",
           single_select_coded(
                       enc.observations ->> '731a4f20-194a-41ad-bd77-5c5e86c23b33')             as "Like thinking differently from others",
           single_select_coded(
                       enc.observations ->> '1e70dc5c-801c-420b-adbf-85fe9a347379')             as "Like thinking of new ideas",
           single_select_coded(
                       enc.observations ->> '364cb83e-51f2-4221-bee5-57001e0f5dbc')             as "I am a very curious person",
           single_select_coded(
                       enc.observations ->> '0b85fa42-192a-42ef-94cf-461d5e954bc8')             as "People think I am a good listener",
           single_select_coded(
                       enc.observations ->> '8067b97d-e659-4d5e-a83f-1edd8b740e84')             as "I like to think logically and rationally",
           single_select_coded(
                       enc.observations ->> '91f4940e-f400-4a0c-983e-44f6963d4eb5')             as "I like to debate and discuss using structured arguments and thought processes",
           single_select_coded(
                       enc.observations ->> '9f422aaf-b8b0-4c3b-9aaa-c40dd2a0b63c')             as "I ask a lot of questions",
           single_select_coded(
                       enc.observations ->> '7f3a4446-fc62-4855-a261-7001b23395e5')             as "On a scale of 1-5, rate yourself on your Communication Skills",
           single_select_coded(
                       enc.observations ->> 'a9455186-a846-4395-a63e-681505621475')             as "On a scale of 1-5, rate yourself on collaboration",
           single_select_coded(
                       enc.observations ->> 'aebcf58a-0f89-4923-9493-bf177ad95482')             as "On a scale of 1-5, rate yourself on creativity",
           single_select_coded(
                       enc.observations ->> 'dfbff935-5bf6-4a0d-b15f-6b78103f200d')             as "On a scale of 1-5, rate yourself on critical thinking",
           single_select_coded(
                       enc.observations ->> '3d4a3023-e730-40b5-b430-b897424c2a57')             as "Can you think of 3 hard skills you have gained in school that will help you in your future career",
           (enc.observations ->> '6ac040fb-4a47-4c2f-bd9d-43ffc609a617')::numeric           as "How many soft skills do you think you have",
           single_select_coded(
                       enc.observations ->> 'd93d5005-764d-449e-a15f-ed3904bfad25')             as "Do you think these skills will help you in your work place",
           single_select_coded(
                       enc.observations ->> 'b9771971-d9fc-4c00-8cb9-fe55c6659770')             as "Do you understand what planning is",
           single_select_coded(
                       enc.observations ->> '26525919-3986-4377-b7d3-614efc2e9ce4')             as "On a scale of 1- 3, how important do you think planning is",
           single_select_coded(
                       enc.observations ->> 'a6828fe0-818d-46b4-a47e-9bdcb44b5105')             as "You have an event in 3 months. What do you do",
           single_select_coded(
                       enc.observations ->> '885ab665-43b5-4fc7-b82f-7bf598b4797a')             as "How much have you thought about planning your career",
           single_select_coded(
                       enc.observations ->> 'b239815e-a37f-4e57-bb28-a3dd27d6c098')             as "What do you plan to do after high school",
           single_select_coded(
                       enc.observations ->> '615fd4c4-3007-4a01-a84a-f56001398a34')             as "Do you know what you want to study after you finish school",
           single_select_coded(
                       enc.observations ->> 'be04d63d-a974-4423-be37-8527c1043ef0')             as "Are you stuck anywhere in the process? If yes, where",
           single_select_coded(
                       enc.observations ->> '35f363e1-ed88-4df4-9f65-5caaf1417982')             as "Do you think you will face challenges in reaching your dream career",
           single_select_coded(
                       enc.observations ->> '4b221305-b267-4525-bd49-23cc0326a273')             as "Have you worked on your Individual Development Plan",
           single_select_coded(
                       enc.observations ->> '27e374d7-2943-48de-95ca-9f052ebcbf18')             as "Do you have your top 2 career options in mind",
           single_select_coded(
                       enc.observations ->> '4103e656-1f40-4072-a726-5244c02e688f')             as "Do you have a plan for the next 2 years"
    from program_encounter enc
             join encounter_type et on enc.encounter_type_id = et.id
             join program_enrolment pe on enc.program_enrolment_id = pe.id
             join individual i on pe.individual_id = i.id
             join organisation o on i.organisation_id = o.id
             left join address_level classroom on i.address_id = classroom.id
             left join address_level school on school.id = classroom.parent_id
             left join gender g on i.gender_id = g.id
    where et.name = 'Baseline'
      and not enc.is_voided

    union

    select concat(i.first_name, ' ', i.last_name)                                           as "Full Name",
           classroom.title                                                                  as "Class Name",
           school.title                                                                     as "School Name",
           g.name                                                                           as "Gender",
           o.name                                                                           as "Partner",
           'Endline'                                                                        as "Encounter Type",
           single_select_coded(enc.observations ->> 'e7e49e0e-6fcb-4156-a3d6-b911f4ee4c25') as "Interest",
           single_select_coded(enc.observations ->> '10252114-030d-44c0-a5e8-96b8fb03db66') as "Strenghts",
           single_select_coded(enc.observations ->> '00f8c0f0-c3e6-4ae1-bc7d-bad6f284ba01') as "Weakness",
           single_select_coded(
                       enc.observations ->> '5e27aea0-b651-4dfd-b974-f21bc2111537')             as "Like Working with others",
           single_select_coded(enc.observations ->> '17ad944f-81b8-48e5-bb48-6729ee60d2cb') as "Group Activity",
           single_select_coded(
                       enc.observations ->> 'a97bee1a-7674-4bdb-98d7-d003ef35bb0b')             as "People Like Working with me ",
           single_select_coded(
                       enc.observations ->> '731a4f20-194a-41ad-bd77-5c5e86c23b33')             as "Like thinking differently from others",
           single_select_coded(
                       enc.observations ->> '1e70dc5c-801c-420b-adbf-85fe9a347379')             as "Like thinking of new ideas",
           single_select_coded(
                       enc.observations ->> '364cb83e-51f2-4221-bee5-57001e0f5dbc')             as "I am a very curious person",
           single_select_coded(
                       enc.observations ->> '0b85fa42-192a-42ef-94cf-461d5e954bc8')             as "People think I am a good listener",
           single_select_coded(
                       enc.observations ->> '8067b97d-e659-4d5e-a83f-1edd8b740e84')             as "I like to think logically and rationally",
           single_select_coded(
                       enc.observations ->> '91f4940e-f400-4a0c-983e-44f6963d4eb5')             as "I like to debate and discuss using structured arguments and thought processes",
           single_select_coded(
                       enc.observations ->> '9f422aaf-b8b0-4c3b-9aaa-c40dd2a0b63c')             as "I ask a lot of questions",
           single_select_coded(
                       enc.observations ->> '7f3a4446-fc62-4855-a261-7001b23395e5')             as "On a scale of 1-5, rate yourself on your Communication Skills",
           single_select_coded(
                       enc.observations ->> 'a9455186-a846-4395-a63e-681505621475')             as "On a scale of 1-5, rate yourself on collaboration",
           single_select_coded(
                       enc.observations ->> 'aebcf58a-0f89-4923-9493-bf177ad95482')             as "On a scale of 1-5, rate yourself on creativity",
           single_select_coded(
                       enc.observations ->> 'dfbff935-5bf6-4a0d-b15f-6b78103f200d')             as "On a scale of 1-5, rate yourself on critical thinking",
           single_select_coded(
                       enc.observations ->> '3d4a3023-e730-40b5-b430-b897424c2a57')             as "Can you think of 3 hard skills you have gained in school that will help you in your future career",
           (enc.observations ->> '6ac040fb-4a47-4c2f-bd9d-43ffc609a617')::NUMERIC           as "How many soft skills do you think you have",
           single_select_coded(
                       enc.observations ->> 'd93d5005-764d-449e-a15f-ed3904bfad25')             as "Do you think these skills will help you in your work place",
           single_select_coded(
                       enc.observations ->> 'b9771971-d9fc-4c00-8cb9-fe55c6659770')             as "Do you understand what planning is",
           single_select_coded(
                       enc.observations ->> '26525919-3986-4377-b7d3-614efc2e9ce4')             as "On a scale of 1- 3, how important do you think planning is",
           single_select_coded(
                       enc.observations ->> 'a6828fe0-818d-46b4-a47e-9bdcb44b5105')             as "You have an event in 3 months. What do you do",
           single_select_coded(
                       enc.observations ->> '885ab665-43b5-4fc7-b82f-7bf598b4797a')             as "How much have you thought about planning your career",
           single_select_coded(
                       enc.observations ->> 'b239815e-a37f-4e57-bb28-a3dd27d6c098')             as "What do you plan to do after high school",
           single_select_coded(
                       enc.observations ->> '615fd4c4-3007-4a01-a84a-f56001398a34')             as "Do you know what you want to study after you finish school",
           single_select_coded(
                       enc.observations ->> 'be04d63d-a974-4423-be37-8527c1043ef0')             as "Are you stuck anywhere in the process? If yes, where",
           single_select_coded(
                       enc.observations ->> '35f363e1-ed88-4df4-9f65-5caaf1417982')             as "Do you think you will face challenges in reaching your dream career",
           single_select_coded(
                       enc.observations ->> '4b221305-b267-4525-bd49-23cc0326a273')             as "Have you worked on your Individual Development Plan",
           single_select_coded(
                       enc.observations ->> '27e374d7-2943-48de-95ca-9f052ebcbf18')             as "Do you have your top 2 career options in mind",
           single_select_coded(
                       enc.observations ->> '4103e656-1f40-4072-a726-5244c02e688f')             as "Do you have a plan for the next 2 years"
    from program_encounter enc
             join encounter_type et on enc.encounter_type_id = et.id
             join program_enrolment pe on enc.program_enrolment_id = pe.id
             join individual i on pe.individual_id = i.id
             join organisation o on i.organisation_id = o.id
             left join address_level classroom on i.address_id = classroom.id
             left join address_level school on school.id = classroom.parent_id
             left join gender g on i.gender_id = g.id
    where et.name = 'Endline'
      and not enc.is_voided
);
