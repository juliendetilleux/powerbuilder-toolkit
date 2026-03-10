# d_qry_sales_ca_graph_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_qry
- **Table principale**: 0

## SQL
```sql
/* jm012 Attention, le select est remplacé par programmation !*/
   SELECT  convert( char, (year(invoicehead.ihdate)*100 + month(invoicehead.ihdate))) period ,   
         sum(invoicehead.ihsalval * invoicehead.ihfacnot / invoicehead.ihcurconv) periodval   
    FROM invoicehead 
group by period 
ORDER BY 1 ASC 
```

## Colonnes
| Colonne |
|---------|
| period |
| periodval |

