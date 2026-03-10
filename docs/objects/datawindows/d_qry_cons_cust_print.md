# d_qry_cons_cust_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _general
- **Table principale**: 0

## SQL
```sql
  SELECT sum(histocons.hcqty) as sumhcqty,
		histocons.hcloc,
		histocons.hcpack,
		packings.pkname,
		adresses.adname,
		adresses.adgrcust,
		(select ad.adname 
		   from adresses as ad 
		where ad.adcode = isnull((select linkmcad.lkmccode 
											 from linkmcad 
											where linkmcad.lkadcode = adresses.adcode), '##########')) as mccode 
    FROM histocons,   
         transactions,   
         transreason,
		packings,
		adresses
   WHERE ( histocons.hccode = transactions.trcode ) and  
         ( transreason.ticode = transactions.trcode ) and  
         ( histocons.hcreasn = transreason.tiimp ) and  
         ( histocons.hcowner = '##########' ) AND  
         ( histocons.hcdatim >= :start_dat ) AND  
         ( histocons.hcdatim <= :stop_dat ) AND
		histocons.hcreasn = '1' AND
		histocons.hcpack = packings.pkcode AND
		adresses.adcode = histocons.hcloc
 GROUP BY histocons.hcloc,
		histocons.hcpack,
		packings.pkname,
		adresses.adname,
		adresses.adgrcust,
		mccode 
ORDER BY histocons.hcloc,
		histocons.hcpack
		

```

## Colonnes
| Colonne |
|---------|
| sumhcqty |
| histocons_hcloc |
| histocons_hcpack |
| packings_pkname |
| adresses_adname |
| adresses_adgrcust |
| mccode |

