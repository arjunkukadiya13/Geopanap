SELECT
    x.name as "LeaseName" ,
    x.customer_id,
    x.lease_id,
    ec_record_id,
    gr.id AS "gpcb_record_id"
FROM (
    SELECT
        l."name",
        c.id AS "customer_id",
        l.id AS "lease_id",
        er.id AS "ec_record_id"
    FROM
        leases l
        INNER JOIN customers c ON l.customer_id = c.id
        LEFT JOIN ec_records er ON l.id = er.lease_id
) AS x
LEFT JOIN gpcb_records gr ON gr.lease_id = x.lease_id
WHERE
    x.lease_id = {{globals.urlparams.leaseId}};