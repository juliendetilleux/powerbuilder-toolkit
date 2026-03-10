# d_promo_export_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT promohead.phcode,   
         promohead.phname,   
         promohead.phstartdate,   
         promohead.phstopdate,   
         promohead.phrateid,   
         promohead.phdesc,
	    promoline.plline,   
         promoline.plitem,   
         promoline.plitstat1,   
         promoline.plitstat2,   
         promoline.pltyp,   
         promoline.plqty1,   
         promoline.plqty2,   
         promoline.pldiscpc,   
         ( select itstat1.imdesc from itstat1 where itstat1.imcode = promoline.plitstat1 ) as itstat1desc,   
         ( select itstat2.isdesc from itstat2 where itstat2.iscode = promoline.plitstat1 and itstat2.iscode2 = promoline.plitstat2 ) as itstat2desc, 
		( select itname from items where items.itcode = promoline.plitem ) as itemname,
		IF plitem IS not null THEN
			IF plitem = '*' THEN
				 'Tous les articles'
			ELSE
				'Article ' + plitem + ',' +  itemname  
			ENDIF
		ELSE 
			if  plitstat1 = '*' THEN
				'Toutes les familles' 
			ELSE
				'Famille ' + itstat1desc  + IF  plitstat2 = '*'  THEN
													'' 
												ELSE
													 '/' +  itstat2desc  
												ENDIF
			ENDIF
		ENDIF as object,
		
		CASE  pltyp 
			when '1' then  CAST( pldiscpc as varchar) + '%' 
			when '2' then  CAST(plqty1 as varchar) + ' pour le prix de ' +  CAST(plqty2 as varchar)
			when '3' then  CAST(pldiscpc as varchar) + '% à partir de ' +  CAST(plqty2 as varchar)
			when '4' then  cast(plqty1 as varchar) + ' + '  + cast(plqty2 as varchar) + ' gratuit(s)' 
			when '5' then  'Prix fixe '+cast(pldiscpc as varchar) + '%'
			when '6' then  'Prix fixe ' + cast(pldiscpc as varchar) + '%' + ' à partir de ' +  cast(plqty2 as varchar)
			when '7' then  'Prix -' + cast(pldiscpc as varchar) + '%' + ' à partir de ' +  cast(plqty2 as varchar)
		END as ristdesc

    FROM promohead  
		JOIN promoline ON promoline.plcode = promohead.phcode
   WHERE promohead.phactiv = 'Y'   
ORDER BY promohead.phstartdate ASC  , 

```

## Colonnes
| Colonne |
|---------|
| phcode |
| phname |
| phstartdate |
| phstopdate |
| phrateid |
| phdesc |
| promoline_plline |
| promoline_plitem |
| promoline_plitstat1 |
| promoline_plitstat2 |
| promoline_pltyp |
| promoline_plqty1 |
| promoline_plqty2 |
| promoline_pldiscpc |
| itstat1desc |
| itstat2desc |
| itemname |
| object |
| ristdesc |

