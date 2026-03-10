# d_linkitadtd_nut_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _methods
- **Table principale**: 0

## SQL
```sql
  SELECT linkitadtd.ldadcode,   
         linkitadtd.lditem,   
         linkitadtd.ldmoddat,   
         linkitadtd.lding,   
         linkitadtd.ldnut,   
         linkitadtd.ldalg  
    FROM linkitadtd  
   WHERE ( linkitadtd.ldadcode like :as_adcode ) AND  
         ( linkitadtd.lditem like :as_itcode )    

```

## Colonnes
| Colonne |
|---------|
| ldadcode |
| lditem |
| ldmoddat |
| lding |
| ldnut |
| ldalg |

