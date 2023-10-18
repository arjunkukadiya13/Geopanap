WITH inserted_row AS (
  INSERT INTO gmail_accounts (email, password, created_at, updated_at)
  VALUES (
    '{{components.form1.data.addCustomerEmailInputDesktop.value}}',
    pgp_sym_encrypt('{{components.form1.data.addCustomerPasswordInputDesktop.value}}', '%%client.GEOPANAP_ENCRYPTION_KEY%%', 'compress-algo=1, cipher-algo=aes256'),
    CURRENT_TIMESTAMP AT TIME ZONE 'UTC',
    CURRENT_TIMESTAMP AT TIME ZONE 'UTC'
  )
  RETURNING id
)
INSERT INTO customers (name, tel_number, gmail_account_id, created_at, updated_at)
SELECT
  '{{components.form1.data.addCustomerNameInputDesktop.value}}',
  '{{components.form1.data.addCustomerTelephoneNumberInputDesktop.value}}',
  inserted_row.id,
  CURRENT_TIMESTAMP AT TIME ZONE 'UTC',
  CURRENT_TIMESTAMP AT TIME ZONE 'UTC'
FROM inserted_row;