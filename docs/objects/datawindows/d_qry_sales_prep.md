# d_qry_sales_prep

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
select salline.slitem,
       items.itname,
       isnull((salline.slqtyreq - salline.slqtyalloc),0) as prepqty,
       isnull((select sum(stocks.stqty - stocks.stalloc) from stocks where stocks.stitem = salline.slitem),0) as stockqty,
       adresses.adname,
       salline.slcode,
       items.itstat1,
       items.itstat2,
       salhead.shcust,
       adresses.adgrcust,
       salhead.shsalesman,
       isnull(salhead.shmccode, '##########') as cmcdo,
       salline.sldatship,
	  salline.slline,
      isnull((salline.slqtyreq - salline.slqtyreal),0) as shipqty
    from salline,
         items,
         adresses,
         salhead
    where prepqty > 0 AND
          shipqty > 0 AND
          salline.slitem = items.itcode AND
          salhead.shcust = adresses.adcode AND 
          salline.slcode = salhead.shcode AND 
          ( salline.slprintghost <> 'N' or salline.slprintghost is null ) AND
          ( salline.slstatus < '6' )
    order by salhead.shdatreq
```

## Colonnes
| Colonne |
|---------|
| salline_slitem |
| items_itname |
| prepqty |
| stockqty |
| adresses_adname |
| salline_slcode |
| items_itstat1 |
| items_itstat2 |
| salhead_shcust |
| adresses_adgrcust |
| salhead_shsalesman |
| cmcdo |
| salline_sldatship |
| salline_slline |
| shipqty |

