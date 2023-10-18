SELECT e.id, e.expiry_date, e.environmental_password, e.status, e.presentation_date, l.survey_number, c.name AS "customerName", c.tel_number
FROM leases l
INNER JOIN ec_records e ON l.id = e.lease_id
INNER JOIN customers c ON l.customer_id = c.id;