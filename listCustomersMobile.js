try {
    components.customersMobileButtonSearch.loading(true);
    await actions.setVariable("searchKey", components.customersMobileSearchDropdown.value);
    await actions.setVariable("searchTerm", components.customersMobileSearchText.value);
  
    if (!variables.searchTerm) {
      data = await actions.runQuery("selectCustomers");
      components.customersMobileButtonSearch.loading(false);
      return data;
    } else {
      data = await actions.runQuery("listCustomersWithFilter");
      components.customersMobileButtonSearch.loading(false);
      return data;
    }
  } catch(err) {
       actions.showAlert("error", err.toString()); 
  }