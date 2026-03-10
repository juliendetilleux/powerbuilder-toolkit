# d_sale_stat_val_subprint

- **Type**: DataWindow
- **Style**: Composite
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT itstat1.imdesc,   
         itstat2.isdesc,   
         invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv,
         invoicehead.ihcode,
         invoiceline.illine
    FROM invoicehead,   
         invoiceline,   
         items,   
         itstat1,   
         itstat2  
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( items.itstat1 = itstat1.imcode ) and  
         ( items.itstat1 = itstat2.iscode ) and  
         ( items.itstat2 = itstat2.iscode2 ) and  
         ( invoicehead.ihdate >= :datedebut ) AND  
         ( invoicehead.ihdate <= :datefin ) and
         ( invoiceline.iltype in ( 'A', 'C', 'I', 'D','R' ) )   AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
UNION all 
  SELECT 'N/A',   
         'N/A',   
         invoiceline.ilnetval * invoicehead.ihfacnot / invoicehead.ihcurconv,
         invoicehead.ihcode,
         invoiceline.illine  
    FROM invoicehead,   
         invoiceline
   WHERE ( invoiceline.ilcode = invoicehead.ihcode ) and  
         ( invoicehead.ihdate >= :datedebut ) AND  
         ( invoicehead.ihdate <= :datefin ) and
         ( invoiceline.iltype in ( 'N', 'P' ) )    AND
(:MultiCo = '*' OR :MultiCo = coalesce(ihmccode,'##########')) /*jm012 */
order by 1 asc, 2 asc

```

## Colonnes
| Colonne |
|---------|
| itstat1_imdesc |
| compute_0003 |

