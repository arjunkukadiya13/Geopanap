let data = [];

try {
  components.listCustomersSearchButtonDesktop.loading(true);
  await actions.setVariable("searchKey", components.listCustomersSearchFilterDesktop.value);
  await actions.setVariable("searchTerm", components.listCustomersSearchTermDesktop.value);

  if (!variables.searchTerm) {
    data = await actions.runQuery("selectCustomers");
    components.listCustomersSearchButtonDesktop.loading(false);
    return data;
  } else {
    data = await actions.runQuery("listCustomersWithFilter");
    components.listCustomersSearchButtonDesktop.loading(false);
    return data;
  }
} catch(err) {
 	actions.showAlert("error", err.toString()); 
}