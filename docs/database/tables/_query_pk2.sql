SELECT t.table_name, c.column_name, c.pkey
FROM sys.systable t JOIN sys.syscolumn c ON t.table_id = c.table_id
WHERE t.creator NOT IN (0,3) AND t.table_name >= 'J' AND c.pkey = 'Y'
ORDER BY t.table_name, c.column_id
