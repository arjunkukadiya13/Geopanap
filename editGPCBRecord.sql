update gpcb_records set ifp_id='{{variables.editGPCBIFPId}}', 
	ifp_password=pgp_sym_encrypt('{{variables.editGPCBIFPPassword}}', '%%client.GEOPANAP_ENCRYPTION_KEY%%', 'compress-algo=1, cipher-algo=aes256'),
	gpcb_id='{{variables.editGPCBGPCBId}}',
	gpcb_password=pgp_sym_encrypt('{{variables.editGPCBGPCBPassword}}', '%%client.GEOPANAP_ENCRYPTION_KEY%%', 'compress-algo=1, cipher-algo=aes256'),
	noc_status='{{variables.editGPCBNoCStatus}}',
	cca_status='{{variables.editGPCBCCAStatus}}',
	udhyog_aadhar='{{variables.editGPCBUdhyogAadhar}}',
  updated_at=current_timestamp
where id={{variables.editGPCBID}};