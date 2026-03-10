# d_ico_sal_print

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
			slqtyreq quantity ,
			items.itum UM, 
			salline.slstatus ,
			salline.slwebidhead cmde_achat,
			salline.slwebidline ligne_achat,
			salline.slqtyreal qty_ship,
         salhead.shcust cust
	 from salhead, salline, items
	where items.itcode = salline.slitem and
			salhead.shcode = salline.slcode and
			salline.slstatus < '6' and
         cust = ( SELECT parameters.pmcval FROM parameters  WHERE parameters.pmcode = 'IFCUST' )
order by cmde_vente, ligne_vente

```

## Colonnes
| Colonne |
|---------|
| salhead_cmde_vente |
| salhead_ligne_vente |
| salhead_article |
| items_description |
| salhead_quantity |
| items_um |
| salline_slstatus |
| ccmde_achat |
| cligne_achat |
| salline_qty_ship |
| salhead_cust |

