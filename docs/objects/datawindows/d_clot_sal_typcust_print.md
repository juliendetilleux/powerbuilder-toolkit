# d_clot_sal_typcust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_clot
- **Table principale**: 0

## SQL
```sql
SELECT distinct clotfinitad.cdadid as customer, 
       adresses.adname as custname,     
       isnull ( ( select sum(detail1.cdval) 
                    from clotfinitad detail1
                   where detail1.cdadid = customer  
                     and detail1.cdtyp = 'S' 
                     and detail1.cdperiod between :start1_dat and :start2_dat  AND
(:MultiCo = '*' OR :MultiCo = coalesce(detail1.cdmccode ,'##########')) /*jm012 */), 0) as startval ,
       isnull ( ( select sum(detail2.cdval) 
                    from clotfinitad detail2
                   where detail2.cdadid = customer 
                     and detail2.cdtyp = 'S' 
                     and detail2.cdperiod between :stop1_dat and :stop2_dat  AND
(:MultiCo = '*' OR :MultiCo = coalesce(detail2.cdmccode ,'##########')) /*jm012 */ ), 0) as stopval,
		adresses.adsalesman as salesman,
		linkadch.lac_clline,
		(select clname from choiceline where clcode = 'CUTY' and clline = lac_clline)
  FROM 	clotfinitad ,    
       		adresses,
			linkadch
 WHERE (    ( clotfinitad.cdperiod between :start1_dat and :start2_dat )   
         OR ( clotfinitad.cdperiod between :stop1_dat and :stop2_dat ) )   
   AND ( clotfinitad.cdtyp = 'S' )   
   AND ( clotfinitad.cdadid = adresses.adcode )  AND
(:MultiCo = '*' OR :MultiCo = coalesce(clotfinitad.cdmccode ,'##########')) /*jm012 */
	AND linkadch.lac_chcode = 'CUTY'
	AND linkadch.lac_adcode = adresses.adcode
	AND linkadch.lac_isornot = 1
 ORDER BY clotfinitad.cdadid

```

## Colonnes
| Colonne |
|---------|
| customer |
| adresses_custname |
| startval |
| stopval |
| salesman |
| linkadch_lac_clline |
| clname |

