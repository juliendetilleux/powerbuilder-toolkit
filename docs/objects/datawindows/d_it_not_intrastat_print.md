# d_it_not_intrastat_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         intrastat.isref,   
         intrastat.isdesc,   
         intrastat.istyp,   
         items.itsale,
         items.ittyp 
    FROM intrastat,   
         items  
   WHERE ( items.itintrastat = intrastat.iscode ) and  
         ( items.itactiv = 'Y' ) AND
         ( items.itintrastat = 0 )  AND
             ( items.itsale = 'Y' or 
               (items.ittyp in ('C', 'P') and itcat = 'S')  ) 
ORDER BY intrastat.isref ASC,   
         items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| intrastat_isref |
| intrastat_isdesc |
| intrastat_istyp |
| items_itsale |
| items_ittyp |

