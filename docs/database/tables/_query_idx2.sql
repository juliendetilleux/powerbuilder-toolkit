SELECT t.table_name, i.index_name, i."unique"
FROM sys.systable t JOIN sys.sysindex i ON t.table_id = i.table_id
WHERE t.creator NOT IN (0,3) AND t.table_name >= 'J' AND i.index_name NOT LIKE 'ASIQ%'
ORDER BY t.table_name, i.index_name
