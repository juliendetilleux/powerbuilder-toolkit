# d_invhead_qrysel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT distinct invoicehead.ihcode,   
         invoicehead.ihcust,   
         adresses.adname,   
         invoicehead.ihcurr,   
         invoicehead.ihdate,   
         invoicehead.ihpaymnt,   
         invoicehead.ihsalval,   
         invoicehead.ihtypinv,   
         invoicehead.ihcptper,   
         invoicehead.ihprint,   
         invoicehead.ihstatus,   
         invoicehead.ihpaid,   
         invoicehead.ihexpedi, 
	         adresses.adinvedi,  
			invoicehead.ihcodemc,  
			invoicehead.ihmccode as mcdo,
			(select list(shcustref) from salhead 
				where shcode in (select ilsalorder from invoiceline where ilcode = invoicehead.ihcode) and
				trim(isnull(shcustref,'')) <> '') as shcustref,
			(select salhead.shsalesman from salhead 
				where shcode = (select first ilsalorder from invoiceline where ilcode = invoicehead.ihcode order by illine))
			     as salhead_shsalesman,
		(select count(*) from r_ih_ih where ihcode = invoicehead.ihcode) as nb_note,
		(SELECT TOP 1 r_ih_ih.ihcodenote from r_ih_ih where ihcode = invoicehead.ihcode) as num_note,
		(select IsNull(ihcode,0) from r_ih_ih where ihcodenote = invoicehead.ihcode) as nb_facture
    FROM adresses,   
         invoicehead  
   WHERE ( adresses.adcode = invoicehead.ihcust ) and  
         ( ( invoicehead.ihdate >= :adt_DateStart ) AND  
         ( invoicehead.ihdate <= :adt_DateStop ) )   
ORDER BY invoicehead.ihcode DESC   

```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| invoicehead_ihcust |
| adresses_adname |
| invoicehead_ihcurr |
| invoicehead_ihdate |
| invoicehead_ihpaymnt |
| invoicehead_ihsalval |
| invoicehead_ihtypinv |
| invoicehead_ihcptper |
| invoicehead_ihprint |
| invoicehead_ihstatus |
| invoicehead_ihpaid |
| invoicehead_ihexpedi |
| adresses_adinvedi |
| invoicehead_ihcodemc |
| cmcdo |
| shcustref |
| salhead_shsalesman |
| nb_note |
| num_note |
| nb_facture |

