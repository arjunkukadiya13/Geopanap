update ec_notes set is_current = false where ec_id={{globals.urlparams.ecId}};

insert into ec_notes (ec_id, note, is_current, created_at) values({{globals.urlparams.ecId}}, '{{variables.newECNoteText}}', true, current_timestamp);