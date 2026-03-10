# d_custrates2_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
Select items.itcode as code_article,
			items.itname as article,
			items.itstat1 as groupe_art,
			items.itstat2 as sous_groupe_art,
			(Select adresses.adname
				From adresses
				Where adresses.adcode = :as_adcode) as client,
			(Select first rateline.rlval
				From  ratehead,
	       				rateline,
	     				adresrate,
						adresses
				Where rateline.rlitem = code_article And
						 rateline.rlval <> 0 And
						 ratehead.rhcode = rateline.rlcode And
						 rateline.rlcode = adresrate.arrateid And
						 adresrate.arcode = :as_adcode And
						 ratehead.rhtyp = 'T'   And
						 ratehead.rhactiv = 'Y'  And
						 ratehead.rhcurr = 'EUR'	And
	    					 adresrate.arstartdat <= :adt_datetarif  And
					      adresrate.arstopdat >= :adt_datetarif
				Order by adresrate.arstartdat DESC						) as px_tarif,
			items.itstdsal as px_article,
			isnull ((Select dldiscpc 
				From discline,
					    dischead,
					    linkaddiscount
				Where ( discline.dlitem = code_article															Or
						  discline.dlitem = '*'																		Or
						  ( discline.dlstat1 = groupe_art And discline.dlstat2 = '*' )					Or
						  ( discline.dlstat1 = groupe_art And discline.dlstat2 = sous_groupe_art )		) And
						  dischead.dhcode = discline.dlcode	And
						  dischead.dhstartdate <= :adt_datetarif	And
						  dischead.dhstopdate >= :adt_datetarif	And
						  linkaddiscount.lddiscount = dischead.dhcode And
						  linkaddiscount.ldcust = :as_adcode						),0) as rist,
			if px_tarif > 0
				then px_tarif - ((rist/100) * px_tarif)
				else px_article - ((rist/100) * px_article)
				endif as px_vente,
			items.itum,
			items.itmccode,
			items.itumtarif,		//HA2404
			items.itisumtarif, //HA2404
			items.itumtarifconv //HA2404
	From items, yv_linkitad
	Where items.itactiv = 'Y' And
			  items.itsale = 'Y' And
			  yv_linkitad.lktyp = 'S' And
	  		  yv_linkitad.lkitem = items.itcode And
			  yv_linkitad.lkadcode = :as_adcode
	Order
```

## Colonnes
| Colonne |
|---------|
| items_code_article |
| items_article |
| items_groupe_art |
| items_sous_groupe_art |
| client |
| px_tarif |
| items_px_article |
| rist |
| px_vente |
| items_itum |
| items_itmccode |
| items_itumtarif |
| items_itisumtarif |
| items_itumtarifconv |

