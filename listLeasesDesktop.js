let data = [];
try{
  components.listLeasesSearchButtonDesktop.loading(true);
  await actions.setVariable("listLeasesSearchFilter", components.listLeasesSearchFilterDesktop.value);
  await actions.setVariable("listLeasesSearchTerm", components.listLeasesSearchTermDesktop.value);      
  if (!variables.listLeasesSearchTerm) {
    data = await actions.runQuery("listLeases");
    components.listLeasesSearchButtonDesktop.loading(false);
    return data;
  } 
  else {
    data = await actions.runQuery("listLeasesWithFilter");
    components.listLeasesSearchButtonDesktop.loading(false);
    return data;
  }
}
catch(err) {
  actions.showAlert("error", err.toString()); 
}