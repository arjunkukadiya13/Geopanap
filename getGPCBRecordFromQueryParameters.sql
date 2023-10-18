select
	gr.id as "id",
  l.name as "LeaseName",
	gr.lease_id as "lease_id",
	c.id as "customer_id",
	gr.ifp_id as "ifp_id",
	pgp_sym_decrypt(ifp_password, '%%client.GEOPANAP_ENCRYPTION_KEY%%', 'cipher-algo=aes256') as "ifp_password",
	gr.gpcb_id as "gpcb_id",
	pgp_sym_decrypt(gpcb_password, '%%client.GEOPANAP_ENCRYPTION_KEY%%', 'cipher-algo=aes256') as "gpcb_password",
	gr.noc_status as "noc_status",
	gr.cca_status as "cca_status",
	gr.udhyog_aadhar as "udhyog_aadhar",
	gr.created_at as "created_at",
	gr.updated_at as "updated_at"	
from
	gpcb_records gr
inner join leases l on
	gr.lease_id = l.id
inner join customers c on
	l.customer_id = c.id 
where gr.id = {{globals.urlparams.gpcbId}};
