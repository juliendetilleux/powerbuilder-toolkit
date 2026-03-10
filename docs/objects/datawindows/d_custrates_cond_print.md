# d_custrates_cond_print

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
			(Select * from sp_getsalprice_real( :as_AdCode, code_article, 1,:adt_datetarif ))  px_vente,
			items.itum,
			items.itmccode ,
			items.itumtarif,		//HA2404
			items.itisumtarif, //HA2404
			items.itumtarifconv //HA2404
	From items
	Where items.itactiv = 'Y' And
			  items.itsale = 'Y'
	Order by code_article


```

## Colonnes
| Colonne |
|---------|
| code_article |
| article |
| groupe_art |
| sous_groupe_art |
| client |
| px_vente |
| items_itum |
| items_itmccode |
| itumtarif |
| itisumtarif |
| itumtarifconv |

