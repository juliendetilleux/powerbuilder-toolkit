# zd_plan_subc_subprint

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
         ) as suppid 
         
    FROM matplan,     
         items     
   WHERE items.itcode = matplan.mpitem
     AND matplan.mpuse = 'M'
     AND items.ittyp <> 'F'
     AND suppid = :sel_suppid   
 
UNION 
 
  SELECT matplan.mpreldat,     
         matplan.mpitem,     
         items.itname,     
         matplan.mpplqty,     
         items.itum,     
         matplan.mpplduedat,     
         items.itavailtime,     
         matplan.mpordno,     
         matplan.mpuse,     
         routline.rlsubc as subc ,     
         routline.rlsuppid as suppid 
         
    FROM matplan,     
         items,
		routline     
   WHERE items.itcode = matplan.mpitem
     AND matplan.mpuse = 'M'
     AND items.ittyp <> 'F'
     AND isnull(routline.rlsubc, 'N') = 'Y' 
	AND routline.rlcode = matplan.mpitem    
	AND routline.rltype = '0'
	AND routline.rlsuppid = :sel_suppid   
  
ORDER BY 6 ASC     

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

