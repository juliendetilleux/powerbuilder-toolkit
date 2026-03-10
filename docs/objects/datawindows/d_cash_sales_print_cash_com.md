# d_cash_sales_print_cash_com

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
		cash.clname,
		(select pmcval from parameters where pmcode='SYSCURR') as syscur,
		(select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as mnt_devise,
		(select pmcval from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as devise,
		if (select pmcval from parameters where pmcode='SYSCURR2') = '' then '' else 'Totaux en ' endif as txt_dev,
		'Ticket' As Type
    FROM ticketline,   
         tickethead,
		choiceline cash,
		users
   WHERE ( ticketline.tlcode = tickethead.thcode ) and  
		( tickethead.thuser = users.uscode ) and
		( users.ussalesman = 'Y' ) and
		( users.ussmcode = :ras_com ) and
         ( ( ticketline.tlcash = cash.clname ) AND
      	( cash.clname = :ras_cash ) AND
		( cash.clcode='CASH' ) AND
		( ticketline.tlcash = tickethead.thcash ) and  
         ( tickethead.thdate >= :radt_Start ) AND  
         ( tickethead.thdate <= :radt_Stop )            )   
Group	By ticketline.tlcode,
			ticketline.tltva,
         tickethead.thdate,
		cash.clname 

union all

select sum(invoiceline.ilsalval) as BaseVal,
        invoiceline.iltva,
        sum(invoiceline.iltvaval) as TvaVal,
        sum(iltotval) as TotVal,
        invoiceline.ilcode,
        invoicehead.ihdate,
        cash.clname,
		(select pmcval from parameters where pmcode='SYSCURR') as syscur,
		(select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as mnt_devise,
		(select pmcval from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as devise,
		if (select pmcval from parameters where pmcode='SYSCURR2') = '' then '' else 'Totaux en ' endif as txt_dev,
        'Fact.' as Type
from histocash,
    invoiceline,
    in
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
| choiceline_clname |
| syscur |
| mnt_devise |
| devise |
| txt_dev |
| type |

