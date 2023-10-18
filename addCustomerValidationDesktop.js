try {
    // Note: Below property setting is commented becuase
    // of the we cannot capture button within the form.
       components.addCustomerButtonDesktop.submitting = true;
    await queries.addCustomerDesktop.run();
   
    // Audit log 
    await actions.setVariable("AUDIT_LOG_SUBJECT", globals.currentUser.email);
    await actions.setVariable("AUDIT_LOG_ACTION", "CREATED");
    await actions.setVariable("AUDIT_LOG_RESOURCE", "CUSTOMER");
    await actions.setVariable("AUDIT_LOG_OBJECT", components.form1.data.addCustomerEmailInputDesktop.value);
    await actions.runQuery("insertAuditLog");
       
    await actions.showAlert("success", "Customer Record Created");
    actions.switchPage('customers');
  } catch(err) {
    await actions.showAlert("error", err.toString());
  } finally {
    components.addCustomerButtonDesktop.submitting = false; 
  }