SELECT g.id, g.noc_status, g.cca_status, g.udhyog_aadhar, l.survey_number, c.name, c.tel_number
FROM leases l
INNER JOIN gpcb_records g ON l.id = g.lease_id
INNER JOIN customers c ON l.customer_id = c.id where {{variables.listGPCBSearchFilter}}::text like '%{{variables.listGPCBSearchTerm}}%';