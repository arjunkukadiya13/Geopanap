const leaseNoteData = await queries.selectAllLeaseNotes.run();
var arrOfLeaseData  = {data:[]};
for(i=0;i<leaseNoteData.data.length;i++){
	//arrOfLeaseData+=i+1+'.'+leaseNoteData.data[i].note + '<br>';
  const newObj = {
    note: leaseNoteData.data[i].note
    // Add more key-value pairs as needed
  };

  arrOfLeaseData.data.push(newObj);
}
actions.setVariable('arrOfLeaseNotesData',arrOfLeaseData);