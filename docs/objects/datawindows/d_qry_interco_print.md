# d_qry_interco_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
/* réception et retour achats */
  SELECT histostock.hscode,
		items.itcode,  
         	items.itname,   
		items.itstdpur,
		items.itstat1,
		items.itstat2,
		histostock.hsdatim,
		histostock.hsqty * trsign as qty, 
		isnull(itmccode,'##########') as item_mccode,  
		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purhead.phsupp), '##########') as ad_mccode,
		(select adname from adresses where adcode = item_mccode) as item_adname,
		(select adname from adresses where adcode = ad_mccode) as ad_adname,
		transactions.trname,
		qty * items.itstdpur as amount   
    FROM histostock,
         items,
		transactions,
		purhead
   WHERE histostock.hsitem = items.itcode AND
		histostock.hscode = transactions.trcode AND
         date(histostock.hsdatim) >= date(:adt_datestart) AND  
         date(histostock.hsdatim) <= date(:adt_datestop) AND
		histostock.hscode IN ('RCPO', 'RTPO') AND
		histostock.hsordno = purhead.phcode AND
		item_mccode <> ad_mccode
  
 UNION ALL  
  
/* réception et retour achats géléraux */
  SELECT histostock.hscode,
		items.itcode,  
         	items.itname,   
		items.itstdpur,
		items.itstat1,
		items.itstat2,
		histostock.hsdatim,
		histostock.hsqty * trsign as qty, 
		isnull(itmccode,'##########') as item_mccode,  
		isnull((select linkmcad.lkmccode FROM linkmcad WHERE linkmcad.lkadcode = purghead.phsupp), '##########') as ad_mccode,
		(select adname from adresses where adcode = item_mccode) as item_adname,
		(select adname from adresses where adcode = ad_mccode) as ad_adname,
		transactions.trname,
		qty * items.itstdpur as amount       
    FROM histostock,
         items,
		transactions,
		purghead
   WHERE histostock.hsitem = items.itcode AND
		histostock.hscode = transactions.trcode AND
         date(histostock.hsdatim) >= date(:adt_datestart) AND  
         date(histostock.hsdatim) <= date(:adt_datestop) AND
		histostock.hscode IN ('RCPO', 'RTPO') AND
		histostock
```

## Colonnes
| Colonne |
|---------|
| histostock_hscode |
| items_itcode |
| items_itname |
| items_itstdpur |
| items_itstat1 |
| items_itstat2 |
| histostock_hsdatim |
| qty |
| item_mccode |
| ad_mccode |
| item_adname |
| ad_adname |
| transactions_trname |
| amount |

