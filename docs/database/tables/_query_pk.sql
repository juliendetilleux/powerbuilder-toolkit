SELECT t.table_name, ixc.sequence, c.column_name
FROM sys.systable t 
JOIN sys.sysindex i ON t.table_id = i.table_id
JOIN sys.sysixcol ixc ON ixc.table_id = i.table_id AND ixc.index_id = i.index_id
JOIN sys.syscolumn c ON ixc.column_id = c.column_id AND c.table_id = t.table_id
WHERE t.creator NOT IN (0,3) AND t.table_name >= 'J' AND i.index_name LIKE '%PRIMARY%'
ORDER BY t.table_name, ixc.sequence
