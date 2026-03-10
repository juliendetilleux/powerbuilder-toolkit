# d_cpt_invhead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _ifcpt
- **Table principale**: 0

## SQL
```sql
  Select invoicehead.ihprint,   
         invoicehead.ihtypinv,   
         invoicehead.ihcodemc,   
         invoicehead.ihcust,
			( Select adresses.adname 
				 From adresses
				Where adresses.adcode = invoicehead.ihcust ) As CustName, 
			( Select progparam.ppvalue
				 From progparam
				Where progparam.ppcode = 'MULTICO' ) As MulticoType , /*HA2176*/
			( Select adresses.adidcptcust 
				 From adresses
				Where adresses.adcode = invoicehead.ihcust ) As IdCptCustAd,  /*HA2176*/
			( Select linkmcad2.lkidcptcust
				 From linkmcad2
				Where linkmcad2.lkadcode = invoicehead.ihcust	And
						linkmcad2.lkmccode = invoicehead.ihmccode			) As IdCptCustLk, /*HA2176*/
			( If IsNull( MulticoType, '') = '1' Then IdCptCustLk Else IdCptCustAd EndIf) As IdCptCust, /*HA2176*/ /*HA2181*/
         invoicehead.ihcptper,   
         invoicehead.ihdate,   
         invoicehead.ihexpiry,   
         invoicehead.ihstatus,   
         invoicehead.ihsalval,   
         invoicehead.ihcurr,   
         invoicehead.ihpaymnt,   
         invoicehead.ihtyptva,   
         invoicehead.ihstructcom,
			invoicehead.ihtotval,
			invoicehead.ihtvaval,
			invoicehead.ihcurconv,
			invoicehead.ihcomment,
			invoicehead.ihesct,
			invoicehead.ihstructcom,
			invoicehead.ihcode,
		invoicehead.ihlastremind,
		invoicehead.ihremindnb  
    From invoicehead   
	Where invoicehead.ihstatus = '7'					And
			invoicehead.ihmccode = :ras_McCoCode  
Order By invoicehead.ihcodemc Desc
```

## Colonnes
| Colonne |
|---------|
| ihprint |
| ihtypinv |
| ihcodemc |
| ihcust |
| custname |
| multicotype |
| idcptcustad |
| idcptcustlk |
| idcptcust |
| ihcptper |
| ihdate |
| ihexpiry |
| ihstatus |
| ihsalval |
| ihcurr |
| ihpaymnt |
| ihtyptva |
| ihstructcom |
| ihtotval |
| ihtvaval |
| ihcurconv |
| ihcomment |
| ihesct |
| ihstructcom |
| ihcode |
| ihlastremind |
| ihremindnb |

