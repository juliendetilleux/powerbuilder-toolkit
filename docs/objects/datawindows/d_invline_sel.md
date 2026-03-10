# d_invline_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT invoiceline.illine,   
         invoiceline.iltype,   
         invoiceline.ilitem,   
         items.itname,   
         invoiceline.ilqtycust,   
         invoiceline.ilstdval,   
         invoicehead.ihcurr,   
         invoiceline.ilcode,   
         invoicehead.ihcode,   
         invoicehead.ihdate,   
         invoiceline.ilsalval,   
         adresses.adcode,   
         adresses.adname,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         invoiceline.iltvaval,   
         invoiceline.iltotval,   
         invoicehead.ihsalval,   
         invoicehead.ihtvaval,   
         invoicehead.ihtotval,   
         invoiceline.iluomord,   
         invoiceline.iltva,   
         invoiceline.ilcptsal,   
         invoiceline.ilshiporder,   
         invoiceline.ilshipline,   
         invoiceline.ilsalorder,   
         invoiceline.ilsalline,   
         invoiceline.ilsort,   
         invoicehead.ihpaymnt,   
         invoicehead.ihtvaref,   
         invoicehead.ihexpiry,   
         invoicehead.ihtyptva,   
         invoicehead.ihcurconv ,
		invoicehead.ihcodemc  ,
		invoicehead.ihchecksum ,
		invoicehead.ihcreauser ,
		invoicehead.ihcreadate,
		isnull((select lkcustint from linkitad where lktyp = 'S' and lkadcode = invoicehead.ihcust and lkitem = invoiceline.ilitem), 'C') as lkcustint, /*os2475*/
         invoiceline.ilqty,  	/*os2475*/
		CAST(items.itum as CHAR(5)) as itum,  /*os2475*/
		(select count(*) from r_il_il where r_il_il.ilcode = invoiceline.ilcode and r_il_il.illine = invoiceline.illine) as nb_note
    FROM invoiceline,   
         invoicehead,   
			items,
         adresses  
   WHERE ( invoicehead.ihcode = invoiceline.ilcode ) and  
         ( adresses.adcode = invoicehead.ihcust ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( invoiceline.iltype in ( 'A', 'C', 'D', 'I','R' )  ) and  
         ( invoiceline.ilcode = :Selecte
```

## Colonnes
| Colonne |
|---------|
| illine |
| iltype |
| invoiceline_ilitem |
| items_itname |
| ilqtycust |
| ilstdval |
| invoicehead_ihcurr |
| invoiceline_ilcode |
| invoicehead_ihcode |
| invoicehead_ihdate |
| invoiceline_ilsalval |
| adresses_adcode |
| adresses_adname |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| invoiceline_iltvaval |
| invoiceline_iltotval |
| invoicehead_ihsalval |
| invoicehead_ihtvaval |
| invoicehead_ihtotval |
| iluomord |
| iltva |
| invoiceline_ilcptsal |
| invoiceline_ilshiporder |
| invoiceline_ilshipline |
| invoiceline_ilsalorder |
| invoiceline_ilsalline |
| invoiceline_ilsort |
| invoicehead_ihpaymnt |
| invoicehead_ihtvaref |
| invoicehead_ihexpiry |
| invoicehead_ihtyptva |
| invoicehead_ihcurconv |
| invoicehead_ihcodemc |
| invoicehead_ihchecksum |
| invoicehead_ihcreauser |
| invoicehead_ihcreadate |
| lkcustint |
| ilqty |
| itum |
| nb_note |

