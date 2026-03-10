# d_smt_soldcustdiff_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
SELECT 	adresses.adname,
			smtcode.scdesc,
			'1' as periode,
			items.itname,
			items.itcode,
			sum(invoiceline.ilqty * smtlink.slcontent * invoicehead.ihfacnot) as poids,
			smtcode.scum,
			sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv) as ca,
			dateadd(year, -1, :adt_start) as datestart,
			dateadd(year, -1, :adt_stop) as datestop
    FROM invoicehead,
         invoiceline,
         smtcode,
         smtlink,
         items,
         adresses
   WHERE invoiceline.ilcode = invoicehead.ihcode AND
         invoiceline.ilitem = items.itcode AND
         items.itcode = smtlink.slitemid AND
         smtlink.slsmtid = smtcode.sccode AND
         invoiceline.ilitem = smtlink.slitemid AND
         invoicehead.ihdate between dateadd(year, -1, :adt_start) and dateadd(year, -1, :adt_stop) AND
         invoicehead.ihcust = :as_cust AND
         Adresses.adcode = invoicehead.ihcust AND
         smtcode.sccode like :as_smtcode
GROUP BY items.itcode,
         items.itname,
         smtcode.scum,
         adresses.adname,
         smtcode.scdesc

union all

SELECT 	adresses.adname,
			smtcode.scdesc,
			'2',
			items.itname,
			items.itcode,
			sum(invoiceline.ilqty * smtlink.slcontent * invoicehead.ihfacnot),
			smtcode.scum,
			sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv),
			dateadd(year, -1, :adt_start),
			dateadd(year, -1, :adt_stop)
    FROM invoicehead,
         invoiceline,
         smtcode,
         smtlink,
         items,
         adresses
   WHERE invoiceline.ilcode = invoicehead.ihcode AND
         invoiceline.ilitem = items.itcode AND
         items.itcode = smtlink.slitemid AND
         smtlink.slsmtid = smtcode.sccode AND
         invoiceline.ilitem = smtlink.slitemid AND
	    invoicehead.ihdate between :adt_start and :adt_stop AND
         invoicehead.ihcust = :as_cust AND
         Adresses.adcode = invoicehead.ihcust AND
         smtcode.sccode li
```

## Colonnes
| Colonne |
|---------|
| adresses_adname |
| smtcode_scdesc |
| periode |
| items_itname |
| items_itcode |
| poids |
| smtcode_scum |
| ca |
| datestart |
| datestop |

