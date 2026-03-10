# d_ico_pur_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
select	plcode cmde_achat,
			plline ligne_achat,
			plitem article,
			itname description,
			plqtyreq quantity ,
			items.itum UM, 
			purline.plstatus, 
         purhead.phsupp,
         purline.plsalhead,
         purline.plsalline,
         purline.plqtyrec,
         purline.pltransfered 
	 from purline, items, purhead
	where items.itcode = purline.plitem and
         purhead.phcode = purline.plcode and 
			purline.plstatus < '6' and 
         purhead.phsupp = ( SELECT parameters.pmcval FROM parameters  WHERE parameters.pmcode = 'IFSUPP' )
order by cmde_achat, ligne_achat

```

## Colonnes
| Colonne |
|---------|
| ccmde_achat |
| cligne_achat |
| purline_article |
| items_description |
| purline_quantity |
| items_um |
| purline_plstatus |
| purhead_phsupp |
| purline_plsalhead |
| purline_plsalline |
| purline_plqtyrec |
| purline_pltransfered |

