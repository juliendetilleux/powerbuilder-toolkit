# d_ico_sales_pur_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
select	slcode cmde_vente,
			slline ligne_vente,
			slitem article,
			itname description,
			slqtyreq quant_cmde ,
			items.itum UM, 
			salline.slstatus ,
			salline.slqtyreal qty_ship,
			salline.slqtyalloc qty_alloc,
         salhead.shcust cust,
         salline.sltransfered,
         ( select plcode from purline where plsalhead = salline.slcode and plsalline = salline.slline ) purorder,
         ( select plline from purline where plsalhead = salline.slcode and plsalline = salline.slline ) purline,
         ( select plqtyreq from purline where plsalhead = salline.slcode and plsalline = salline.slline ) qty_req,
         ( select plqtyrec from purline where plsalhead = salline.slcode and plsalline = salline.slline ) qty_rec,
         ( select pltransfered from purline where plsalhead = salline.slcode and plsalline = salline.slline ) pltransfered
	 from salhead, salline, items
	where items.itcode = salline.slitem and
			salhead.shcode = salline.slcode and
			salline.slstatus < '6' and
         items.itif2trf = 'Y'
order by cmde_vente, ligne_vente


```

## Colonnes
| Colonne |
|---------|
| salhead_cmde_vente |
| salhead_ligne_vente |
| salhead_article |
| items_description |
| salhead_quant_cmde |
| items_um |
| salline_slstatus |
| salline_qty_ship |
| salline_qty_alloc |
| salhead_cust |
| salline_sltransfered |
| cpurorder |
| cpurline |
| cqty_req |
| cqty_rec |
| cpltransfered |

