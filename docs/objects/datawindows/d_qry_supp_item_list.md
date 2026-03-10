# d_qry_supp_item_list

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT linkitad.lkitem,   
         items.itname ,   
         items.itdesc2 , 
         linkitad.lkadref,   
         linkitad.lkum,   
         linkitad.lkactiv,   
         linkitad.lkmain  
    FROM linkitad,   
         items  
   WHERE items.itcode = linkitad.lkitem 
     AND linkitad.lktyp = 'P' 
     AND linkitad.lkadcode = :sel_adcode   
ORDER BY linkitad.lkitem ASC   

```

## Colonnes
| Colonne |
|---------|
| linkitad_lkitem |
| items_itname |
| items_itdesc2 |
| linkitad_lkadref |
| linkitad_lkum |
| linkitad_lkactiv |
| linkitad_lkmain |

