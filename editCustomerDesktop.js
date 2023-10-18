await actions.setVariable("editCustomerId", queries.viewCustomerById.data[0].id);

await actions.setVariable("editCustomerName", components.editCustomerFormDesktop.data.editCustomerInputNameDesktop.value);

await actions.setVariable("editCustomerEmail", components.editCustomerFormDesktop.data.editCustomerInputEmailDesktop.value);

await actions.setVariable("editCustomerTel", components.editCustomerFormDesktop.data.editCustomerInputTelephoneNumberDesktop.value);

await actions.setVariable("editCustomerPassword", components.editCustomerFormDesktop.data.editCustomerInputPasswordDesktop.value);

await actions.setVariable("editCustomerGmailId", queries.viewCustomerById.data[0].gmail_account_id);

try {
  components.editCustomerButtonDesktop.loading(true);
	await actions.runQuery("editCustomer");
  // Audit log 
  await actions.setVariable("AUDIT_LOG_SUBJECT", globals.currentUser.email);
  await actions.setVariable("AUDIT_LOG_ACTION", "UPDATED");
  await actions.setVariable("AUDIT_LOG_RESOURCE", "CUSTOMER");
  await actions.setVariable("AUDIT_LOG_OBJECT", components.editCustomerFormDesktop.data.editCustomerInputEmailDesktop.value);
  await actions.runQuery("insertAuditLog");

  actions.showAlert("success", "Customer Edited Successfully");
	actions.switchPage("customer-details",[['customerId',globals.urlparams.customerId]]);
} catch(err) {
 	actions.showAlert("error", err.toString()); 
}
finally {
  components.editCustomerButtonDesktop.loading(false); 
}