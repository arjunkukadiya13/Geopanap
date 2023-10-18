INSERT INTO leases (expiry_date, survey_number, taluka, villege, city, area, mineral_id, created_at, updated_at, customer_id)
VALUES (
  TO_DATE('{{components.form1.data.addLeasesExpiryDateInputDesktop.value}}', 'dd/mm/yyyy'),
  '{{components.form1.data.addLeasesSurveyNumberInputDesktop.value}}',
  '{{components.form1.data.addLeasesTalukaInputDesktop.value}}',
  '{{components.form1.data.addLeasesVillageInputDesktop.value}}',
  '{{components.form1.data.addLeasesCityInputDesktop.value}}',
  '{{components.form1.data.addLeasesAreaInputDesktop.value}}',
  (select id from minerals where name  = '{{components.form1.data.addLeasesMineralsInputDesktop.value}}'),
  CURRENT_TIMESTAMP AT TIME ZONE 'UTC',
  CURRENT_TIMESTAMP AT TIME ZONE 'UTC',
  '{{variables.customer_id}}'
 
);