# d_clot_qtywip_closing

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _monthclot
- **Table principale**: 0

## SQL
```sql
  SELECT items.itname,
			items.itum,   
         clotwip.cwtyp,   
         clotwip.cwmhcode,   
         clotwip.cwitem,   
         clotwip.cwqtyorig,   
         clotwip.cwqtycorr  
    FROM clotwip,   
         items  
   WHERE ( clotwip.cwitem = items.itcode ) AND
			( clotwip.cwtyp = 'C' )
	ORDER BY clotwip.cwmhcode,
				clotwip.cwitem ;

```

## Colonnes
| Colonne |
|---------|
| items_itname |
| items_itum |
| clotwip_cwtyp |
| clotwip_cwmhcode |
| clotwip_cwitem |
| clotwip_cwqtyorig |
| clotwip_cwqtycorr |

