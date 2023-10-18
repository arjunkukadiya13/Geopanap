components.updateECReportButtonDesktop.loading(true);
await actions.setVariable("updateECReportId", globals.urlparams.ecId);

await actions.setVariable("updateECReportExpiryDate", components.editECReportInputExpiryDateDesktop.value);

await actions.setVariable("updateECReportEnvironmentalPassword", components.editECReportInputEnvironmentalPasswordDesktop.value);

await actions.setVariable("updateECReportStatus", components.editECReportInputStatusDesktop.value);

await actions.setVariable("updateECReportPresentationDate", components.editECReportInputPresentationDateDesktop.value);

try {
	await actions.runQuery("updateECRecord");
  // Audit log
  await actions.setVariable("AUDIT_LOG_SUBJECT", globals.currentUser.email);
  await actions.setVariable("AUDIT_LOG_ACTION", "UPDATED");
  await actions.setVariable("AUDIT_LOG_RESOURCE", "ECREPORT");
  await actions.setVariable("AUDIT_LOG_OBJECT", queries.fetchECAndGPCBRecordIdByLeaseIdQueryParameter.data[0].LeaseName);
  await actions.runQuery("insertAuditLog");
	await actions.showAlert("success", "ECRecord Updated Successfully");
  await actions.switchPage('view-ec-desktop',[['ecId',queries.fetchECAndGPCBRecordIdByLeaseIdQueryParameter.data[0].ec_record_id]]);
} catch(err) {
 	actions.showAlert("error", err.toString()); 
} finally {
	components.updateECReportButtonDesktop.loading(false);
}