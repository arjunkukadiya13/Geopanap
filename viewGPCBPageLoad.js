const gpcbId = globals.urlparams.gpcbId || "";
components.viewGPCBSpinnerDesktop.show = true;

if (!gpcbId) {
 	actions.showAlert("error", "Please Supply gpcbId"); 
  actions.switchPage("customers");
  return;
}

const gpcbRecord = await actions.runQuery("getGPCBRecordFromQueryParameters");
if (gpcbRecord.data.length <= 0) {
  	actions.showAlert("error", "No GPCB Record Found");
    actions.switchPage("customers");
  	return;
}

components.viewGPCBSpinnerDesktop.show = false;

try {
  await Promise.all([actions.runQuery("listGPCBNotesWithQueryParameters"), actions.runQuery("listGPCBUploadedDocumentsFromQueryParameters")]);
} catch(err) {
 	actions.showAlert("error", err.toString()); 
}