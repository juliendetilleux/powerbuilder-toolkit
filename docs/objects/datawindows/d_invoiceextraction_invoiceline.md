# d_invoiceextraction_invoiceline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _projects
- **Table principale**: 0

## SQL
```sql
  SELECT invoiceline.ilcode,   
         invoiceline.illine,   
         invoiceline.ilsalorder,   
         invoiceline.ilsalline,   
         invoiceline.ilitem,   
         invoiceline.ilitcustnam,   
         invoiceline.ilstdval,   
         invoiceline.iltva,   
         invoiceline.ilcomment,   
         invoiceline.ilqtycust,   
         invoiceline.ilrist,
	    invoicehead.ihcodemc   
    FROM invoiceline,
	   invoicehead  
   WHERE invoiceline.ilcode = :ran_code AND
	   invoicehead.ihcode = invoiceline.ilcode   

```

## Colonnes
| Colonne |
|---------|
| ilcode |
| illine |
| ilsalorder |
| ilsalline |
| ilitem |
| ilitcustnam |
| ilstdval |
| iltva |
| ilcomment |
| ilqtycust |
| ilrist |
| invoicehead_ihcodemc |

