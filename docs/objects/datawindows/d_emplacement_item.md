# d_emplacement_item

- **Type**: DataWindow
- **Style**: Grid
- **Module**: _cust2
- **Table principale**: 0

## SQL
```sql
select  DISTINCT lccode as emplacement_code,
		lcdesc as emplacement_label,
    stitem as item_code ,
    itname as item_label,  
    itlot as item_lot, 
    stqty as quantity,
    stalloc as quantity_allocated , 
    stqty - stalloc as quantity_available, 
    lostatus as lot_status ,
    loorder as lot_origin , 
    loexpdat as expiration_date, 
    locode as internal_lot, 
    loorgcode as supplier_lot,
    isnull(itean,'') as item_ean,
    isnull(itean2,'') as item_ean2,
    isnull(itean2conv,1)as item_ean2_conv,
    isnull(itean3,'') as item_ean3,
    isnull(itean3conv,1) as item_ean3_conv,
	LOCATIONS.LCEXP as empl_autorise,
	(

select list (emplacement_code) from (

select DISTINCT   lccode as emplacement_code
	
 from 
	locations,
	stocks,
	lots,
	items
 where
 stloc = locations.lccode and 
locode = stlot and
 itcode = stitem and
 itcode = loitem and
 (itname like ('%' + IsNull(:item, itname) + '%') or stitem like (IsNull(:item, stitem) + '%') or locode  like (IsNull(:item, locode) + '%') or loorgcode like (IsNull(:item, loorgcode) + '%') or  itean  like (IsNull(:item, itean) + '%')  or  itean2  Like (IsNull(:item, itean2) + '%') or  itean3  like (IsNull(:item, itean3) + '%'))
and stqty > 0
and itactiv = 'Y'
and  lcactiv='Y' and LOCATIONS.LCEXP = 'Y'
) a  ) as list_emplacement_autorise
 from 
	locations,
	stocks,
	lots,
	items
 where
 stloc = locations.lccode and 
locode = stlot and
 itcode = stitem and
 itcode = loitem and
 (itname like ('%' + IsNull(:item, itname) + '%') or stitem like (IsNull(:item, stitem) + '%') or locode  like (IsNull(:item, locode) + '%') or loorgcode like (IsNull(:item, loorgcode) + '%') or  itean  like (IsNull(:item, itean) + '%')  or  itean2  Like (IsNull(:item, itean2) + '%') or  itean3  like (IsNull(:item, itean3) + '%'))
and (lccode = IsNull(:empl, lccode))
and stqty > 0
and itactiv = 'Y'
and  lcactiv='Y'
//and lcautoalloc = 'Y'
 order by stalloc, lccode ,stitem,locode

```

## Colonnes
| Colonne |
|---------|
| emplacement_code |
| emplacement_label |
| item_code |
| item_label |
| item_lot |
| quantity |
| quantity_allocated |
| quantity_available |
| lot_status |
| lot_origin |
| expiration_date |
| internal_lot |
| supplier_lot |
| item_ean |
| item_ean2 |
| item_ean2_conv |
| item_ean3 |
| item_ean3_conv |
| locations_empl_autorise |
| list_emplacement_autorise |

