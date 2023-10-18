select
	l.id,
  l.name,
  l.type,
	survey_number,
	customer_id,
	area,
	villege,
	taluka,
	city,
	expiry_date,
	l.created_at,
	updated_at,
	m.name as "mineral_name"
from
	leases l inner join minerals m on l.mineral_id = m.id where l.customer_id = {{variables.listCustomersLeaseCustomerId}};