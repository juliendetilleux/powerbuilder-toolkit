# ds_packinglist_pu0_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
select distinct salline.slitem,
        matallocs.malot,
        sum(matallocs.maallocqty) as  tlqty,
        convert(integer,sum(matallocs.maallocqty) * abs(items.itean2conv)) 'units',
        0 'nbpalett',
        (select lkadref2 from linkitad where lkadcode = shcust and lkitem=salline.slitem) as description , 
	    '' 'itname' ,
	   items.itusr15 'Marquage1',
	   items.itusr16 'Marquage2',
	   0 'itlength',
	   0 'itwidth', 
	   0 'itheight',
	   0 'weightpal',
       0 'volpal',
        isnull(mhreqdat, lorecdat) 'mhreldat',
		loexpdat, 
		convert(numeric(6,3),items.itwistat) 'Net weight', 
		convert(numeric(6,3),items.itweight) 'Gross weight', 
		convert(numeric(6,3),round(items.itvol /1000,2)) 'Volume',
		items.itusr28 'nbmois',
		items.itdesc2 'Descripart'
from salline , truckline, matallocs left outer join mfghead on mhlotmfg= malot, lots, salhead, items left outer join bomline on itcode=blcode
where locode=malot
and slitem=items.itcode
and slcode=shcode
and matallocs.macode = salline.slcode
and matallocs.maitemseq = tlsalline
and tlsalline = salline.slline
and tlsalhead = salline.slcode 
and matallocs.matyp = 'X'
and blcode is null
and tlcode = :selected_truck
and Salline.slunitprice = 0
and isnull(items.itqtypal,0) = 0
group by matallocs.malot, shcust, slitem,itname ,
items.itusr15,items.itusr16, itlength,itwidth, itheight,itweight,itvol,
mhreqdat,lorecdat, loexpdat, items.itwistat, items.itweight, items.itvol,items.itean2conv,items.itqtypal, items.itusr28, items.itdesc2

union

select distinct salline.slitem,
        matallocs.malot,
        sum(matallocs.maallocqty) as  tlqty,
        convert(integer,sum(matallocs.maallocqty) * abs(items.itean2conv)) 'units',
        convert(integer,(sum(matallocs.maallocqty) / items.itqtypal)) + (if ((sum(matallocs.maallocqty) / items.itqtypal) - convert(integer,(sum(matallocs.maallocqty) / items.itqtypal)) = 0) then 0 else 1 endif) 'nbpalett',
        (select lkadref2 from 
```

## Colonnes
| Colonne |
|---------|
| salline_slitem |
| matallocs_malot |
| truckline_tlqty |
| units |
| nbpalett |
| description |
| items_itname |
| marquage1 |
| marquage2 |
| itlength |
| itwidth |
| itheight |
| weightpal |
| volpal |
| mfghead_mhreldat |
| lots_loexpdat |
| net_weight |
| gross_weight |
| volume |
| nbmois |
| descripart |

