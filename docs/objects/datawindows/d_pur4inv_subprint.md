# d_pur4inv_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hsqty,   
         histostock.hsum,   
         histostock.hsdatim,   
         histostock.hscomment,   
         histostock.hsprgcmnt,   
         histostock.hscode  
    FROM histostock  
   WHERE ( histostock.hsordtyp = 'P' ) AND  
         ( histostock.hsordno = :ordno ) AND  
         ( histostock.hsordlin = :ordlin ) AND
			( date(histostock.hsdatim) <= :adt_date_lim) AND
			( histostock.hsqty > 0 )
 ORDER BY histostock.hsdatim ASC   

```

## Colonnes
| Colonne |
|---------|
| hsqty |
| hsum |
| hsdatim |
| hscomment |
| hsprgcmnt |
| hscode |

