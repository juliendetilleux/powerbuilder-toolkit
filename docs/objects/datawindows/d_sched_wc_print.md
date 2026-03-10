# d_sched_wc_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
SELECT 

	( select itcode from items where items.itcode = ( select mhitem from mfghead where mfghead.mhcode = schedwrkdet.wdordno )) as item_code,	
	
	( select itname from items where items.itcode = ( select mhitem from mfghead where mfghead.mhcode = schedwrkdet.wdordno )), 	
	
	schedwrkdet.wddat ,   
	
	workcenters.wccode ,   
	
    workcenters.wcname,   
    
	schedwrkdet.wdmacrun,   
	
    schedwrkdet.wdlabrun,   
	
	(select mhreqqty from mfghead where mhcode = schedwrkdet.wdordno) as OFQTY,
	
	( select sum ( stqty - stalloc ) from stocks where stitem  = item_code ) as available_stock,		
	
	( select isnull (min ( salhead.shdatreq ), '9999-12-31') from salhead where shcode in ( select slcode from salline where slitem = item_code and slstatus < 5 ) and shstatus < 5 ) as next_ship_date,		
    
	( select sum (slqtyreq - slqtyreal) from salline where slcode = (select min(a.slcode) from salline as a,salhead where a.slcode = shcode and a.slitem = item_code and a.slstatus < 5 and shdatreq = next_ship_date ) and slitem = item_code and slstatus < 5 ) as next_ship_qty,		
	
	( select sum ( slqtyreq - slqtyreal ) from salhead, salline where slcode = shcode and slstatus < 5 and shstatus < 5 and slitem = item_code) as tot_ship_qty,	
	
	( select sum ( stqty ) from stocks where stitem  = item_code ) as tot_stock,	
	
    schedwrkdet.wdordtyp,

    schedwrkdet.wdordno,

    mfgwcreqs.mwoper,	
    
	( select department.dpdesc from department where department.dpcode = workcenters.wcdptid )  as dpdesc,	

	(select first mfgwcreqs.mwwccode from mfgwcreqs where mfgwcreqs.mwcode = schedwrkdet.wdordno and isnull(mfgwcreqs.mwfinish, '') <> 'Y' order by mfgwcreqs.mwline ASC  ) as mwwccode,
	(select first workcenters.wcname from mfgwcreqs, workcenters where mfgwcreqs.mwcode = schedwrkdet.wdordno and  workcenters.wccode = mfgwcreqs.mwwccode and isnull(mfgwcreqs.mwfinish, '') <> 'Y' order by mfgwcreqs.mwline ASC  ) as wcname
FROM 
	
	schedwrkdet,   
    
```

## Colonnes
| Colonne |
|---------|
| item_code |
| citname |
| schedwrkdet_wddat |
| workcenters_wccode |
| workcenters_wcname |
| schedwrkdet_wdmacrun |
| schedwrkdet_wdlabrun |
| ofqty |
| available_stock |
| next_ship_date |
| next_ship_qty |
| tot_ship_qty |
| tot_stock |
| schedwrkdet_wdordtyp |
| schedwrkdet_wdordno |
| mfgwcreqs_mwoper |
| department_dpdesc |
| mwwccode |
| wcname |

