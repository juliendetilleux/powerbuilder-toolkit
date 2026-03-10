SELECT t.table_name, c.column_name, d.domain_name, c.width, c.scale, c.nulls, c."default"
FROM sys.systable t JOIN sys.syscolumn c ON t.table_id = c.table_id
JOIN sys.sysdomain d ON c.domain_id = d.domain_id
WHERE t.creator NOT IN (0,3) AND t.table_name >= 'J'
ORDER BY t.table_name, c.column_id
