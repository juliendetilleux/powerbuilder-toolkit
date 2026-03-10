# zmod_invoice_itstat_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT 1 sortcriteria,
         min(items.itintrastat) intrastat,
         min(items.itwistat) itwistat,
         sum(invoiceline.ilqty) qty,    
         sum(invoiceline.ilsalval) salval,
         sum(invoiceline.ilnetval) netval,   
         min(invoicehead.ihtyptva) typtva 
    FROM items,
         invoiceline,
         invoicehead  
   WHERE ( invoiceline.ilcode      = :Selected_invoice ) and
         ( invoiceline. ilcode = invoicehead.ihcode ) and
         ( invoiceline.ilitem = items.itcode ) and 
         ( invoiceline.iltype in ( 'A' , 'I' ) ) and
         ( invoiceline.ilitem Not Like '###########%' )
group by invoiceline.iltype, invoiceline.ilitem, invoiceline.ilsalorder,invoiceline.ilsalline,
invoiceline.ilshiporder 
UNION ALL
  SELECT 2 ,
         items.itintrastat,
         items.itwistat, 
         invoiceline.ilqty,    
         invoiceline.ilsalval,
         invoiceline.ilnetval,   
         invoicehead.ihtyptva 
    FROM items,
         invoiceline,
         invoicehead  
   WHERE ( invoiceline.ilcode      = :Selected_invoice ) and
         ( invoiceline. ilcode = invoicehead.ihcode ) and
         ( invoiceline.ilitem = items.itcode ) and 
         ( invoiceline.iltype = 'C' )
UNION ALL
  SELECT 3 ,
         items.itintrastat,
         items.itwistat, 
         invoiceline.ilqty,    
         invoiceline.ilsalval,
         invoiceline.ilnetval,   
         invoicehead.ihtyptva 
    FROM items,
         invoiceline,
         invoicehead  
   WHERE ( invoiceline.ilcode      = :Selected_invoice ) and
         ( invoiceline. ilcode = invoicehead.ihcode ) and
         ( invoiceline.ilitem = items.itcode ) and 
         ( invoiceline.iltype = 'R' )

```

## Colonnes
| Colonne |
|---------|
| items_sortcriteria |
| cintrastat |
| citwistat |
| cqty |
| csalval |
| cnetval |
| ctyptva |

