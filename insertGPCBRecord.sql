insert into gpcb_records (lease_id, ifp_id, ifp_password, gpcb_id, gpcb_password, noc_status, cca_status, udhyog_aadhar, created_at, updated_at) values(
	{{variables.addGPCBLeaseId}},
	'{{variables.addGPCBIFPId}}',
	pgp_sym_encrypt('{{variables.addGPCBIFPPassword}}', '%%client.GEOPANAP_ENCRYPTION_KEY%%', 'compress-algo=1, cipher-algo=aes256'),
	'{{variables.addGPCBGPCBId}}',
	pgp_sym_encrypt('{{variables.addGPCBGPCBPassword}}', '%%client.GEOPANAP_ENCRYPTION_KEY%%', 'compress-algo=1, cipher-algo=aes256'),
	'{{variables.addGPCBNoCStatus}}',
	'{{variables.addGPCBCCAStatus}}',
	'{{variables.addGPCBUdhyogAadhar}}',
	current_timestamp,
	current_timestamp
)
RETURNING id;