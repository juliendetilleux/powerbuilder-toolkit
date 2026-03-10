# d_clot_sal_family_print

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
							( items.itstat1 = itstat1.imcode )AND
(:MultiCo = '*' OR :MultiCo = coalesce(clotfinit.cimccode,'##########')) /*jm012 */  ) ,
         ( SELECT sum(clotfinit.cival) FROM clotfinit, items  
					WHERE ( items.itcode = clotfinit.ciitem ) and  
							( clotfinit.cityp = 'S' ) AND  
							( clotfinit.ciperiod between :stop1_dat and :stop2_dat ) AND  
							( items.itstat1 = itstat1.imcode )AND
(:MultiCo = '*' OR :MultiCo = coalesce(clotfinit.cimccode,'##########')) /*jm012 */  ),
			'' as salesman
    FROM itstat1   
 
 UNION ALL 
 
   SELECT 'N/A',   
         'N/A', 
         ( SELECT sum(clotfinit.cival) FROM clotfinit  
					WHERE ( clotfinit.ciitem = '' OR clotfinit.ciitem is null ) and  
							( clotfinit.cityp = 'S' ) AND  
							( clotfinit.ciperiod between :start1_dat and :start2_dat )AND
(:MultiCo = '*' OR :MultiCo = coalesce(clotfinit.cimccode,'##########')) /*jm012 */  ) ,
         ( SELECT sum(clotfinit.cival) FROM clotfinit
					WHERE ( clotfinit.ciitem = '' OR clotfinit.ciitem is null) and  
							( clotfinit.cityp = 'S' ) AND  
							( clotfinit.ciperiod between :stop1_dat and :stop2_dat )AND
(:MultiCo = '*' OR :MultiCo = coalesce(clotfinit.cimccode,'##########')) /*jm012 */ ),
			'' as salesman


    FROM dummy   
 
order by 1

```

## Colonnes
| Colonne |
|---------|
| imcode |
| imdesc |
| compute_0003 |
| compute_0004 |
| salesman |

