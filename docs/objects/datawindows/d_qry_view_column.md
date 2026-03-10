# d_qry_view_column

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT viewstruct.vsfieldcode,   
         viewstruct.vsfieldname,
			cast(null as integer)  as tri,
			cast(null as char(1))  as ad,
            	cast(null as char(1))  as expr,
            	cast(null as char(1))  as expr_date,
			cast(null as char(1))  as typ
    FROM viewstruct 
   WHERE viewstruct.vscode = :Sel_view 
	order by viewstruct.vssort

```

## Colonnes
| Colonne |
|---------|
| vsfieldcode |
| vsfieldname |
| tri |
| ad |
| expr |
| expr_date |
| typ |

