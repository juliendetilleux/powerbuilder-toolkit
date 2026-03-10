# d_achatplan_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
with recursive besoinfab ( cp, ingre, qty, debut, fin, origine, qtycom) as
(
select blcode, blramcode, blramqty, blstartdat, blstopdat, blcode, matplan.mpplqty from bomline, matplan where matplan.mpitem = bomline.blcode and bltype = 0 and blcode in ( select mpitem from matplan where mpuse = 'M' and mporigin in ('A','R') and mpitem not in ( select blramcode from bomline) order by 1 )
union all
select bomline.blcode , bomline.blramcode , bomline.blramqty , bomline.blstartdat , bomline.blstopdat, besoinfab.origine, besoinfab.qtycom *  besoinfab.qty  from bomline, besoinfab where bomline.blcode = besoinfab.ingre
)
select 
    ingre, 
    items.itname,
    origine, 
    (select itname from items where itcode = origine) as nommeth,
    qtycom * qty as totingre ,
    matplan.mpplqty as qtycombase, 
    items.itum,
    lots.locode, 
    lots.lostock,
    lots.loalloc,
    lots.loexpdat,
    (select first hsdatim from histostock where hslot = lots.locode and hscode in ('OPBL','RCMO','RCPO','RNAM','RCSC')order by 1 asc) as datein,
    (select adname from adresses where adcode = (select lkadcode from linkitad where lktyp = 'P' and lkitem = ingre and lkactiv = 'Y' and lkmain = 'Y')),
    items.itpsize,
    (select adname from adresses where adcode = ( select first phsupp from purhead, purline where phcode = plcode and plitem = ingre and plstatus <> '9' order by pldatsup desc)) as fourlastcom,
    (select first plqtyrec from purhead, purline where phcode = plcode and plitem = ingre and plstatus <> '9' order by pldatsup desc, plline) as qtylastcom,
    (select first plpurval from purhead, purline where phcode = plcode and plitem = ingre and plstatus <> '9' order by pldatsup desc, plline) as pricelastcom,
    (select first plcode from purhead, purline where phcode = plcode and plitem = ingre and plstatus <> '9' order by pldatsup desc, plline) as numlastcom, 
    (select itum from items where itcode = origine) as umori
from 
    besoinfab ,  matplan, lots
```

## Colonnes
| Colonne |
|---------|
| ingre |
| itname |
| origine |
| nommeth |
| totingre |
| qtycombase |
| itum |
| locode |
| lostock |
| loalloc |
| loexpdat |
| datein |
| adname |
| itpsize |
| fourlastcom |
| qtylastcom |
| pricelastcom |
| numlastcom |
| umori |

