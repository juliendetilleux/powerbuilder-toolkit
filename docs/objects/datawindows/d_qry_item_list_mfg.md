# d_qry_item_list_mfg

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum ,   
         items.itcat,
		items.ittyp,
		items.itstock - isnull((select sum(lostock) from lots where loitem = items.itcode and lots.lost = 'Y'),0) as itstock,
		items.italloc,
		isnull (( SELECT sum(stocks.stqty - stocks.stalloc) 
             FROM lots, stocks  
            WHERE ( stocks.stlot = lots.locode ) and  
                  ( stocks.stitem = items.itcode ) and 
                  ( stocks.stqty <> 0 ) and 
				( lots.lost <> 'Y' ) and
                  ( ( lots.lostatus = 'R' ) OR 
                  ( lots.loexpdat <= today() ) ) ), 0 )
		+  isnull (( SELECT sum(stocks.stqty - stocks.stalloc) /*os1448*/
					 FROM lots, stocks, locations
					WHERE stocks.stlot = lots.locode and  
							stocks.stitem = items.itcode and 
							stocks.stqty <> 0 and 
							locations.lccode = stocks.stloc and 
							( locations.lcmrpexcl = 'Y' OR lots.loexcmrp = 'Y' /*os2641*/ ) and
							lots.lostatus <> 'R' and 
							lots.lost <> 'Y' and
							lots.loexpdat > today() ), 0 ) as unusable
    FROM items  
   WHERE ( items.ittyp in ( 'M', 'F') ) AND  
         (  ( items.itactiv = 'Y' And items.itcat <> 'U' ) Or ( items.itcat = 'U') ) 
     AND  items.itcode not like '###########%'     
ORDER BY items.itcode ASC   

```

## Colonnes
| Colonne |
|---------|
| itcode |
| items_itname |
| items_itum |
| itcat |
| ittyp |
| itstock |
| italloc |
| unusable |

