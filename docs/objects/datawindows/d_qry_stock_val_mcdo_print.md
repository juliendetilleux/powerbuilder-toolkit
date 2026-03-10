# d_qry_stock_val_mcdo_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
  SELECT items.itcode,   
         items.itname,   
         items.itum,   
         items.ittyp,   
         items.itstdpur,  
         (select sum(lostock) from lots where lots.loitem = items.itcode and lots.lost like :as_lotwc) as itstock,   
         0 as salhead,
         0 as sallin,
         items.itlastissue,
         items.itcat,
         items.itstat1, 
         items.itstat2,
		(select itstat2.isdesc from itstat2 where itstat2.iscode = items.itstat1 and itstat2.iscode2 = items.itstat2) as isdesc,
		isnull(items.itmccode, '##########') as itmccode 
    FROM items  
   WHERE ( items.itcons = 'N' ) AND  
         ( items.itstock <> 0 ) AND  
         ( items.itcode not like '###########%' )  
UNION
  SELECT stocks_f.stitem,   
         salpline.sldesc,   
         salpline.slum,   
         'M',
			stocks_f.ststdval,
         sum(stocks_f.stqty),   
         stocks_f.stsalhead,
         stocks_f.stsallin,
         null,
         null, 
         null,
         null,
		null as isdesc ,
		'##########' as itmccode    
    FROM stocks_f,   
         salpline  
   WHERE ( stocks_f.stsalhead = salpline.slcode ) and  
         ( stocks_f.stsallin = salpline.slline ) and  
         ( ( stocks_f.stitem = '###########M' ) ) 
GROUP BY  stocks_f.stitem, salpline.sldesc, salpline.slum ,stocks_f.ststdval,stocks_f.stsalhead, stocks_f.stsallin, isdesc, itmccode  
 
ORDER BY 14, 11, 12, 1
```

## Colonnes
| Colonne |
|---------|
| itcode |
| itname |
| itum |
| ittyp |
| itstdpur |
| stockqty |
| salhead |
| sallin |
| itlastissue |
| itcat |
| itstat1 |
| itstat2 |
| isdesc |
| itmccode |

