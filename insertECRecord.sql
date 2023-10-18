 INSERT INTO ec_records (lease_id, expiry_date, environmental_password, status, presentation_date, created_at, updated_at)
  VALUES (
    {{variables.addECReportLeaseId}},
    TO_DATE('{{variables.addECReportExpiryDate}}', 'YYYY-MM-DD'),
    pgp_sym_encrypt('{{variables.addECReportEnvironmentalPassword}}', '%%client.GEOPANAP_ENCRYPTION_KEY%%', 'compress-algo=1, cipher-algo=aes256'),
    '{{variables.addECReportStatus}}',
    TO_DATE('{{variables.addECReportPresentationDate}}', 'YYYY-MM-DD'),
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  )
  RETURNING id;