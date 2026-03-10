# d_qry_histo_transact

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT histostock.hsseq,   
         histostock.hscode,   
         histostock.hsdatim,   
         histostock.hsitem,   
         histostock.hsordno,   
         histostock.hslot,   
         histostock.hsqty,   
         histostock.hsum,   
         salhead.shcust,   
         lots.lolotctrl,   
         adresses.adname,
         items.itname,
         histostock.hsord2no,
			salhead.shcode,
			histostock.hsordlin,
			items.ittyp,    
         isnull((select slsalghost from salline where slcode = hsordno and slline = hsordlin),0) as slsalghost ,    
         isnull((select slprintghost from salline where slcode = hsordno and slline = hsordlin),'') as slprintghost
    FROM histostock,   
         salhead,   
         lots,   
         adresses,
         items  
   WHERE ( salhead.shcode = histostock.hsordno ) and  
         ( lots.locode = histostock.hslot ) and  
         ( adresses.adcode = salhead.shcust ) and  
         ( histostock.hsitem = items.itcode ) and  
         ( ( histostock.hscode like '__XO'  ) AND  
         ( histostock.hsdatim >= date('2002-07-01') ) AND  
         ( histostock.hsdatim <= date('2002-12-01') ) )   
ORDER BY histostock.hsdatim DESC   

```

## Colonnes
| Colonne |
|---------|
| histostock_hsseq |
| histostock_hscode |
| histostock_hsdatim |
| histostock_hsitem |
| histostock_hsordno |
| lot |
| histostock_hsqty |
| histostock_hsum |
| salhead_shcust |
| lots_lolotctrl |
| adresses_adname |
| items_itname |
| histostock_hsord2no |
| salhead_shcode |
| histostock_hsordlin |
| items_ittyp |
| cslsalghost |
| cslprintghost |

