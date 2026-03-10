SELECT t.table_name, i.index_name, i."unique", ixc.sequence, c.column_name
FROM sys.systable t 
JOIN sys.sysindex i ON t.table_id = i.table_id
JOIN sys.sysixcol ixc ON ixc.table_id = i.table_id AND ixc.index_id = i.index_id
JOIN sys.syscolumn c ON ixc.column_id = c.column_id AND c.table_id = t.table_id
WHERE t.creator NOT IN (0,3) AND t.table_name >= 'J' AND i.index_name NOT LIKE 'ASIQ%'
ORDER BY t.table_name, i.index_name, ixc.sequence
