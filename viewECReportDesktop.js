const leaseId = globals.urlparams.leaseId || "";
const customerId = globals.urlparams.customerId || "";

if (!leaseId || !customerId) {
  alert("Please Supply leaseId And customerId");
  return;
}

// This is toggle the spinner/container.
components.viewECReportSpinnerDesktop.show = true;

await actions.runQuery("getECRecordFromQueryParameter");