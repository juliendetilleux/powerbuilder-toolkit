# zd_inv_cash_paytyp_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT choiceline.clname,   
         histocash.hhval,
			( Select adresses.adcurr From adresses Where adresses.adcode = '##########' ) As Curr
    FROM histocash,   
         choiceline  
   WHERE histocash.hhpaytyp = choiceline.clline and  
         choiceline.clcode = 'CPTY' AND  

         ((histocash.hhordno = :ran_Order AND histocash.hhordtyp = :ras_OrdTyp) OR 
		(:ras_OrdTyp = 'I' AND histocash.hhordtyp = 'X' AND histocash.hhordno IN (select distinct ilshiporder
																										   from invoiceline
																										where ilcode = :ran_Order) ) ) AND  
         histocash.hhval <> 0 

```

## Colonnes
| Colonne |
|---------|
| choiceline_clname |
| histocash_hhval |
| curr |

