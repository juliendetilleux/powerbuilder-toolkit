# d_stock_modif

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _monthclot
- **Table principale**: 0

## SQL
```sql
  SELECT 1 as ord,
			0 as clotwip_cwmhcode,
			clotstocks.csitem,   
         items.itname,   
         clotstocks.cslot,   
         clotstocks.csloc,   
         clotstocks.csqtyorig,   
         clotstocks.csqtycorr,   
         items.itum,   
         lots.lolotctrl,   
         items.itstdpur,   
         items.itcons  
    FROM clotstocks,   
         items,   
         lots  
   WHERE ( clotstocks.csitem = items.itcode ) and  
         ( clotstocks.cslot = lots.locode ) and  			
         ( ( clotstocks.csqtyorig <> clotstocks.csqtycorr ) )  
 
union all 
 SELECT 2,
			clotwip.cwmhcode,
			clotwip.cwitem,   
         items.itname,   
         '',   
         '',   
         clotwip.cwqtyorig,   
         clotwip.cwqtycorr,   
         items.itum,
			'', 
         items.itstdpur,   
         items.itcons  
    FROM clotwip,   
         items
   WHERE ( clotwip.cwitem = items.itcode ) and  
         ( clotwip.cwtyp = 'C') and			
         ( ( clotwip.cwqtyorig <> clotwip.cwqtycorr ) )    
order by 1


```

## Colonnes
| Colonne |
|---------|
| clotstocks_ord |
| clotstocks_clotwip_cwmhcode |
| clotstocks_csitem |
| items_itname |
| clotstocks_cslot |
| clotstocks_csloc |
| clotstocks_csqtyorig |
| clotstocks_csqtycorr |
| items_itum |
| lots_lolotctrl |
| items_itstdpur |
| items_itcons |

