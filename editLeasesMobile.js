await actions.setVariable("editLeasesId", queries.viewLeasesById.data[0].id);

await actions.setVariable("editLeasesExpiryDate", components.form1.data.editLeasesInputExpiryDateMobile.value);

await actions.setVariable("editLeasesVillege", components.form1.data.editLeasesInputVillageMobile.value);

await actions.setVariable("editLeasesSurveyNumber", components.form1.data.editLeasesInputSurveyNumberMobile.value);

await actions.setVariable("editLeasesCity", components.form1.data.editLeasesInputCityMobile.value);
await actions.setVariable("editLeasesTaluka", components.form1.data.editLeasesInputTalukaMobile.value);

await actions.setVariable("editLeasesArea", components.form1.data.editLeasesInputAreaMobile.value);
await actions.setVariable("editLeasesMinerals", components.form1.data.editLeasesInputMineralsMobile.value);
await actions.runQuery("editLeases");
actions.switchPage("lease");