# d_crm_sales_ca_graph

- **Type**: DataWindow
- **Style**: Group
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
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

