select
  l.name as "LeaseName",
	er.id as "id",
	c.id as "customer_id",
	er.lease_id as "lease_id",
	TO_CHAR(er.expiry_date,'YYYY-MM-DD') as "expiry_date",
	pgp_sym_decrypt(environmental_password,
	'%%client.GEOPANAP_ENCRYPTION_KEY%%',
	'cipher-algo=aes256') as "environmental_password",
	er.status as "status",
	TO_CHAR(er.presentation_date,'YYYY-MM-DD') as presentation_date,
	er.created_at as "created_at",
	er.updated_at as "updated_at"
from
	ec_records er inner join leases l on er.lease_id = l.id inner join customers c on l.customer_id = c.id  
where
	er.id = {{globals.urlparams.ecId}};