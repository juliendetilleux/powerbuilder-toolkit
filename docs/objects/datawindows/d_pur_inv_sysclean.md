# d_pur_inv_sysclean

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _system
- **Table principale**: 0

## SQL
```sql
  SELECT purline.plqtyinv,   
         purline.plcode,   
         purline.plline,   
         purline.plitem,   
         items.itname,   
         purline.plqtyrec,   
         purline.pldatsup  
    FROM purline,   
         items  
   WHERE ( items.itcode = purline.plitem ) and  
         ( ( purline.plqtyinv = 0 ) AND  
         ( purline.pldatsup < :rad_date ) AND  
         ( purline.plqtyrec > 0 ) )    

```

## Colonnes
| Colonne |
|---------|
| purline_plqtyinv |
| purline_plcode |
| purline_plline |
| purline_plitem |
| items_itname |
| purline_plqtyrec |
| purline_pldatsup |

