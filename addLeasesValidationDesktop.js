if (!components.addLeaseFormDesktop.data.addLeasesLeaseNameInputDesktop.value ||
    !components.addLeaseFormDesktop.data.addLeasesTypeInputDesktop.value ||
    !components.addLeaseFormDesktop.data.addLeasesExpiryDateInputDesktop.value ||
    !components.addLeaseFormDesktop.data.addLeasesVillageInputDesktop.value || 
    !components.addLeaseFormDesktop.data.addLeasesSurveyNumberInputDesktop.value || 
    !components.addLeaseFormDesktop.data.addLeasesCityInputDesktop.value || 
    !components.addLeaseFormDesktop.data.addLeasesTalukaInputDesktop.value || 
    !components.addLeaseFormDesktop.data.addLeasesAreaInputDesktop.value || 
    !components.addLeaseFormDesktop.data.addLeasesAreaInputDesktop.value ||
    !components.addLeaseFormDesktop.data.addLeasesMineralsInputDesktop.value) {
   alert('All lease fields are required!');
   return;
 }
 
 await actions.setVariable("addLeaseCustomerId", globals.urlparams.customerId);
 await actions.setVariable("addLeaseLeaseName", components.addLeaseFormDesktop.data.addLeasesLeaseNameInputDesktop.value);
 await actions.setVariable("addLeaseType", components.addLeaseFormDesktop.data.addLeasesTypeInputDesktop.value);
 await actions.setVariable("addLeaseExpiryDate", components.addLeaseFormDesktop.data.addLeasesExpiryDateInputDesktop.value);
 await actions.setVariable("addLeaseVillegeName", components.addLeaseFormDesktop.data.addLeasesVillageInputDesktop.value);
 await actions.setVariable("addLeaseSurveyNumber", components.addLeaseFormDesktop.data.addLeasesSurveyNumberInputDesktop.value);
 await actions.setVariable("addLeaseArea", components.addLeaseFormDesktop.data.addLeasesAreaInputDesktop.value)
 await actions.setVariable("addLeaseCity", components.addLeaseFormDesktop.data.addLeasesCityInputDesktop.value);
 await actions.setVariable("addLeaseTaluka", components.addLeaseFormDesktop.data.addLeasesTalukaInputDesktop.value);
 await actions.setVariable("addLeaseMineral", components.addLeaseFormDesktop.data.addLeasesMineralsInputDesktop.value);
 components.addLeasesButtonDesktop.submitting=true;
 try {
     await actions.runQuery("addLease");
   await actions.setVariable("AUDIT_LOG_SUBJECT", globals.currentUser.email);
   await actions.setVariable("AUDIT_LOG_ACTION", "CREATED");
   await actions.setVariable("AUDIT_LOG_RESOURCE", "LEASE");
   await actions.setVariable("AUDIT_LOG_OBJECT", components.addLeaseFormDesktop.data.addLeasesLeaseNameInputDesktop.value);
   await actions.runQuery("insertAuditLog");
   
   actions.showAlert("success", "Lease created successfully");
     actions.switchPage("customer-leases-desktop", [["customerId", globals.urlparams.customerId]]);
   components.addLeasesButtonDesktop.submitting = false;
 } catch(err) {
      actions.showAlert("error", err.toString()); 
 }