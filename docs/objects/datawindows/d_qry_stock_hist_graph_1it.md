# d_qry_stock_hist_graph_1it

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT days(date(today()), 1) myday ,
			items.itstock
    FROM items
   WHERE ( items.itcode = :Selected_item )
UNION ALL 
  SELECT date(histostock.hsdatim),  
			sum(histostock.hsqty * transactions.trsign) 
    FROM histostock,   
         transactions  
   WHERE ( histostock.hscode = transactions.trcode ) and  
         ( histostock.hsitem = :Selected_item ) AND  
         ( histostock.hsdatim >= :Startdate ) 
	group by date(histostock.hsdatim)
order by 1 desc
```

## Colonnes
| Colonne |
|---------|
| myday |
| itstock |

