update leases set name = '{{variables.editLeasesLeaseName}}',type = '{{variables.editLeasesType}}', expiry_date = TO_DATE('{{variables.editLeasesExpiryDate}}' ,'YYYY-MM-DD'), villege = '{{variables.editLeasesVillege}}', survey_number = '{{variables.editLeasesSurveyNumber}}', city = '{{variables.editLeasesCity}}', taluka = '{{variables.editLeasesTaluka}}', area = '{{variables.editLeasesArea}}' , mineral_id = {{variables.editLeasesMinerals}},updated_at = CURRENT_TIMESTAMP  where id = {{variables.editLeasesId}} ;