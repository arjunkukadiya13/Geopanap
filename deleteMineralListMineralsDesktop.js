components.deleteMineralButtonDesktop.loading(true);
try{
   await actions.runQuery("deleteMineralById");
   await actions.setVariable("AUDIT_LOG_SUBJECT", globals.currentUser.email);
   await actions.setVariable("AUDIT_LOG_ACTION", "DELETED");
   await actions.setVariable("AUDIT_LOG_RESOURCE", "MINERAL");
   await actions.setVariable("AUDIT_LOG_OBJECT", variables.deleteMineraName);
   await actions.runQuery("insertAuditLog");
  
   await actions.runQuery("listMineralsPageLoadDesktop");
   await actions.showAlert("success", 'Mineral Deleted Successfully');
   await actions.closeModal('listMineralsDeleteModalDesktop');   
   components.deleteMineralButtonDesktop.loading(false);
}
catch(err) {
 	actions.showAlert("error", err.toString()); 
}