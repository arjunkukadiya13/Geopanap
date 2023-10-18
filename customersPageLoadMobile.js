try{
    components.customersMobileButtonSearch.loading(true);
    await actions.runQuery("listCustomersMobile");
    components.customersMobileButtonSearch.loading(false);
  }
  catch(err) {
       actions.showAlert("error", err.toString()); 
  }