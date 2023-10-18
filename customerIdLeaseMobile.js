const customer_id = await queries.customerIdMobile.run();
actions.setVariable('customer_id',customer_id.data[0].id);
actions.switchPage('add-lease');