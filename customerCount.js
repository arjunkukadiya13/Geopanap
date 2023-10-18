const totalCustomer = await queries.count1.run();
await actions.setVariable('totalCustomer', totalCustomer.data[0].count);