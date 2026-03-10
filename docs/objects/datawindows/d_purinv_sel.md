# d_purinv_sel

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _purch
- **Table principale**: 0

## SQL
```sql
  SELECT distinct purhead.phcode,   
         purhead.phsupp,   
         adresses.adname,   
         purline.plline,   
         purline.plitem,   
         items.itname,   
         purline.pldatsup,   
         purline.plqtyrec - purline.plqtyinv as solde,   
         items.itum,
			'#',
         0,
		purline.pldatrec,
		isnull((select linkitad.lkadref from linkitad join purhead on phsupp = linkitad.lkadcode where phcode = purline.plcode and linkitad.lkitem = items.itcode AND linkitad.lktyp = 'P'), '') as lkadref,
		'' as ordno
    FROM purhead,   
         purline,   
         adresses,   
         items  ,
		linkitad
   WHERE ( purline.plcode = purhead.phcode ) and  
         ( adresses.adcode = purhead.phsupp ) and  
         ( items.itcode = purline.plitem ) and 
	    ( if isnull((select ppvalue from progparam where ppcode = 'ITUMTRF' ),'') <> '' /*os2751*/ and isnull(items.itisumtarif,'') = 'Y' then purline.plqtyrectarif else purline.plqtyrec endif > purline.plqtyinv       ) And /*os1433*/
         ( isnull(purline.plinvclot, 'N') <> 'Y') and  
         ( purhead.phsupp = :Sel_ad ) 
UNION  all 
SELECT distinct purghead.phcode,   
         purghead.phsupp,   
         adresses.adname,   
         purgline.plline,   
         chname,   
         substr(pldesc,1,30),   
         purgline.pldatreq,   
         purgline.plqtyrec - purgline.plqtyinv,   
         '  ',
         purghead.phtype,
         purgline.plrefnum  ,
		purgline.pldatrec,
		' ',
		(select mhcode from mfghead where mhpghid = phcode)
    FROM adresses,   
         purgline,   
         purghead,   
         choices  
   WHERE ( purghead.phsupp = adresses.adcode ) and  
         ( purgline.plcode = purghead.phcode ) and  
         ( choices.chcode = purghead.phtype )  and
         ( purgline.plqtyrec > purgline.plqtyinv ) and 
         ( purghead.phsupp =  :Sel_ad )   and  
         ( isnull(purgline.plinvclot, 'N') <> 'Y') and  
         ( ( ch
```

## Colonnes
| Colonne |
|---------|
| phcode |
| purhead_phsupp |
| adresses_adname |
| plline |
| plitem |
| items_itname |
| purline_pldatsup |
| solde |
| items_itum |
| flag |
| c |
| purline_pldatrec |
| linkitad_lkadref |
| ordno |

