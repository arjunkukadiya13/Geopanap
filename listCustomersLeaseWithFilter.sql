select id,name,type, customer_id, survey_number, expiry_date , taluka, villege, city, area,mineral_id from leases where {{variables.listCustomersLeaseSearchFilter}}::text like '%{{variables.listCustomersLeaseSearchTerm}}%' and customer_id={{globals.urlparams.customerId}};