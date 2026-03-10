# d_cashreport_prod_print_cash

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
	(select pmcval from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as devise
from 
	ticketline, 
	items,	
	tickethead
where tickethead.thcode = tlcode
and tlcash = tickethead.thcash 
and tlitem = itcode 
and ( tickethead.thcash = :ras_Cash )   
and ( tickethead.thdate >= :radt_Start )   
and ( tickethead.thdate <= :radt_Stop )   
and ((select pmcval from parameters where pmcode='SYSCURR2') <> '')
group by tlitem, 
	itname,
	itum
	
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
	(select cuconv from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as mnt_devise,
	(select pmcval from currencies, parameters where cucode = pmcval and pmcode='SYSCURR2') as devise
from 
	ticketline, 
	items,	
	tickethead
where tickethead.thcode = tlcode
and tlcash = tickethead.thcash 
and tlitem = itcode 
and ( tickethead.thcash = :ras_Cash )   
and ( tickethead.thdate >= :radt_Start )   
and ( tickethead.thdate <= :radt_Stop )   
and ((select pmcval from parameters
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

