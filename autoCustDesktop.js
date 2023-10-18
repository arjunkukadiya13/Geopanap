const customerdata = await queries.customerEditDesktop.run();
await actions.setVariable('customerdata',customerdata.data[0]);
const customerdata1 = await queries.customerEditGmailDesktop.run();
await actions.setVariable('customerdata1',customerdata1.data[0]);