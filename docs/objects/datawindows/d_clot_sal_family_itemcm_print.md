# d_clot_sal_family_itemcm_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1.imcode,   
         itstat1.imdesc, 
		salesman.smcode,
		salesman.smname, 
         isnull(( SELECT sum(clotfinitad.cdval) FROM clotfinitad, items, adresses   
					WHERE ( items.itcode = clotfinitad.cditem ) and  
							( adresses.adsalesman = salesman.smcode ) and 
							( clotfinitad.cdadid = adresses.adcode ) and 
							( clotfinitad.cdtyp = 'S' ) AND  
							( clotfinitad.cdperiod between :start1_dat and :start2_dat ) AND  
							( items.itstat1 = itstat1.imcode ) ),0) as valperiod1 ,
         isnull(( SELECT sum(clotfinitad.cdval) FROM clotfinitad, items, adresses   
					WHERE ( items.itcode = clotfinitad.cditem ) and  
							( adresses.adsalesman = salesman.smcode ) and 
							( clotfinitad.cdadid = adresses.adcode ) and 
							( clotfinitad.cdtyp = 'S' ) AND  
							( clotfinitad.cdperiod between :stop1_dat and :stop2_dat ) AND  
							( items.itstat1 = itstat1.imcode ) ), 0) as valperiod2

    FROM itstat1  , salesman  
order by 4,3,1

```

## Colonnes
| Colonne |
|---------|
| imcode |
| imdesc |
| salesman |
| salesman_smname |
| valperiod1 |
| valperiod2 |

