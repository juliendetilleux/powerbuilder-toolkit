# d_invhead_sel2

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode,   
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
         invoicehead.ihtyptva,   
         invoicehead.ihpaid,   
         invoicehead.ihpaydate,   
         invoicehead.ihpaidamount  ,  
			invoicehead.ihcodemc,  
			invoicehead.ihmccode as mcdo,
		adresses.adinvpdf,   
		adresses.adinvpdfmail ,
		invoicehead.ihchecksum 
    FROM adresses,   
         invoicehead  
   WHERE ( adresses.adcode = invoicehead.ihcust ) and  
         ( ( invoicehead.ihstatus <= '8' ) AND  
         ( invoicehead.ihstatus >= '1' ) )   
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
| invoicehead_ihtyptva |
| invoicehead_ihpaid |
| invoicehead_ihpaydate |
| invoicehead_ihpaidamount |
| invoicehead_ihcodemc |
| cmcdo |
| adresses_adinvpdf |
| adresses_adinvpdfmail |
| invoicehead_ihchecksum |

