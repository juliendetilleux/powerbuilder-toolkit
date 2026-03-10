# ds_factoring_cbc

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _ifcpt
- **Table principale**: 0

## SQL
```sql

	SELECT 		
invoicehead.ihcust, 
adresses.adname, 
adresses.adadr1, 
adresses.adzip, 
adresses.adloc, 
adresses.adcountrid, 
adresses.adtva,
invoicehead.ihtypinv as Type_Doc,    /*HA2405*/
invoicehead.ihcodemc, 
invoicehead.ihtotval, 
invoicehead.ihdate As Doc_Date, 
invoicehead.ihexpiry As Exp_Date, 
adresses.adcurr,     /*HA2405*/
( Select choices.chvali 
	 From choices 
	Where choices.chtype = 'PAYM' And
			choices.chcode = adresses.adcustpay ) As Cust_Pay_Days,     /*HA2405*/
( Select choices.chvalc 
	 From choices 
	Where choices.chtype = 'PAYM' And
			choices.chcode = adresses.adcustpay ) As Cust_Pay_Type,    /*HA2405*/
adresses.adtel,    /*HA2405*/
adresses.adfax,    /*HA2405*/
adresses.admail,    /*HA2405*/
adresses.adlang,    /*HA2405*/
invoicehead.ihcurr    /*HA2405*/
FROM 	invoicehead, adresses   

```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcust |
| adresses_adname |
| adresses_adadr1 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountrid |
| adresses_adtva |
| invoicehead_type_doc |
| invoicehead_ihcodemc |
| invoicehead_ihtotval |
| invoicehead_doc_date |
| invoicehead_exp_date |
| adresses_adcurr |
| cust_pay_days |
| cust_pay_type |
| adresses_adtel |
| adresses_adfax |
| adresses_admail |
| adresses_adlang |
| invoicehead_ihcurr |

