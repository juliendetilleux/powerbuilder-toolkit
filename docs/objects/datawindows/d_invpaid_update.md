# d_invpaid_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _ifcpt
- **Table principale**: 0

## SQL
```sql
  SELECT invoicehead.ihcode,   
         adresses.adname,   
         invoicehead.ihdate,   
         invoicehead.ihcurr,   
         invoicehead.ihtotval,   
         invoicehead.ihpaid,   
         invoicehead.ihpaydate,   
         invoicehead.ihpaidamount,   
         invoicehead.ihcust,
		CAST(null as datetime) as cihpaydate,
		invoicehead.ihcodemc
    FROM adresses,   
         invoicehead  
   WHERE ( adresses.adcode = invoicehead.ihcust ) and  
         ( ( invoicehead.ihcode = :ran_InvHead ) )    

```

## Colonnes
| Colonne |
|---------|
| invoicehead_ihcode |
| adresses_adname |
| invoicehead_ihdate |
| invoicehead_ihcurr |
| invoicehead_ihtotval |
| invoicehead_ihpaid |
| invoicehead_ihpaydate |
| invoicehead_ihpaidamount |
| invoicehead_ihcust |
| cihpaydate |
| invoicehead_ihcodemc |

