# d_qry_stock_sales_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum,   
         items.ittyp,   
         items.itstdpur,   
         (select sum(lostock) from lots where lots.loitem = items.itcode and lots.lost like :as_lotwc) as itstock,
         0 as salhead,
         0 as sallin,
         items.itlastissue,
         items.itcat,
	    items.italloc,
	    isnull (( SELECT sum(stocks.stqty - stocks.stalloc) 
             FROM lots, stocks  
            WHERE ( stocks.stlot = lots.locode ) and  
                  ( stocks.stitem = items.itcode ) and 
                  ( stocks.stqty <> 0 ) and 
                  ( ( lots.lostatus = 'R' ) OR 
                  ( lots.loexpdat <= today() ) ) ), 0 ) unusable,
	    isnull( ( SELECT sum(salline.slqtyreq)
				    FROM salline 
				  WHERE salline.slitem = items.itcode AND
							salline.slstatus < '6' ), 0) as slqtyreq , 
	   slqtyreq -  isnull( ( SELECT sum(salline.slqtyalloc)
							 FROM salline 
						  WHERE salline.slitem = items.itcode AND
									salline.slstatus < '6' ), 0) as cmdtoalloc,
		items.itsecur
    FROM items  
   WHERE ( items.itactiv = 'Y' ) AND  
		( items.itsale = 'Y' ) and
         ( items.itcat in  ( 'S', 'C', 'U' ) )  AND
         ( items.itcode not like '###########%' )  

```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itum |
| ittyp |
| itstdpur |
| stockqty |
| salhead |
| sallin |
| itlastissue |
| itcat |
| italloc |
| unusable |
| slqtyreq |
| cmdtoalloc |
| itsecur |

