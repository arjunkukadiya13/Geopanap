select note,id  FROM lease_notes WHERE lease_id  = {{variables.viewLeasesId}} ORDER BY created_at DESC;