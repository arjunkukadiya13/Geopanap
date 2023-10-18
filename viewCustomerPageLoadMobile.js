const customerId = globals.urlparams.customerId;
components.viewCustomerDetailsContainerMobile.show = false;
components.viewCustomerDetailsSpinnerMobile.show = true;

if (!customerId) {
  await actions.switchPage("Customers")
  return
}

await actions.setVariable("viewCustomerId", customerId);
await actions.runQuery("viewCustomerById");

components.viewCustomerDetailsContainerMobile.show = true;
components.viewCustomerDetailsSpinnerMobile.show = false;