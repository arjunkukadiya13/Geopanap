SELECT e.id, e.lease_id, e.expiry_date, e.environmental_password, e.status, e.presentation_date, l.survey_number, c.name AS "customerName", c.tel_number
FROM leases l
INNER JOIN ec_records e ON l.id = e.lease_id
INNER JOIN customers c ON l.customer_id = c.id 
WHERE e.lease_id IN (
    SELECT id 
    FROM leases 
    WHERE l.customer_id IN (
        SELECT id 
        FROM customers 
        WHERE c.tel_number = '{{variables.listECReportsSearchTerm}}'
    )
);