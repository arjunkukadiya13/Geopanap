components.editECReportSpinnerDesktop.show = true;

const ecId = globals.urlparams.ecId || "";

if(!ecId) {
 	alert("Please Supply ecId");
  actions.switchPage("customers");
  return;
}

const ecRecord = await actions.runQuery("getECRecordFromQueryParameter");
if(ecRecord.data.length <= 0) {
	alert("Invalid leaseId");
	actions.switchPage("customers");
  return;
}

components.editECReportSpinnerDesktop.show = false;