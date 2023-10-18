const path = `staging/instruction_documents`;
components.listInstructionModalButtonUploadDesktop.loading(true);

const uploadedFiles = components.listInstructionsUploadModalFilePickerDesktop.file;

for(var i=0; i<uploadedFiles.length; i+=1) {
  try {
    const f = uploadedFiles[i];
    const newPath = `${path}/${f.name}`;
    const binData = atob(f.base64Data);
  
    await actions.setVariable("fileData", f.base64Data);
    await actions.setVariable("fileType", f.type);
    await actions.setVariable("fileKey", newPath);
    await queries.uploadDocument.run();
	
    await actions.setVariable("uploadInstructionDocumentPath", newPath);
    await actions.setVariable("uploadInstructionDocumentSize", binData.length);
    await actions.setVariable("uploadInstructionDocumentMimeType", f.type);
    await queries.insertInstruction.run(); 

    const message = `${f.name} Uploaded Successfully`;
    actions.showAlert("info", message);
  } catch(err) {
   	actions.showAlert("error", err.toString()); 
  }
}

await actions.runQuery("listInstructions");
actions.showAlert("success", "Instruction documents uploaded successfully");
components.listInstructionModalButtonUploadDesktop.loading(false);
components.listInstructionModalUploadDesktop.close();