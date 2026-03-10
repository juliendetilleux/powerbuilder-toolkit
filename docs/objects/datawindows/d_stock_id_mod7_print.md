# d_stock_id_mod7_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
  SELECT lots.locode,   
         lots.lostatus,   
         lots.lorecdat,   
         lots.loreldat,   
         lots.loexpdat,   
         lots.loqcstatus,   
         lots.loorgcode,   
         items.itcode,   
         isnull((select lkadref2 from linkitad where lktyp = 'S' and lkitem = itcode and lkadcode = :as_adcode), items.itname) as itname,   
         items.itdefaultlot,   
         items.itum,
		locontopend  , 
		(select isnull ( lll_value, 0 ) from link_lbl_logo where lll_itcode = items.itcode and lll_logonum = 1) as logo01vis,
		(select clcval3 from choiceline where clcode = 'LGLS' and clline = (select isnull ( lll_lglsline, 0 ) from link_lbl_logo where lll_itcode = items.itcode and lll_logonum = 1)) as logo01,
		(select isnull ( lll_value, 0 ) from link_lbl_logo where lll_itcode = items.itcode and lll_logonum = 2) as logo02vis,
		(select clcval3 from choiceline where clcode = 'LGLS' and clline = (select isnull ( lll_lglsline, 0 ) from link_lbl_logo where lll_itcode = items.itcode and lll_logonum = 2)) as logo02,
		(select isnull ( lll_value, 0 ) from link_lbl_logo where lll_itcode = items.itcode and lll_logonum = 3) as logo03vis,
		(select clcval3 from choiceline where clcode = 'LGLS' and clline = (select isnull ( lll_lglsline, 0 ) from link_lbl_logo where lll_itcode = items.itcode and lll_logonum = 3)) as logo03,
		(select isnull ( lll_value, 0 ) from link_lbl_logo where lll_itcode = items.itcode and lll_logonum = 4) as logo04vis,
		(select clcval3 from choiceline where clcode = 'LGLS' and clline = (select isnull ( lll_lglsline, 0 ) from link_lbl_logo where lll_itcode = items.itcode and lll_logonum = 4)) as logo04,
		(select isnull ( lll_value, 0 ) from link_lbl_logo where lll_itcode = items.itcode and lll_logonum = 5) as logo05vis,
		(select clcval3 from choiceline where clcode = 'LGLS' and clline = (select isnull ( lll_lglsline, 0 ) from link_lbl_logo where lll_itcode = items.itcode and lll_logonum = 5)) as logo05,
		(select 
```

## Colonnes
| Colonne |
|---------|
| lots_locode |
| lots_lostatus |
| lots_lorecdat |
| lots_loreldat |
| lots_loexpdat |
| lots_loqcstatus |
| lots_loorgcode |
| items_itcode |
| items_itname |
| items_itdefaultlot |
| items_itum |
| lots_locontopend |
| logo01vis |
| logo01 |
| logo02vis |
| logo02 |
| logo03vis |
| logo03 |
| logo04vis |
| logo04 |
| logo05vis |
| logo05 |
| logo06vis |
| logo06 |
| logo07vis |
| logo07 |
| logo08vis |
| logo08 |
| logo09vis |
| logo09 |
| logo10vis |
| logo10 |

