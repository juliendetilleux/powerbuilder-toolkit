# ds_promohead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: promohead

## SQL
```sql
  SELECT promohead.phcode,   
         promohead.phname,   
         promohead.phactiv,   
         promohead.phstartdate,   
         promohead.phstopdate,   
         promohead.phrateid,   
         promohead.phdesc  
    FROM promohead   
   WHERE promohead.phstopdate > :adt_lastsync  
```

## Colonnes
| Colonne |
|---------|
| phcode |
| phname |
| phactiv |
| phstartdate |
| phstopdate |
| phrateid |
| phdesc |

