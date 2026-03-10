# ds_promoline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: promoline

## SQL
```sql
  SELECT promoline.plcode,   
         promoline.plline,   
         promoline.plitem,   
         promoline.plitstat1,   
         promoline.plitstat2,   
         promoline.pltyp,   
         promoline.plqty1,   
         promoline.plqty2,   
         promoline.pldiscpc  
    FROM promoline , 
         promohead 
   WHERE promohead.phcode = promoline.plcode 
     AND promohead.phstopdate > :adt_lastsync  

```

## Colonnes
| Colonne |
|---------|
| promoline_plcode |
| promoline_plline |
| promoline_plitem |
| promoline_plitstat1 |
| promoline_plitstat2 |
| promoline_pltyp |
| promoline_plqty1 |
| promoline_plqty2 |
| promoline_pldiscpc |

