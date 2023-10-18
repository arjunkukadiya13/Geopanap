const customerdata = await queries.customerEditMobile.run();
await actions.setVariable('customerdata2',customerdata.data[0]);
const customerdata1 = await queries.customerEditGmailMobile.run();
await actions.setVariable('customerdata3',customerdata1.data[0]);