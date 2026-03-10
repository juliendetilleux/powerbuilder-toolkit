# d_invoice_mod99_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode, 
         invoicehead.ihcust, 
         invoicehead.ihdate, 
         invoicehead.ihtvaref,
			invoicehead.ihtyptva,
         invoicehead.ihtypinv,
         invoicehead.ihexpiry,
			invoicehead.ihcomment,
			invoicehead.ihinvattention,
			adresses.adphysical,  
			invoicehead.ihcodemc,  
			invoicehead.ihmccode as mcdo ,
			isnull(adresses.adfour,'') as adfour    ,
			(select 
				 list (chname) 
			from 
				 choices 
			where 
				 chactiv = 'Y' and chcode <> '0'
			and 
				 chtype = 'DLVT' 
			and 
				 chcode in (
					  select 
							shdlvt 
					  from 
							salhead 
					  where 
							shcode in
								 (select 
									  ilsalorder  
								 from 
									  invoiceline 
								 where 
									  ilcode = :Selected_invoice
								 ))) as incoterm,
			(select 
				list (shdlvtplace)
			 from 
				salhead 
			 where 
				shcode in
					 (select 
						  ilsalorder  
					 from 
						  invoiceline 
					 where 
						  ilcode = :Selected_invoice
					 )) as incotermloc 
    FROM invoicehead, adresses
   WHERE invoicehead.ihcode = :Selected_invoice and
			adresses.adcode = invoicehead.ihcust

```

## Colonnes
| Colonne |
|---------|
| ihcode |
| ihcust |
| ihdate |
| ihtvaref |
| ihtyptva |
| ihtypinv |
| ihexpiry |
| ihcomment |
| ihinvattention |
| adresses_adphysical |
| invoicehead_ihcodemc |
| cmcdo |
| adfour |
| incoterm |
| incotermloc |

