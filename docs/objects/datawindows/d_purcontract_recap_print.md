# d_purcontract_recap_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
 SELECT Distinct purcnthead.chcode,   
         purcnthead.chstatus,   
         purcnthead.chdesc,   
         purcnthead.chadref,   
         purcnthead.chcurr,   
         purcnthead.chexptyp,   
         purcnthead.chexpdat,   
         purcnthead.chexpqty,   
         purcnthead.chordid as chordid,   
         purcnthead.chuomord,  
         purcnthead.chusdqty,   
         adresses.adname,   
         purcnthead.chcreadat,  
         purcnthead.chadid,
		purcntline.clitemid	as clitemid,
		items.itname,
		adresses.adgrsupp,
		items.itstat1,
		items.itstat2,
		(SELECT sum(purline.plqtyrec)  
			FROM 	purhead, purline
			WHERE 	( purhead.phcode = chordid ) and
						( purline.plcode = purhead.phcode) and
						( purline.plitem = clitemid )
				)	as qty_rec ,
		(SELECT sum(purline.plqtyreq)  
			FROM 	purhead, purline
			WHERE 	( purhead.phcode = chordid ) and
						( purline.plcode = purhead.phcode) and
						( purline.plitem = clitemid )
				)	as qty_cmd

    FROM purcnthead,   
         adresses,   
         purcntline,
		items
   WHERE
		( purcnthead.chcreadat >= :ad_dat_deb ) and
		( purcnthead.chcreadat <= :ad_dat_fin )   and
		( adresses.adcode = purcnthead.chadid ) and  
         ( purcnthead.chcode = purcntline.clcode ) and  
		( items.itcode =  purcntline.clitemid )	


```

## Colonnes
| Colonne |
|---------|
| purcnthead_chcode |
| purcnthead_chstatus |
| purcnthead_chdesc |
| purcnthead_chadref |
| purcnthead_chcurr |
| purcnthead_chexptyp |
| purcnthead_chexpdat |
| purcnthead_chexpqty |
| purcnthead_chordid |
| purcnthead_chuomord |
| purcnthead_chusdqty |
| adresses_adname |
| purcnthead_chcreadat |
| purcnthead_chadid |
| purcntline_clitemid |
| items_itname |
| adresses_adgrsupp |
| items_itstat1 |
| items_itstat2 |
| qty_rec |
| qty_cmd |

