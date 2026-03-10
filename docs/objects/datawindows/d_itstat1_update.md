# d_itstat1_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1.imcode,   
         itstat1.imdesc,   
         itstat1.im_orderby,   
         itstat1.imcolor,
		itstat1.imptshipnotice  
    FROM itstat1  
   WHERE itstat1.imcode = :Selected_stat    

```

## Colonnes
| Colonne |
|---------|
| imcode |
| imdesc |
| im_orderby |
| imcolor |
| imptshipnotic |

