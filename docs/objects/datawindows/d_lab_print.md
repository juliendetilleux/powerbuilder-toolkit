# d_lab_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT wcplan.wpdat,   
         wccal.wkordno,   
         wcplan.wplabrun,   
         wccal.wklabreq,   
         wcplan.wpwccode,   
         workcenters.wcname,
		(select first matplan.mpitem from matplan where matplan.mpordno = wccal.wkordno ) as mhitem /*HA2277*/,
		(select items.itname from items where items.itcode = mhitem  ) as itname /*HA2277*/
    FROM wcplan,   
         wccal,   
         workcenters  
   WHERE ( wccal.wkcode = wcplan.wpwccode ) and  
         ( wccal.wkdate = wcplan.wpdat ) and  
         ( wcplan.wpwccode = workcenters.wccode )   
ORDER BY wcplan.wpdat ASC,   
         wcplan.wpwccode ASC   

```

## Colonnes
| Colonne |
|---------|
| wcplan_wpdat |
| wccal_wkordno |
| wcplan_wplabrun |
| wccal_wklabreq |
| wcplan_wpwccode |
| workcenters_wcname |
| mhitem |
| itname |

