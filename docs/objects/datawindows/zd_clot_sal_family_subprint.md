# zd_clot_sal_family_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1.imcode familyid,   
         itstat1.imdesc family, 
         'Principale' period , 
         ( SELECT sum(clotfinit.cival) FROM clotfinit, items  
					WHERE ( items.itcode = clotfinit.ciitem ) and  
							( clotfinit.cityp = 'S' ) AND  
							( clotfinit.ciperiod between :stop1_dat and :stop2_dat ) 	AND
	(:MultiCo = '*' OR :MultiCo = coalesce(clotfinit.cimccode,'##########')) /*jm012 */ AND  
							( items.itstat1 = itstat1.imcode ) ) salesval  
    FROM itstat1   
 UNION ALL 
   SELECT 'N/A',   
         'N/A', 
         'Principale' period , 
         ( SELECT sum(clotfinit.cival) FROM clotfinit  
					WHERE ( clotfinit.ciitem = '' OR clotfinit.ciitem is null)	
 AND
	(:MultiCo = '*' OR :MultiCo = coalesce(clotfinit.cimccode,'##########')) /*jm012 */ and  
							( clotfinit.cityp = 'S' ) AND  
							( clotfinit.ciperiod between :stop1_dat and :stop2_dat ) ) salesval 
    FROM dummy   
 
union  all 

  SELECT itstat1.imcode ,   
         itstat1.imdesc family, 
         'Référence' period , 
         ( SELECT sum(clotfinit.cival) FROM clotfinit, items  
					WHERE ( items.itcode = clotfinit.ciitem ) 	AND
	(:MultiCo = '*' OR :MultiCo = coalesce(clotfinit.cimccode,'##########')) /*jm012 */ and  
							( clotfinit.cityp = 'S' ) AND  
							( clotfinit.ciperiod between :start1_dat and :start2_dat ) AND  
							( items.itstat1 = itstat1.imcode ) )  salesval
    FROM itstat1   
 UNION ALL 
  SELECT 'N/A' ,   
         'N/A' family, 
         'Référence' period , 
         ( SELECT sum(clotfinit.cival) FROM clotfinit  
					WHERE ( clotfinit.ciitem = '' OR clotfinit.ciitem is null) 	AND
	(:MultiCo = '*' OR :MultiCo = coalesce(clotfinit.cimccode,'##########')) /*jm012 */ and  
							( clotfinit.cityp = 'S' ) AND  
							( clotfinit.ciperiod between :start1_dat and :start2_dat ) )  salesval
    FROM dummy   
order by 1

```

## Colonnes
| Colonne |
|---------|
| familyid |
| family |
| period |
| salesval |

