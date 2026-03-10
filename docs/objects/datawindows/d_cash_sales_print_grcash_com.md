# d_cash_sales_print_grcash_com

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
  SELECT Sum( ticketline.tlsalval) As BaseVal,   
         ticketline.tltva,   
         Sum( ticketline.tltvaval) As TvaVal,   
         Sum( ticketline.tltotval) As TotVal,   
         ticketline.tlcode,
         tickethead.thdate,
		cash.clname as cash,
		grcash.clname as grcash,
		(select pmcval from parameters where pmcode='SYSCURR') as syscur,
		(select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as mnt_devise,
		(select pmcval from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as devise,
		if (select pmcval from parameters where pmcode='SYSCURR2') = '' then '' else 'Totaux en ' endif as txt_dev,
		'Ticket' as Type
    FROM ticketline,   
         tickethead,
		choiceline cash,
		choiceline grcash,
		users
   WHERE ( ticketline.tlcode = tickethead.thcode ) and  
		( tickethead.thuser = users.uscode ) and
		( users.ussalesman = 'Y' ) and
		( users.ussmcode = :ras_com ) and
         ( ( ticketline.tlcash = cash.clname ) AND
		( cash.clcval2 = grcash.clline) and
      	( cash.clcval2 = :ras_grcash ) AND
		( cash.clcode='CASH' ) AND
		( grcash.clcode = 'GRCH' ) AND
		( ticketline.tlcash = tickethead.thcash ) and  
         ( tickethead.thdate >= :radt_Start ) AND  
         ( tickethead.thdate <= :radt_Stop ))
Group	By ticketline.tlcode,
			ticketline.tltva,
         tickethead.thdate,
		cash,
		grcash

union all

select sum(invoiceline.ilsalval) as BaseVal,
        invoiceline.iltva,
        sum(invoiceline.iltvaval) as TvaVal,
        sum(iltotval) as TotVal,
        invoiceline.ilcode,
        invoicehead.ihdate,
		cash.clname as cash,
		grcash.clname as grcash,
		(select pmcval from parameters where pmcode='SYSCURR') as syscur,
		(select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as mnt_devise,
		(select pmcval from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as devise,
		if (select pmcval from 
```

## Colonnes
| Colonne |
|---------|
| baseval |
| ticketline_tltva |
| tvaval |
| totval |
| ticketline_tlcode |
| tickethead_thdate |
| choiceline_cash |
| choiceline_grcash |
| syscur |
| mnt_devise |
| devise |
| txt_dev |
| type |

