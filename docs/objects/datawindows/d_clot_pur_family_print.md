# d_clot_pur_family_print

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
							( clotfinit.cityp = 'P' ) AND  
							( clotfinit.ciperiod between :start1_dat and :start2_dat ) AND  
							( items.itstat1 = itstat1.imcode ) )  As Start_Val,
         ( SELECT sum(clotfinit.cival) FROM clotfinit, items  
					WHERE ( items.itcode = clotfinit.ciitem ) and  
							( clotfinit.cityp = 'P' ) AND  
							( clotfinit.ciperiod between :stop1_dat and :stop2_dat ) AND  
							( items.itstat1 = itstat1.imcode ) )  As Stop_Val


    FROM itstat1   
order by itstat1.imcode

```

## Colonnes
| Colonne |
|---------|
| imcode |
| imdesc |
| start_val |
| stop_val |

