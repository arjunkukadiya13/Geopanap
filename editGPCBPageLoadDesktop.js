const gpcbId = globals.urlparams.gpcbId || "";
components.editGPCBSpinnerDesktop.show = true;

if (!gpcbId) {
 	alert("Please Supply gpcbId"); 
  actions.switchPage("customers");
  return;
}

const res = await actions.runQuery("getGPCBRecordFromQueryParameters");
if (res.data.length <= 0) { 
  actions.switchPage("customers");
  return;
}

components.editGPCBSpinnerDesktop.show = false;