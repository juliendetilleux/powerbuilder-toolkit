# d_qry_sal_ca_evol

- **Type**: DataWindow
- **Style**: Group
- **Module**: _query
- **Table principale**: 0

## SQL
```sql
  SELECT sum(invoicehead.ihsalval * invoicehead.ihfacnot * invoicehead.ihcurconv)  CA,   
         ( year(invoicehead.ihdate) * 100 + month(invoicehead.ihdate) ) period
    FROM invoicehead  
   WHERE ( invoicehead.ihdate >= :Sel_horizon ) AND  
         ( invoicehead.ihcust = :Sel_adid )    
GROUP BY period

```

## Colonnes
| Colonne |
|---------|
| ca |
| period |

