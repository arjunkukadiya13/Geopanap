components.viewLeaseDeleteDocumentDeleteButtonDesktop.loading(true);
const path = variables.documentPath;

try {
	// This will delete data from table
	await queries.deleteOtherDocument.run();

	// This will delete data from s3
	await queries.deleteDocument.run();

	// Refresh table
	await queries.fetchOtherDocumentsFromQueryParamLeaseId.run();
  const message = `${path} Deleted Successfully`;
  actions.showAlert("success", message);
} catch(err) {
  actions.showAlert("error", err.toString());
} finally {
	components.viewLeaseDeleteDocumentDeleteButtonDesktop.loading(false);
	components.viewLeaseDeleteDocumentModel.close(); 
}