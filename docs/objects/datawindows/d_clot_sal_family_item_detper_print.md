# d_clot_sal_family_item_detper_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1.imcode,   
         itstat1.imdesc, 
         ( SELECT sum(clotfinit.cival) FROM clotfinit, items  
					WHERE ( items.itcode = clotfinit.ciitem ) and  
							( clotfinit.cityp = 'S' ) AND  
							( clotfinit.ciperiod between :start1_dat and :start2_dat ) AND  
							( items.itstat1 = itstat1.imcode ) ) ,
         ( SELECT sum(clotfinit.cival) FROM clotfinit, items  
					WHERE ( items.itcode = clotfinit.ciitem ) and  
							( clotfinit.cityp = 'S' )   AND  
							( clotfinit.ciperiod between :stop1_dat and :stop2_dat ) AND  
							( items.itstat1 = itstat1.imcode ) ) 


    FROM itstat1   

order by itstat1.imcode

```

## Colonnes
| Colonne |
|---------|
| imcode |
| imdesc |
| compute_0003 |
| compute_0004 |

