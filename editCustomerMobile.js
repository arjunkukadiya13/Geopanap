await actions.setVariable("editCustomerId", queries.viewCustomerById.data[0].id);

await actions.setVariable("editCustomerName", components.editCustomerContainerMobile.data.editCustomerInputNameMobile.value);

await actions.setVariable("editCustomerEmail", components.editCustomerContainerMobile.data.editCustomerInputEmailMobile.value);

await actions.setVariable("editCustomerTel", components.editCustomerContainerMobile.data.editCustomerInputTelephoneNumberMobile.value);

await actions.setVariable("editCustomerPassword", components.editCustomerContainerMobile.data.editCustomerInputEmailPasswordMobile.value);

await actions.setVariable("editCustomerGmailId", queries.viewCustomerById.data[0].gmail_account_id);

await actions.runQuery("editCustomer");
actions.switchPage("customers");