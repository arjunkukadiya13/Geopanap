select note, is_current, created_at from gpcb_notes en where gpcb_id = {{globals.urlparams.gpcbId}} order by created_at desc;