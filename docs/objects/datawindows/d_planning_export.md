# d_planning_export

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _planning
- **Table principale**: 0

## SQL
```sql
  SELECT date(matplannew.mpplduedat) as mpplduedat,   
         matplannew.mpitem,   
         matplannew.mpplqty,
			items.itname   
    FROM matplannew,   
         items  
   WHERE ( items.itcode = matplannew.mpitem ) and
			( items.itpol <> 'C' )   
ORDER BY matplannew.mpitem,   
         matplannew.mpplduedat    ASC

```

## Colonnes
| Colonne |
|---------|
| cmpplduedat |
| mpitem |
| mpplqty |
| items_itname |

