# d_colisage_salgegroup

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT salegroup.sgcode,   
         salegroup.sgsalhead,   
         salegroup.sgsalline,   
         salegroup.sgkey1,   
         salegroup.sgkey2,   
         salegroup.sgkey3,   
         salegroup.sgqty,   
         salegroup.sglevel,   
         salegroup.sgparentid,   
         salegroup.sgid,   
         salegroup.sgconssale,   
         salegroup.sgweight,
		items.itcode,
		items.itname,
		lots.locode,
		lots.loorgcode,
		lots.loexpdat,

 		IF TRIM( isnull( (SELECT 	if isnull(lkeanref3,'') = '2' then
								isnull( lkean3, '' )
							else
								if isnull(lkeanref2,'') = '2' then
									isnull( lkean2, '' )
								else
									isnull( lkean1, '' )
								endif
							endif
					 FROM yv_linkitad  
					WHERE ( yv_linkitad.lkitem = items.itcode) AND  
							( yv_linkitad.lkadcode = salhead.shcust ) AND  
							( yv_linkitad.lktyp = 'S' )   ), '' )) = '' THEN	/*artilce*/
	
			if isnull(itean3ref,'') = '2' then
				isnull( itean3, '' )
			else
				if isnull(itean2ref,'') = '2' then
					isnull( itean2, '' )
				else
					isnull( itean, '' )
				endif
			endif 

		ELSE	/*lien article client*/
	
			 isnull( (SELECT 	if isnull(lkeanref3,'') = '2' then
						isnull( lkean3, '' )
					else
						if isnull(lkeanref2,'') = '2' then
							isnull( lkean2, '' )
						else
							isnull( lkean1, '' )
						endif
					endif
			 FROM yv_linkitad  
			WHERE ( yv_linkitad.lkitem = items.itcode) AND  
					( yv_linkitad.lkadcode = salhead.shcust ) AND  
					( yv_linkitad.lktyp = 'S' )   ), '' )

		ENDIF as ean,
  		1 as nbprint,

		items.itum,
		salline.slcustref
    FROM salegroup 
		JOIN salhead ON salhead.shcode = salegroup.sgsalhead
		LEFT OUTER JOIN  salline ON salline.slcode = salegroup.sgsalhead AND
											salline.slline = salegroup.sgsalline
		LEFT OUTER JOIN  items ON items.itcode = salegroup.sgkey1
		LEFT OUTER JOIN  lots ON lots.locode = salegroup.sgkey2
  WHERE salegroup.sgsalh
```

## Colonnes
| Colonne |
|---------|
| salegroup_sgcode |
| salegroup_sgsalhead |
| salegroup_sgsalline |
| salegroup_sgkey1 |
| salegroup_sgkey2 |
| salegroup_sgkey3 |
| salegroup_sgqty |
| salegroup_sglevel |
| salegroup_sgparentid |
| salegroup_sgid |
| salegroup_sgconssale |
| salegroup_sgweight |
| items_itcode |
| items_itname |
| lots_locode |
| lots_loorgcode |
| lots_loexpdat |
| ean |
| nbprint |
| items_itum |
| salline_slcustref |

