let data = [];
components.listMineralsSearchButtonDesktop.loading(true);
try {
  await actions.setVariable("searchKeyMinerals", components.listMineralsSearchFilterDesktop.value);
  await actions.setVariable("searchTermMinerals", components.listMineralsSearchTermDesktop.value);    
  if (!variables.searchTermMinerals) {
    data = await actions.runQuery("listMinerals");
    components.listMineralsSearchButtonDesktop.loading(false);
    return data;
  } else {
    data = await actions.runQuery("listMineralsWithFilter");
    components.listMineralsSearchButtonDesktop.loading(false);
    return data;
  }
} catch(err) {
 	actions.showAlert("error", err.toString()); 
}