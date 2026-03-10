# d_qry_pur_ct_ordlines

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT purhead.phcurr,   
         items.itname,   
         purline.plqtyreq,   
         purline.plqtyrec,   
         purline.plstdval,   
         purhead.phcode,   
         purline.plitem,   
         purline.plpurval,   
         purline.pldatsup,   
         purhead.phsupp,   
         items.itstat1,   
         items.itstat2,   
         items.itactiv,   
         currencies.cuconv,   
         purhead.phcntid,   
         purline.plstatus,   
         items.itum,   
         purline.plcmnt,   
         purline.pluomconv  
    FROM purhead,   
         purline,   
         items,   
         currencies  
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( items.itcode = purline.plitem ) and  
         ( purhead.phcurr = currencies.cucode ) and  
         ( ( purhead.phcntid = :ran_CtId ) )   
ORDER BY purhead.phcode ASC   

```

## Colonnes
| Colonne |
|---------|
| purhead_phcurr |
| items_itname |
| purline_plqtyreq |
| purline_plqtyrec |
| purline_plstdval |
| purhead_phcode |
| purline_plitem |
| purline_plpurval |
| purline_pldatsup |
| purhead_phsupp |
| items_itstat1 |
| items_itstat2 |
| items_itactiv |
| currencies_cuconv |
| purhead_phcntid |
| purline_plstatus |
| items_itum |
| purline_plcmnt |
| purline_pluomconv |

