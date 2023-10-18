INSERT INTO lease_notes(lease_id,note,is_current,created_at)
	VALUES({{variables.viewLeasesId}},'{{variables.leaseNoteText}}',true,CURRENT_TIMESTAMP AT TIME ZONE 'UTC');