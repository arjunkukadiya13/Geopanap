WITH inserted_row AS (
  INSERT INTO gmail_accounts (email, password, created_at, updated_at)
  VALUES (
    '{{components.addCustomerFormMobile.data.addCustomerInputEmailMobile.value}}',
    pgp_sym_encrypt('{{components.addCustomerFormMobile.data.addCustomerInputPasswordMobile.value}}', '%%client.GEOPANAP_ENCRYPTION_KEY%%', 'compress-algo=1, cipher-algo=aes256'),
    CURRENT_TIMESTAMP AT TIME ZONE 'UTC',
    CURRENT_TIMESTAMP AT TIME ZONE 'UTC'
  )
  RETURNING id
)
INSERT INTO customers (name, tel_number, gmail_account_id, created_at, updated_at)
SELECT
  '{{components.addCustomerFormMobile.data.addCustomerInputNameMobile.value}}',
  '{{components.addCustomerFormMobile.data.addCustomerInputTelephoneNumberMobile.value}}',
  inserted_row.id,
  CURRENT_TIMESTAMP AT TIME ZONE 'UTC',
  CURRENT_TIMESTAMP AT TIME ZONE 'UTC'
FROM inserted_row;