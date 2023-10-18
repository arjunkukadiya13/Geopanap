SELECT l.id,l.name as "LeaseName",l.type, l.mineral_id , l.customer_id, l.survey_number, l.area, l.villege, l.taluka, l.city, l.expiry_date, c.name as"customerName", c.tel_number, m.name as"MineralName"
FROM leases l
INNER JOIN customers c ON l.customer_id = c.id
INNER JOIN minerals m ON l.mineral_id = m.id
WHERE {{variables.listLeasesSearchFilter}}::text like '%{{variables.listLeasesSearchTerm}}%';