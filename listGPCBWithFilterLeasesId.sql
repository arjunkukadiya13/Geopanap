SELECT g.id, g.lease_id, g.ifp_id, g.ifp_password, g.gpcb_id, g.gpcb_password, g.noc_status, g.cca_status, g.udhyog_aadhar, l.survey_number, c.name, c.tel_number
FROM leases l
INNER JOIN gpcb_records g ON l.id = g.lease_id
INNER JOIN customers c ON l.customer_id = c.id
WHERE g.lease_id = (SELECT id FROM leases WHERE survey_number = '{{variables.listGPCBSearchTerm}}');