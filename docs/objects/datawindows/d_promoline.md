# d_promoline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT promoline.plcode,   
         promoline.plline,   
         promoline.plitem,   
         promoline.plitstat1,   
         promoline.plitstat2,   
         promoline.pltyp,   
         IsNull ( promoline.plqty1, 0) As plqty1,   
         IsNull ( promoline.plqty2, 0) As plqty2,   
         promoline.pldiscpc,
			( select itname from items where itcode = promoline.plitem ) as itemname,    
         ( select itstat1.imdesc from itstat1 where itstat1.imcode = promoline.plitstat1 ) as itstat1desc,   
         ( select itstat2.isdesc from itstat2 where itstat2.iscode = promoline.plitstat1 and itstat2.iscode2 = promoline.plitstat2 ) as itstat2desc  
    FROM promoline  
   WHERE promoline.plcode = :ran_code    

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
| itemname |
| citstat1desc |
| citstat2desc |

