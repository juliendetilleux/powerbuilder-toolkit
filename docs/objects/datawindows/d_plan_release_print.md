# d_plan_release_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT matplan.mpreldat,     
         matplan.mpitem,     
         items.itname,     
         matplan.mpplqty,     
         items.itum,     
         matplan.mpplduedat,     
         items.itavailtime,     
         matplan.mpordno,     
         matplan.mpuse,     
         ( SELECT bomhead.bhsubc     
             FROM bomhead     
            WHERE bomhead.bhcode = matplan.mpitem     
              AND bomhead.bhtype='0'     
         ) as subc ,     
         ( SELECT  bomhead.bhsuppid     
             FROM bomhead     
            WHERE bomhead.bhcode = matplan.mpitem     
              AND bomhead.bhtype='0'     
         ) as suppid,
   		 (select adname from adresses where adcode = (select first lkadcode from linkitad where lktyp = 'P' and lkitem = items.itcode and lkactiv = 'Y' and lkmain = 'Y')) as prefsupp
         
    FROM matplan,     
         items     
   WHERE ( items.itcode = matplan.mpitem ) and     
         ( ( matplan.mpuse = :Selected_use ) AND     
         ( items.ittyp <> 'F' ) )     
ORDER BY matplan.mpreldat ASC     

```

## Colonnes
| Colonne |
|---------|
| matplan_mpreldat |
| matplan_mpitem |
| items_itname |
| matplan_mpplqty |
| items_itum |
| matplan_mpplduedat |
| items_itavailtime |
| matplan_mpordno |
| matplan_mpuse |
| csubc |
| csuppid |
| prefsupp |

