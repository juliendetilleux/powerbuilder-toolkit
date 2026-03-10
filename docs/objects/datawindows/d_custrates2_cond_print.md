# d_custrates2_cond_print

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
			(Select * from sp_getsalprice_real( :as_AdCode, code_article, 1,:adt_datetarif )) as  px_vente,
			items.itum,
			items.itmccode,
			items.itumtarif,		//sd0156
			items.itisumtarif, //HA2404
			items.itumtarifconv //HA2404
	From items, yv_linkitad
	Where items.itactiv = 'Y' And
			  items.itsale = 'Y' And
			  yv_linkitad.lktyp = 'S' And
	  		  yv_linkitad.lkitem = items.itcode And
			  yv_linkitad.lkadcode = :as_adcode
	Order by code_article


```

## Colonnes
| Colonne |
|---------|
| items_code_article |
| items_article |
| items_groupe_art |
| items_sous_groupe_art |
| client |
| px_vente |
| items_itum |
| items_itmccode |
| items_itumtarif |
| items_itisumtarif |
| items_itumtarifconv |

