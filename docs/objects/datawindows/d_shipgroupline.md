# d_shipgroupline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,
			items.itname,
			items.itum, 
			salline.slcode,
			salline.slline, 
			shipline.slcode,
			shipline.slline, 
			'PC' as umpc,
			IF isnull(yv_linkitad.lkcol2, 0) = 0 THEN
				isnull(items.itcol2, 0)
			ELSE
				yv_linkitad.lkcol2
			ENDIF as nbpccol,
			salline.slqtyord as sumslqtyord,
			salline.slqtyreq as sumslqtyreq,
         sum(shipgrline.glqty) as sumglqty,   
         sum(shipgrline.glqtypc) as sumglqtypc,
			(select count(*) from shipgrhead 
				where ghshipid = 234 and 
					ghlevel = 2 and
					ghlevelseq in (select shipgrl.glprevlevelseq from shipgrline as shipgrl, shipline as shipl 
										where shipgrl.glshipid = shiphead.shcode and
											shipgrl.gllevel = 3 and
											shipl.slcode = shipgrl.glshipid and
											shipl.slline = shipgrl.glshipline and
											shipl.slsalorder = salline.slcode and
											shipl.slsalline = salline.slline)) as nbcolship
    FROM items,   
         shipgrline,   
         shipline,
			shiphead,
			adresses,
			yv_linkitad,
			salline
	WHERE shiphead.shcode = :al_ne AND
		shipgrline.glshipid = shiphead.shcode AND
		shipline.slcode = shipgrline.glshipid AND
		shipline.slline = shipgrline.glshipline AND
		shipline.slitem = items.itcode AND
		shipline.slsalorder = salline.slcode AND
		shipline.slsalline = salline.slline AND
		shipgrline.gllevel = 3 AND
		items.itum = 'KG' AND
		adresses.adcode = shiphead.shcust AND
		isnull((select edilink.elfct from edilink where adresses.addesadvediseq = edilink.elseq), '') = 'desadv_02' AND
		yv_linkitad.lktyp = 'S' AND
		yv_linkitad.lkitem = items.itcode AND
		yv_linkitad.lkadcode = shiphead.shcust AND
		yv_linkitad.lkcheckpc = 'Y' 

 GROUP BY items.itcode,
			items.itname,
			items.itum,
			salline.slcode,
			salline.slline,
			shipline.slcode,
			shipline.slline, 
			salline.sluomord,
			nbpccol,
			shiphead.shcode,
			sumslqtyord,
			sumslqtyreq  
  
 ORDER BY salline.slcode,
	
```

## Colonnes
| Colonne |
|---------|
| items_itcode |
| items_itname |
| items_itum |
| salline_slcode |
| salline_slline |
| shipline_slcode |
| shipline_slline |
| umpc |
| nbpccol |
| sumslqtyord |
| sumslqtyreq |
| sumglqty |
| sumglqtypc |
| nbcolship |

