select CONCAT(subject, ' ', lower(action), ' ', lower(resource), ' ', lower(object)) as "log", to_char(created_at, 'YYYY-MM-DD') as "created at" from audit_logs order by created_at desc ;