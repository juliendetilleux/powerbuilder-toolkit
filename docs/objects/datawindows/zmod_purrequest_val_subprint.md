# zmod_purrequest_val_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod2t
- **Table principale**: 0

## SQL
```sql
SELECT purreqline.plcode,
		purreqline.plline,
		purreqline.plitem,
		purreqline.plqty,
		purreqline.pldatreq as datecmd,
		purreqline.plvalue,
		purreqline.plstatus,
		items.itname,
		items.itdesc2,
		items.itum,
         ( select ildesc from itemlang where ilitcode = purreqline.plitem and illgcode = :as_lang ) translate,
		(select adcurr from adresses where adcode = '##########' ) as curr
	FROM purreqhead,
		purreqline,
		items
	WHERE purreqhead.pqcode = :an_purorder
		AND purreqline.plcode = purreqhead.pqcode
    		AND purreqline.plitem = items.itcode
		AND purreqline.plstatus < '6'   
ORDER BY purreqline.plline ASC   

```

## Colonnes
| Colonne |
|---------|
| purreqline_plcode |
| purreqline_plline |
| purreqline_plitem |
| purreqline_plqty |
| datecmd |
| purreqline_plvalue |
| purreqline_plstatus |
| items_itname |
| items_itdesc2 |
| items_itum |
| ctranslate |
| curr |

