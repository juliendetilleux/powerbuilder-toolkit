# ds_packinglist_pu_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
select distinct  salline.slitem,
        matallocs.malot,
        sum(matallocs.maallocqty) as  tlqty,
        convert(integer,sum(matallocs.maallocqty) * abs(items.itean2conv)) 'units',
        IF isnull( items.itqtypal, 0 ) = 0 THEN 1 ELSE convert(integer,(sum(matallocs.maallocqty) / items.itqtypal)) + (if ((sum(matallocs.maallocqty) / items.itqtypal) - convert(integer,(sum(matallocs.maallocqty) / items.itqtypal)) = 0) then 0 else 1 endif) ENDIF as 'nbpalett',
        (select lkadref2 from linkitad where lkadcode = shcust and lkitem=salline.slitem) as description , 
	   itpal.itname ,
	   items.itusr15 'Marquage1',
	   items.itusr16 'Marquage2',
	   convert(integer,itpal.itlength) 'itlength',
	   convert(integer,itpal.itwidth) 'itwidth', 
	   convert(integer,itpal.itheight) 'itheight',
	   convert(integer,itpal.itweight) 'weightpal',
       convert(integer,itpal.itvol) 'volpal',
		isnull( (select first mhreqdat from mfghead, histostock where mhcode = hsordno and hslot=malot and hscode='RCMO' and hsordtyp='M' order by mhreqdat) ,lorecdat) as 'mhreldat',
		 loexpdat, 
		convert(numeric(6,3),items.itwistat) 'Net weight', 
		convert(numeric(6,3),items.itweight) 'Gross weight', 
		convert(numeric(6,3),round(items.itvol /1000,2)) 'Volume',
		items.itusr28 'nbmois',
		items.itdesc2 'desclong'
from truckline, matallocs, lots, items, salline,salhead, items itpal, bomline
where matallocs.malot = locode
and matallocs.macode = salline.slcode
and matallocs.maitemseq = tlsalline
and matallocs.matyp = 'X'
and salhead.shcode=salline.slcode
and salline.slitem=items.itcode
and tlsalline = salline.slline
and tlsalhead = salline.slcode 
and blcode=items.itcode 
and blramcode = itpal.itcode 
and itpal.itname like 'Pale%'
and truckline.tlcode=:selected_truck
and Salline.slunitprice > 0
and (malot in (select hslot from histostock
    where hslot=malot and
    hscode='RCMO' and hsordtyp='M')  OR
	malot in (select hslot from histostock
    where hslo
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
| items_itlength |
| items_itwidth |
| items_itheight |
| weightpal |
| volpal |
| mfghead_mhreldat |
| lots_loexpdat |
| net_weight |
| gross_weight |
| volume |
| nbmois |
| desclong |

