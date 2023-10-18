const leaseId = globals.urlparams.leaseId || "";
components.addGPCBSpinnerDesktop.show = true;
if (!leaseId) {
 	actions.showAlert("error", "Please Pass leaseId");
  actions.switchPage("customers");
  return;
}

const res = await actions.runQuery("fetchECAndGPCBRecordIdByLeaseIdQueryParameter");
if(res.data[0].gpcb_record_id != null) {
  actions.switchPage("view-gpcb-desktop", [["gpcbId", res.data[0].gpcb_record_id]]);
  return;
}

components.addGPCBSpinnerDesktop.show = false;