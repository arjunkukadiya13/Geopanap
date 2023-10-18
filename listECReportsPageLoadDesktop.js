try {
    components.listECReportsTotalECReportsContainerCounterDesktop.load = true;
    await Promise.all([actions.runQuery("countECReports"), actions.runQuery("listECReportsDesktop")]);
    components.listECReportsTotalECReportsContainerCounterDesktop.load = false;
  }
  catch(err) {                                                       
       actions.showAlert("error", err.toString()); 
  }