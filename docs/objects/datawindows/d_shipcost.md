# d_shipcost

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT shipcost.sccode,   
         shipcost.scline,   
         shipcost.scdesc,   
         shipcost.sccost,   
         shipcost.scinv,   
         (select invoicehead.ihcodemc from invoicehead where invoicehead.ihcode = shipcost.scinvno) as scinvno ,   
         shipcost.sctype,   
         shipcost.scqty,   
         shipcost.scstdval  
    FROM shipcost  
   WHERE shipcost.sccode = :ran_ship    

```

## Colonnes
| Colonne |
|---------|
| sccode |
| scline |
| scdesc |
| sccost |
| scinv |
| scinvno |
| sctype |
| scqty |
| scstdval |

