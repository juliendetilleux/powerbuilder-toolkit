# zd_promoline_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

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
         promoline.pldiscpc,   
         ( select itstat1.imdesc from itstat1 where itstat1.imcode = promoline.plitstat1 ) as itstat1desc,   
         ( select itstat2.isdesc from itstat2 where itstat2.iscode = promoline.plitstat1 and itstat2.iscode2 = promoline.plitstat2 ) as itstat2desc, 
			( select itname from items where items.itcode = promoline.plitem ) as itemname   
    FROM promoline  
   WHERE promoline.plcode = :ran_code   
ORDER BY promoline.plcode ASC,   
         promoline.plline ASC   

```

## Colonnes
| Colonne |
|---------|
| plcode |
| plline |
| plitem |
| plitstat1 |
| plitstat2 |
| pltyp |
| plqty1 |
| plqty2 |
| pldiscpc |
| itstat1desc |
| itstat2desc |
| itemname |

