# d_qry_puritems_certif_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adcode,   
         items.itcode,   
         items.itname,   
         adresses.adname,   
         linkitad.lkdatecertif,   
         isnull(linkitad.lknbdaycertif,0) as lknbdaycertif   
    FROM adresses,   
         items,   
         linkitad  
   WHERE ( linkitad.lkitem = items.itcode ) AND  
         ( linkitad.lkadcode = adresses.adcode )  AND  
		linkitad.lktyp = 'P' AND 
		linkitad.lkactiv = 'Y' AND 
		items.itactiv = 'Y' AND 
		adresses.adactiv = 'Y' AND 
		isnull(linkitad.lkwithcertif,'N') = 'Y' AND
		linkitad.lkdatecertif is not null AND
		(linkitad.lkdatecertif - isnull(linkitad.lknbdaycertif,0)) <= :adt_horizon 
     
ORDER BY adresses.adcode , items.itcode

```

## Colonnes
| Colonne |
|---------|
| adresses_adcode |
| items_itcode |
| items_itname |
| adresses_adname |
| linkitad_lkdatecertif |
| lknbdaycertif |

