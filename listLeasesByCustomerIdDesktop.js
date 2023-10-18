const customerId = globals.urlparams.customerId || "";
await actions.setVariable("listCustomersLeaseCustomerId", customerId);
await actions.runQuery("leasesCountByCustomerId");

if (!customerId) {
  actions.showAlert("error", "Please Provide customerId");
  actions.switchPage("customers");
  return;
}

components.listCustomersLeaseSearchButtonDesktop.loading(true);
const searchFilter = components.listCustomersLeaseSearchFilterDesktop.value || "";
const searchTerm = components.listCustomersLeaseSearchTermDesktop.value || "";

await actions.setVariable("listCustomersLeaseSearchFilter", searchFilter);
await actions.setVariable("listCustomersLeaseSearchTerm", searchTerm);

if(searchTerm) {
 	const data = await actions.runQuery("listCustomersLeaseWithFilter");
	components.listCustomersLeaseSearchButtonDesktop.loading(false);
  return data;
}


const data = await actions.runQuery("listCustomersLeaseByCustomerId");
components.listCustomersLeaseSearchButtonDesktop.loading(false);
return data;