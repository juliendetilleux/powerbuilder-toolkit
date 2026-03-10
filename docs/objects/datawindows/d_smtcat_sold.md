# d_smtcat_sold

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT sum(invoiceline.ilqty * smtlink.slcontent * invoicehead.ihfacnot),   
         sum(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv),   
         items.itcode,   
         items.itname,   
         smtcode.scum  ,
		smtcode.scdesc,
		smt_category.sct_name
    FROM invoicehead,   
         invoiceline,   
         smtcode,   
         smtlink,   
         items  ,
		smt_category
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( items.itcode = smtlink.slitemid ) and  
         ( invoiceline.ilitem = smtlink.slitemid ) and  
         ( smtlink.slsmtid = smtcode.sccode ) and  
         ( ( invoicehead.ihdate between :start_dat and :end_dat ) AND  
         ( smtcode.sccode  in ( select a.sccode from smtcode as a where a.sc_cat =  :al_sct_id )  ) )    AND
		(smtcode.sc_cat = smt_category.sct_id)
GROUP BY items.itcode,   
         items.itname,   
         smtcode.scum  ,
		smtcode.scdesc,
		smt_category.sct_name
ORDER BY smtcode.scdesc,1 DESC   

```

## Colonnes
| Colonne |
|---------|
| compute_0001 |
| compute_0002 |
| items_itcode |
| items_itname |
| smtcode_scum |
| smtcode_scdesc |
| smt_category_sct_name |

