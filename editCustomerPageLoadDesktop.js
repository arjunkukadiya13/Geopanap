const customerId = globals.urlparams.customerId;
components.editCustomerFormDesktop.show = false;
components.editCustomerFormSpinnerDesktop.show = true;

if (!customerId) {
  await actions.switchPage("Customers")
  return
}

await actions.setVariable("viewCustomerId", customerId);
await actions.runQuery("viewCustomerById");

components.editCustomerFormDesktop.show = true;
components.editCustomerFormSpinnerDesktop.show = false;