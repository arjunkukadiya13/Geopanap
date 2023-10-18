const ecDocumentId = components.viewECReportsTableDocumentsDesktop.selectedRow.id;
const ecDocumentPath = components.viewECReportsTableDocumentsDesktop.selectedRow.path;

await actions.setVariable("ecDocumentDeleteId", ecDocumentId);
await actions.setVariable("ecDocumentDeletePath", ecDocumentPath);
await components.deleteDocumentModalDesktop.open();