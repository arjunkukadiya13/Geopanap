const customerId = globals.urlparams.customerId || "";
await actions.setVariable("listCustomersLeaseCustomerId", customerId);

if (!customerId) {
  actions.showAlert("error", "Please Provide customerId");
  actions.switchPage("home");
  return;
}

components.listCustomerLeaseMobileButtonSearch.loading(true);
const searchFilter = components.listCustomersLeaseDropdownMobile.value || "";
const searchTerm = components.listCustomerLeaseMobileInputMobile.value || "";

await actions.setVariable("listCustomersLeaseSearchFilter", searchFilter);
await actions.setVariable("listCustomersLeaseSearchTerm", searchTerm);

if(searchTerm) {
 	const data = await actions.runQuery("listCustomersLeaseWithFilter");
	components.listCustomerLeaseMobileButtonSearch.loading(false);
  return data;
}

const data = await actions.runQuery("listCustomersLeaseByCustomerId");
components.listCustomerLeaseMobileButtonSearch.loading(false);
return data;