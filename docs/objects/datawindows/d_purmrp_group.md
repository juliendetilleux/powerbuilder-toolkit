# d_purmrp_group

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT matplan.mpplqty,   
         matplan.mpitem,   
         matplan.mpplduedat,   
         matplan.mpreldat  
    FROM matplan, items  
   WHERE ( matplan.mpitem = :Selected_item ) AND  
         ( items.itcode = matplan.mpitem ) AND
         (( matplan.mpuse = 'P' ) OR ( items.italttyp = 'P' ))

```

## Colonnes
| Colonne |
|---------|
| mpplqty |
| mpitem |
| mpplduedat |
| mpreldat |

