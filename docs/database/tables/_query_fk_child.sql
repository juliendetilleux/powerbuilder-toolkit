SELECT pt.table_name AS parent_table, fk.role, ft.table_name AS child_table
FROM sys.sysforeignkey fk
JOIN sys.systable pt ON fk.primary_table_id = pt.table_id
JOIN sys.systable ft ON fk.foreign_table_id = ft.table_id
WHERE pt.creator NOT IN (0,3) AND pt.table_name >= 'J'
ORDER BY pt.table_name, fk.role
