# d_crm_stat_lastsales_it_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
SELECT 	items.itcode,   
        items.itname,
        isnull(( select min(shdatcrea) from salhead join salline on shcode= slcode join adresses on salhead.shcust = adresses.adcode where salline.slitem = items.itcode /*1*/ ) , date('1900-1-1')) as firstdate ,
        isnull(( select max(shdatcrea) from salhead join salline on shcode= slcode join adresses on salhead.shcust = adresses.adcode where salline.slitem = items.itcode /*2*/ ), date('1900-1-1')) as lastdate ,
        isnull(( SELECT sum( round(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv,2)) 
            FROM invoicehead join invoiceline on ihcode = ilcode 
                             join adresses on invoicehead.ihcust = adresses.adcode 
                WHERE invoiceline.ilitem = items.itcode /*3*/ ),0) as last_ca ,
        isnull(( SELECT sum( round(invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv,2))
            FROM invoicehead join invoiceline on ihcode = ilcode 
                             join adresses on invoicehead.ihcust = adresses.adcode 
                WHERE invoiceline.ilitem = items.itcode /*4*/ ),0) as prev_ca,
		items.ittyp,
		items.itcat,
		if ':as_adcode' <> '%' then (select adname from adresses where adcode = ':as_adcode') else '' end if as title
    FROM items  
   WHERE items.itactiv = 'Y' and
         items.itsale = 'Y' and
		( last_ca <> 0 or prev_ca <> 0 )
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| firstdate |
| lastdate |
| last_ca |
| prev_ca |
| ittyp |
| itcat |
| title |

