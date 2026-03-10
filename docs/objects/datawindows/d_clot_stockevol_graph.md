# d_clot_stockevol_graph

- **Type**: DataWindow
- **Style**: Group
- **Module**: _monthclot
- **Table principale**: clotfinit

## SQL
```sql
   SELECT  clotfinit.ciperiod as period ,   
         sum((clotfinit.ciqty - isnull(clotfinit.ciqtywip, 0 )) * clotfinit.cistdconf ) stockval,
			'Valeur stock Magasin' as stocktyp
    FROM clotfinit 
	WHERE clotfinit.cityp = 'I' 
 group by period 
 
 UNION ALL 
 
    SELECT  clotfinit.ciperiod as period ,   
			sum(isnull(clotfinit.ciqtywip, 0) * clotfinit.cistdconf) ,
			'Valeur Stock WIP'
    FROM clotfinit 
	WHERE clotfinit.cityp = 'I' 
 group by period 
 
 ORDER BY 1 ASC ;

```

## Colonnes
| Colonne |
|---------|
| period |
| stockval |
| stocktyp |

