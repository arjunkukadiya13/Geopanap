UPDATE minerals SET deleted_at = CURRENT_TIMESTAMP WHERE id = {{variables.deleteMineraId}};