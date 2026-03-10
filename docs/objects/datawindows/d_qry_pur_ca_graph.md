# d_qry_pur_ca_graph

- **Type**: DataWindow
- **Style**: Group
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
   SELECT  convert( char, (year(purinvhead.pidate)*100 + month(purinvhead.pidate))) period ,   
         sum(purinvhead.pipurval * purinvhead.pifacnot / purinvhead.picurconv) periodval   
    FROM purinvhead 
group by period 
ORDER BY 1 ASC 

```

## Colonnes
| Colonne |
|---------|
| period |
| periodval |

