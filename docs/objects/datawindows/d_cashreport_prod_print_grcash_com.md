# d_cashreport_prod_print_grcash_com

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
  select 
	tlitem, 
	itname,
	itum,
	convert(numeric(10,2),avg((tltotval/tlqty) * (select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2'))) as pu,
	convert(numeric(10,2),sum(tlqty)) as total_qty, 
	convert(numeric(15,2), sum(tlsalval) * (select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2')) as vente_ht,
	convert(numeric(15,2),sum(tltotval) * (select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2')) as vente_ttc,
	(select pmcval from parameters where pmcode='SYSCURR') as syscur,
	(select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as mnt_devise,
	(select pmcval from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as devise,
	if (select pmcval from parameters where pmcode='SYSCURR2') = '' then '' else 'Totaux en ' endif as txt_dev,
	cash.clname,
	grcash.clname as grcash
from 
	ticketline, 
	items,	
	tickethead,
	choiceline cash,
	choiceline grcash,
	users
where tickethead.thcode = tlcode
and tlcash = tickethead.thcash 
and tlitem = itcode 
and ( ticketline.tlcash = cash.clname )
and ( cash.clcval2 = grcash.clline) 
and ( cash.clcval2 = :ras_grCash )  
and ( cash.clcode='CASH' ) 
and ( grcash.clcode = 'GRCH') 
and ( tickethead.thuser = users.uscode ) 
and ( users.ussalesman = 'Y' ) 
and ( users.ussmcode = :ras_com ) 
and ( tickethead.thdate >= :radt_Start )   
and ( tickethead.thdate <= :radt_Stop )   
and ((select pmcval from parameters where pmcode='SYSCURR2') <> '')
group by tlitem, 
	itname,
	itum,
	cash.clname,
	grcash

union all

  select 
	tlitem, 
	itname,
	itum,
	convert(numeric(10,2),avg((tltotval/tlqty))) as pu,
	convert(numeric(10,2),sum(tlqty)) as total_qty, 
	convert(numeric(15,2), sum(tlsalval)) as vente_ht,
	convert(numeric(15,2),sum(tltotval)) as vente_ttc,
	(select pmcval from parameters where pmcode='SYSCURR') as syscur,
	(select cuconv from currenc
```

## Colonnes
| Colonne |
|---------|
| ticketline_tlitem |
| items_itname |
| items_itum |
| pu |
| total_qty |
| vente_ht |
| vente_ttc |
| syscur |
| mnt_devise |
| devise |
| txt_dev |
| choiceline_clname |
| choiceline_grcash |

