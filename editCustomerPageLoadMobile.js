const customerId = globals.urlparams.customerId;
components.editCustomerContainerSpinnerMobile.show = true;
components.editCustomerContainerMobile.show = true;

if (!customerId) {
  await actions.switchPage("Customers")
  return
}

await actions.setVariable("viewCustomerId", customerId);
await actions.runQuery("viewCustomerById");

components.editCustomerContainerSpinnerMobile.show = false;
components.editCustomerContainerMobile.show = true;