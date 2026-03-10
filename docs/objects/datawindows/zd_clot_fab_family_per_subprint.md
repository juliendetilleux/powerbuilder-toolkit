# zd_clot_fab_family_per_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1.imcode familyid,   
         itstat1.imdesc family, 
         'Référence' period , 
         ( SELECT sum(clotfinit.cival) FROM clotfinit, items  
					WHERE ( items.itcode = clotfinit.ciitem ) and  
							( clotfinit.cityp = 'M' ) AND  
							( clotfinit.ciperiod between :stop1_dat and :stop2_dat ) AND  
							( items.itstat1 = itstat1.imcode ) ) fabval 
    FROM itstat1   
union  all 
  SELECT itstat1.imcode ,   
         itstat1.imdesc family, 
         'Principale' period , 
         ( SELECT sum(clotfinit.cival) FROM clotfinit, items  
					WHERE ( items.itcode = clotfinit.ciitem ) and  
							( clotfinit.cityp = 'M' ) AND  
							( clotfinit.ciperiod between :start1_dat and :start2_dat ) AND  
							( items.itstat1 = itstat1.imcode ) )  fabval
    FROM itstat1   

order by 1

```

## Colonnes
| Colonne |
|---------|
| familyid |
| family |
| period |
| fabval |

