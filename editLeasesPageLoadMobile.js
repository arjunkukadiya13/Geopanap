const leasesId = globals.urlparams.leaseId;
components.form1.show = false;
components.editLeasesContainerSpinnerMobile.show = true;

if (!leasesId) {
  await actions.switchPage("lease")
  return
}

await actions.setVariable("viewLeasesId", leasesId);
await actions.runQuery("viewLeasesById");

components.form1.show = true;
components.editLeasesContainerSpinnerMobile.show = false;