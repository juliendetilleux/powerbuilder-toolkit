# d_packings_list_with_saleimput

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT packings.pkcode,   
         packings.pkname,
		CAST( 0 as numeric(3,0)) as qty,
		CAST( '' as char(30)) as cmnt 
    FROM packings  
  WHERE trim( isnull( packings.pkdefsalimcpt, '' ) ) <> '' AND
		trim((select imputcpt.icref 
				from imputcpt
			  where imputcpt.icactiv = 'Y' and
				imputcpt.ictyp = 'S' and
				imputcpt.iccode = packings.pkdefsalimcpt )) <> '' AND
		packings.pkactiv = 'Y' 
ORDER BY packings.pkcode ASC   

```

## Colonnes
| Colonne |
|---------|
| pkcode |
| pkname |
| qty |
| cmnt |

