# d_qry_sales_ca_graph

- **Type**: DataWindow
- **Style**: Group
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
/* Attention, le SELECT est retravaillé dans le code de w_qry_cmpny_sal lorsqu'on click sur le bouton refresh */
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

