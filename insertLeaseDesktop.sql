INSERT INTO leases (expiry_date, survey_number, taluka, villege, city, area, mineral_id, created_at, updated_at, customer_id)
VALUES (
  TO_DATE('{{components.form1.data.inpExpiryDesktop.value}}', 'dd/mm/yyyy'),
  '{{components.form1.data.inpSurveyDesktop.value}}',
  '{{components.form1.data.inpTalukaDesktop.value}}',
  '{{components.form1.data.inpVillageDesktop.value}}',
  '{{components.form1.data.inpCityDesktop.value}}',
  '{{components.form1.data.inpAreaDesktop.value}}',
  (select id from minerals where name  = '{{components.form1.data.inpMineralDesktop.value}}'),
  CURRENT_TIMESTAMP AT TIME ZONE 'UTC',
  CURRENT_TIMESTAMP AT TIME ZONE 'UTC',
  '{{variables.customer_id}}'
 
);