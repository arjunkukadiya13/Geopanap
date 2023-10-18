const gpcbDocumentId = components.viewGPCBTablesUploadedDocumentsDesktop.selectedRow.id;
const gpcbDocumentPath = components.viewGPCBTablesUploadedDocumentsDesktop.selectedRow.path;

await actions.setVariable("gpcbDocumentDeleteId", gpcbDocumentId);
await actions.setVariable("gpcbDocumentDeletePath", gpcbDocumentPath);
await components.viewGPCBDeleteUploadDocumentDesktop.open();