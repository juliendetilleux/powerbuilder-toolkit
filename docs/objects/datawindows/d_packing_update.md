# d_packing_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT packings.pkcode , 
         packings.pkname , 
         packings.pkactiv , 
         packings.pklength , 
         packings.pkwidth , 
         packings.pkheight , 
         packings.pkweight , 
         packings.pkstdcost , 
         packings.pkdefconv , 
         packings.pkdefsalimcpt , 
         packings.pkdefpurimcpt ,
		packings.pkitemin ,
		packings.pkitemout ,
		packings.pkimptyp,
		packings.pktype 
     FROM packings      
    WHERE ( packings.pkcode = :Selected_pack )   
```

## Colonnes
| Colonne |
|---------|
| pkcode |
| pkname |
| pkactiv |
| pklength |
| pkwidth |
| pkheight |
| pkweight |
| pkstdcost |
| pkdefconv |
| pkdefsalimcpt |
| pkdefpurimcpt |
| pkitemin |
| pkitemout |
| pkimptyp |
| pktype |

