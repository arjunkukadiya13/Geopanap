const leasesId = globals.urlparams.leaseId;
components.leasesDetailsContainerDesktop.show = false;
components.leasesDetailsSpinnerDesktop.show = true;
components.viewLeaseTableUploadedDocumentsDesktop.loading = true;

if (!leasesId ) {
  actions.showAlert("error", "Please supply lease id");
  await actions.switchPage("customers")
  return;
}

await actions.setVariable("viewLeasesId", leasesId);

try {
await actions.runQuery("viewLeasesById");

components.leasesDetailsContainerDesktop.show = true;
components.leasesDetailsSpinnerDesktop.show = false;

await Promise.all([actions.runQuery("selectAllLeaseNotesWithLeaseIdQueryParameters"), actions.runQuery("fetchOtherDocumentsFromQueryParamLeaseId")]);

const res =  await actions.runQuery("fetchECAndGPCBRecordIdByLeaseIdQueryParameter");
const ec_record_id = res.data[0].ec_record_id;
const gpcb_record_id = res.data[0].gpcb_record_id;
  
if(ec_record_id) {
	await actions.setVariable("viewLeaseHasECRecordFound", true); 
 	await actions.setVariable("viewLeaseECRecordId", ec_record_id);
  components.viewLeaseViewECButtonDesktop.setText("View EC");
} else {
	await actions.setVariable("viewLeaseHasECRecordFound", false); 
  components.viewLeaseViewECButtonDesktop.setText("Add EC");
}
  
if(gpcb_record_id) {
	await actions.setVariable("viewLeaseHasGPCBRecordFound", true); 
 	await actions.setVariable("viewLeaseGPCBRecordId", gpcb_record_id);
  components.viewLeaseViewGPCBButtonDesktop.setText("View GPCB");
} else {
	await actions.setVariable("viewLeaseHasGPCBRecordFound", false); 
  components.viewLeaseViewGPCBButtonDesktop.setText("Add GPCB");
}
 
components.viewLeaseTableUploadedDocumentsDesktop.loading = false;
} catch(err) {
 	actions.showAlert("error", err.toString()); 
}