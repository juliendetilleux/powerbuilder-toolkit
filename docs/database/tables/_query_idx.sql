SELECT t.table_name, i.index_name, i."unique",
  (SELECT list(ic.column_name, ', ') FROM sys.sysixcol ixc
   JOIN sys.syscolumn ic ON ixc.column_id = ic.column_id AND ic.table_id = t.table_id
   WHERE ixc.table_id = i.table_id AND ixc.index_id = i.index_id
   ORDER BY ixc.sequence) AS columns
FROM sys.systable t JOIN sys.sysindex i ON t.table_id = i.table_id
WHERE t.creator NOT IN (0,3) AND t.table_name >= 'J' AND i.index_name NOT LIKE 'ASIQ%'
ORDER BY t.table_name, i.index_name
