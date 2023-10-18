const leasesId = globals.urlparams.leasesId;
components.viewLeasesDetailsContainerMobile.show = false;
components.leasesDetailsSpinnerMobile.show = true;

if (!leasesId) {
  await actions.switchPage("lease")
  return
}

await actions.setVariable("viewLeasesId", leasesId);
await actions.runQuery("viewLeasesById");

components.viewLeasesDetailsContainerMobile.show = true;
components.leasesDetailsSpinnerMobile.show = false;