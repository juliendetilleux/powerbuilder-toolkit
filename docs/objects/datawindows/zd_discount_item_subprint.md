# zd_discount_item_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT linkdisc.ldstartdat,   
         linkdisc.ldstopdat,   
         linkdisc.ldtyp,   
         linkdisc.ldqty1,   
         linkdisc.ldqty2,   
         linkdisc.lddiscpc,   
         linkdisc.ldlvl,   
         linkdisc.ldkey,
         items.itname,
		1 as typ,
		'' as risname
    FROM linkdisc, linkitad, items  
   WHERE linkitad.lkadcode = :ls_cust AND 
         linkitad.lkcode = linkdisc.ldcode AND  
         items.itcode = linkitad.lkitem AND
         linkitad.lkactiv = 'Y' 
   
UNION ALL 
   
   SELECT distinct dischead.dhstartdate, 
		dischead.dhstopdate ,
		null, 
		null, 
		null, 
		null, 
		null, 
		null, 
		'Ristourne tarifaire' ,
		2,
		dischead.dhname 
    FROM dischead, linkaddiscount
   WHERE linkaddiscount.ldcust LIKE if linkaddiscount.ldcust = '*' then '%' else :ls_cust endif AND 
         dischead.dhcode = linkaddiscount.lddiscount AND 
         dischead.dhactiv = 'Y' 
    
UNION  
   
     SELECT distinct dischead.dhstartdate, 
		dischead.dhstopdate, 
		null, 
		null, 
		null, 
		null, 
		null, 
		null,  
		'Ristourne tarifaire' ,
		3,
		dischead.dhname   
    FROM dischead, linkaddiscount, adresses, adresgroup 
   WHERE adresses.adcode = :ls_cust AND 
         adresses.adgrcust LIKE if linkaddiscount.ldadresgroup = '*' or linkaddiscount.ldadresgroup = '  ' then '%' else linkaddiscount.ldadresgroup endif AND 
         dischead.dhcode = linkaddiscount.lddiscount AND 
     	dischead.dhactiv = 'Y' AND 
         adresgroup.agcode = adresses.adgrcust AND 
         adresgroup.agactiv = 'Y' 
      
 ORDER BY 10, 9, 1 ASC   

```

## Colonnes
| Colonne |
|---------|
| ldstartdat |
| ldstopdat |
| ldtyp |
| ldqty1 |
| ldqty2 |
| lddiscpc |
| ldlvl |
| ldkey |
| items_itname |
| typ |
| risname |

