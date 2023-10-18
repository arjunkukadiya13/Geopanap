const leasesId = globals.urlparams.leaseId || "";
components.editLeaseContainerDesktop.show = false;
components.editLeasesFormSpinnerDesktop.show = true;

if (!leasesId) {
  alert("Lease ID not Supplied");
  await actions.switchPage("customers");
  return;
}

await actions.runQuery("fetchMinerals");

await actions.setVariable("viewLeasesId", leasesId);
await actions.runQuery("viewLeasesById");

components.editLeaseContainerDesktop.show = true;
components.editLeasesFormSpinnerDesktop.show = false;