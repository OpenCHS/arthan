select create_db_user('arthan', 'password');

INSERT into organisation(name, db_user, uuid, parent_organisation_id)
values ('Arthan', 'arthan', 'b138b4c3-1243-49d4-90e3-1aa38e67ac1d', null)
ON CONFLICT (uuid) DO NOTHING;
