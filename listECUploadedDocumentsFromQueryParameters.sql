select id,ec_id, path, round(size::int/1024.0, 1) as "size", mime_type, created_at from ec_documents where ec_id = {{globals.urlparams.ecId}};