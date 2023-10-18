function Validate() {

    var validRegex = /^[a-zA-Z0-9.!#%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/; var phoneno = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    
    if (!components.addCustomerFormMobile.data.addCustomerInputEmailMobile.value.match(validRegex)) {
    
    alert("Invalid Email Address!");
    
    } else if (!components.addCustomerFormMobile.data.addCustomerInputTelephoneNumberMobile.value.match(phoneno)) {
    
    alert("Invalid Telephone Number!");
    
    }  else{ queries.addCustomerMobile.run(); actions.switchPage('customers'); } } Validate();