SELECT ft.table_name AS child_table, fk.role, pt.table_name AS parent_table
FROM sys.sysforeignkey fk
JOIN sys.systable ft ON fk.foreign_table_id = ft.table_id
JOIN sys.systable pt ON fk.primary_table_id = pt.table_id
WHERE ft.creator NOT IN (0,3) AND ft.table_name >= 'J'
ORDER BY ft.table_name, fk.role
