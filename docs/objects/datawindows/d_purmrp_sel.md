# d_purmrp_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT matplan.mpreldat,   
         matplan.mpitem,   
         items.itname,   
         matplan.mpplqty,   
         items.itum,   
         items.itavailtime,     
         matplan.mpplduedat,   
         items.itstdpur,
         matplan.mpuse,
			if (SELECT first adresses.adname
				FROM adresses,   
					linkitad
				WHERE linkitad.lkadcode = adresses.adcode AND 
					linkitad.lkitem = items.itcode AND  
					linkitad.lktyp = 'P' AND
					linkitad.lkmain = 'Y') is null then '' 
			else
				(SELECT first adresses.adname
					FROM adresses,   
						linkitad
					WHERE linkitad.lkadcode = adresses.adcode AND 
						linkitad.lkitem = items.itcode AND  
						linkitad.lktyp = 'P' AND
						linkitad.lkmain = 'Y') endif supplier,
			(SELECT first linkitad.lkadcode
				FROM linkitad
				WHERE linkitad.lkitem = items.itcode AND  
					linkitad.lktyp = 'P' AND
					linkitad.lkmain = 'Y') code_supplier    ,
		'M' as typ,
		0 as code,
		0 as line,
		isnull(items.itmccode, '##########') as itmccode,
		items.itstat1,
		items.itstat2
    FROM items,   
         matplan  
   WHERE ( matplan.mpitem = items.itcode ) and  
         ( ( matplan.mpuse = 'P' ) or (items.italttyp = 'P') )   
   
UNION ALL
   
  SELECT purreqline.pldatreq - isnull(items.itleadtime,0),   
         purreqline.plitem,   
         items.itname,   
         purreqline.plqty,   
         items.itum,   
         items.itavailtime,   
         purreqline.pldatreq,   
         items.itstdpur,
         'P',
			if (SELECT first adresses.adname
				FROM adresses,   
					linkitad
				WHERE linkitad.lkadcode = adresses.adcode AND 
					linkitad.lkitem = items.itcode AND  
					linkitad.lktyp = 'P' AND
					linkitad.lkmain = 'Y') is null then '' 
			else
				(SELECT first adresses.adname
					FROM adresses,   
						linkitad
					WHERE linkitad.lkadcode = adresses.adcode AND 
						linkitad.lkitem = items.itcode AND  
						linkitad.lktyp = 'P' AND
```

## Colonnes
| Colonne |
|---------|
| matplan_mpreldat |
| matplan_mpitem |
| items_itname |
| matplan_mpplqty |
| items_itum |
| items_itavailtime |
| matplan_mpplduedat |
| items_itstdpur |
| matplan_mpuse |
| csupplier |
| ccode_supplier |
| typ |
| code |
| line |
| itmccode |
| items_itstat1 |
| items_itstat2 |

