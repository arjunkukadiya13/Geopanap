if (variables.viewLeaseHasECRecordFound) {
    const ecId = variables.viewLeaseECRecordId;
 await actions.switchPage("view-ec-desktop", [["ecId", ecId]]);
} else {
    await actions.switchPage("add-ec-reports-desktop", [["leaseId", globals.urlparams.leaseId]]);
}