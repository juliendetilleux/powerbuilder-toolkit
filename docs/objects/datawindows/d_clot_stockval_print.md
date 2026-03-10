# d_clot_stockval_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itstdpur, 
         'S' typ,  
         sum(clotstocks.csqtyorig) qtyorg,   
         sum(clotstocks.csqtycorr) qtycorr,
         items.itcons  
    FROM clotstocks,   
         items  
   WHERE ( clotstocks.csitem = items.itcode ) 
GROUP BY items.itcode,   
         items.itname,   
         items.itstdpur, 
         items.itcons 
UNION all 
  SELECT items.itcode,   
         items.itname,   
         items.itstdpur,   
         'W',
         sum(clotwip.cwqtyorig ),   
         sum(clotwip.cwqtycorr)  ,
         items.itcons
    FROM clotwip,   
         items  
   WHERE ( items.itcode = clotwip.cwitem ) and
         ( (clotwip.cwqtyorig <> 0 ) or (clotwip.cwqtycorr <> 0) ) and
         ( clotwip.cwtyp = 'C' )
GROUP BY items.itcode,   
         items.itname,   
         items.itstdpur, 
         items.itcons  
ORDER BY 1 ASC, 4 ASC
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itstdpur |
| ctyp |
| cqtyorg |
| cqtycorr |
| items_itcons |

