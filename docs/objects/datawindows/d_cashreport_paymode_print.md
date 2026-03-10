# d_cashreport_paymode_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_cash
- **Table principale**: 0

## SQL
```sql
select choiceline.clname as cashpaymode,
       histocash.hhordno as numdoc,
       'Facture' as typdoc,
       (select adname 
            from adresses
                where invoicehead.ihcust = adresses.adcode ) as custname,
       histocash.hhval as tottva,
       date(invoicehead.ihdate) as paydate,
       histocash.hhcash,
       (select ussmcode from users where users.uscode = histocash.hhuser) as saleman,
       (select tgrcash.clline from choiceline as tgrcash, choiceline as tcash where tgrcash.clcode = 'GRCH' and tcash.clcode = 'CASH' and tcash.clname = histocash.hhcash) as grcash,
       (Select adresses.adcurr From adresses Where adresses.adcode = '##########' ) As Curr
from histocash,
     invoicehead,
     choiceline
where numdoc = invoicehead.ihcode and
      histocash.hhpaytyp = choiceline.clline and
      choiceline.clcode = 'CPTY' AND
      histocash.hhordtyp = 'I' and 
      invoicehead.ihdate >= :adt_datestart AND 
      invoicehead.ihdate <= :adt_datestop

UNION 

select choiceline.clname as cashpaymode,
       histocash.hhordno as numdoc,
       'Note d''envoi' as typdoc,
       (select adname 
            from adresses
                where shiphead.shcust = adresses.adcode ) as custname,
       histocash.hhval,
       date(shiphead.shdate),
       histocash.hhcash,
       (select ussmcode from users where users.uscode = histocash.hhuser),
       (select tgrcash.clline from choiceline as tgrcash, choiceline as tcash where tgrcash.clcode = 'GRCH' and tcash.clcode = 'CASH' and tcash.clname = histocash.hhcash) as grcash,
       (Select adresses.adcurr From adresses Where adresses.adcode = '##########' ) As Curr
from histocash,
     shiphead,
     choiceline
where numdoc = shiphead.shcode and
      histocash.hhpaytyp = choiceline.clline and
      choiceline.clcode = 'CPTY' AND
      histocash.hhordtyp = 'X' and 
      shiphead.shdate >= :adt_datestart AND 
      shiphead.shdate <= :adt_datestop

UNION 
```

## Colonnes
| Colonne |
|---------|
| choiceline_cashpaymode |
| histocash_numdoc |
| typdoc |
| custname |
| histocash_tottva |
| paydate |
| histocash_hhcash |
| saleman |
| grcash |
| curr |

