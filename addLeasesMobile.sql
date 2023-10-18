INSERT INTO leases (expiry_date, survey_number, taluka, villege, city, area, mineral_id, created_at, updated_at, customer_id)
VALUES (
  TO_DATE('{{components.addLeasesFormMobile.data.addLeasesInputExpiryDateMobile.value}}', 'dd/mm/yyyy'),
  '{{components.addLeasesFormMobile.data.addLeasesInputSurveyNumberMobile.value}}',
  '{{components.addLeasesFormMobile.data.addLeasesInputTalukaMobile.value}}',
  '{{components.addLeasesFormMobile.data.addLeasesInputVillageMobile.value}}',
  '{{components.addLeasesFormMobile.data.addLeasesInputCityMobile.value}}',
  '{{components.addLeasesFormMobile.data.addLeasesInputAreaMobile.value}}',
  (select id from minerals where name  = '{{components.addLeasesFormMobile.data.addLeasesInputMineralsMobile.value}}'),
  CURRENT_TIMESTAMP AT TIME ZONE 'UTC',
  CURRENT_TIMESTAMP AT TIME ZONE 'UTC',
  '{{variables.customer_id}}'
 
);