# d_ico_sales_ship_print

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
			salline.slqtyalloc qty_alloc,
         salhead.shcust cust,
			isnull( ( select min(sltransfered)
							 from shipline
							 where shipline.slsalorder = cmde_vente and shipline.slsalline = ligne_vente)
						 , 'N') tf_status 
	 from salhead, salline, items
	where items.itcode = salline.slitem and
			salhead.shcode = salline.slcode and
         cust = ( SELECT parameters.pmcval FROM parameters  WHERE parameters.pmcode = 'IFCUST' ) and 
			( salline.slstatus < '6' or tf_status = 'N' ) and 
         salline.slstatus < '9' and
			salline.slwebidhead is not null 
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
| salline_qty_alloc |
| salhead_cust |
| ctf_status |

