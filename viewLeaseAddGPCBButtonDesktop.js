if (variables.viewLeaseHasGPCBRecordFound) {
    const gpcbId = variables.viewLeaseGPCBRecordId;
 await actions.switchPage("view-gpcb-desktop", [["gpcbId", gpcbId]]);
} else {
    await actions.switchPage("add-gpcb-desktop", [["leaseId", globals.urlparams.leaseId]]);
}