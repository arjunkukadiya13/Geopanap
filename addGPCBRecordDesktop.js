components.addGPCBbuttonDesktop.loading(true);
await actions.setVariable("addGPCBLeaseId", queries.fetchECAndGPCBRecordIdByLeaseIdQueryParameter.data[0].lease_id);

await actions.setVariable("addGPCBIFPId", components.addGPCBInputIFPIdDesktop.value);

await actions.setVariable("addGPCBIFPPassword", components.addGPCBInputIFPPasswordDesktop.value);

await actions.setVariable("addGPCBGPCBId", components.addGPCBInputGPCBUserIdDesktop.value);

await actions.setVariable("addGPCBGPCBPassword", components.addGPCBInputGPCBPasswordDesktop.value);

await actions.setVariable("addGPCBNoCStatus", components.addGPCBInputNoCStatusDesktop.value);

await actions.setVariable("addGPCBCCAStatus", components.addGPCBInputCCAStatusDesktop.value);

await actions.setVariable("addGPCBUdhyogAadhar", components.addGPCBInputUdhyogAadharDesktop.value);

try {
	const res = await actions.runQuery("insertGPCBRecord");
  // Audit log
  await actions.setVariable("AUDIT_LOG_SUBJECT", globals.currentUser.email);
  await actions.setVariable("AUDIT_LOG_ACTION", "CREATED");
  await actions.setVariable("AUDIT_LOG_RESOURCE", "GPCBREPORT");
  await actions.setVariable("AUDIT_LOG_OBJECT", queries.fetchECAndGPCBRecordIdByLeaseIdQueryParameter.data[0].LeaseName);
  await actions.runQuery("insertAuditLog");
  actions.showAlert("success", "GPCB Record Created Successfully");
  actions.switchPage("view-gpcb-desktop", [["gpcbId", res.data[0].id]]);
} catch(err) {
 	actions.showAlert("error", err.toString()); 
} finally {
	components.addGPCBbuttonDesktop.loading(false);
}