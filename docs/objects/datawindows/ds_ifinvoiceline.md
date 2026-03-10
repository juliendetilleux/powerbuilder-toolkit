# ds_ifinvoiceline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT invoiceline.ilcode,   
         invoiceline.illine,   
         invoiceline.iltype,   
         invoiceline.ilsalorder,   
         invoiceline.ilsalline,   
         invoiceline.ilshiporder,   
         invoiceline.ilshipline,   
         invoiceline.ilitem,   
         invoiceline.ilitcustnam,   
         invoiceline.ilqty,   
         invoiceline.ilqtycust,   
         invoiceline.iluomord,   
         invoiceline.iluomconv,   
         invoiceline.ilstdval,   
         invoiceline.ilsalval,   
         invoiceline.iltva,   
         invoiceline.iltvaval,   
         invoiceline.iltotval,   
         invoiceline.ilcomment,   
         invoiceline.ilcptsal,   
         invoiceline.ilcptanal,   
         invoiceline.ilnetval,   
         invoiceline.ilorval,   
         invoiceline.ilrist,   
         invoiceline.ildlvt,   
         invoiceline.ilbastva,   
         invoiceline.ilrealtva,   
         invoiceline.ilfatype,   
         invoiceline.ildlvtplace,   
         invoiceline.iltransfered,
         ( select slwebidhead FROM salline wHERE slcode = invoiceline.ilsalorder  AND slline = invoiceline.ilsalline ) purhead, 
         ( select slwebidline FROM salline wHERE slcode = invoiceline.ilsalorder  AND slline = invoiceline.ilsalline ) purline
    FROM invoiceline
	WHERE invoiceline.ilcode = :ihcode AND 
			invoiceline.iltype < 'X' AND 
			isnull(iltransfered, 'N') <> 'Y'

```

## Colonnes
| Colonne |
|---------|
| ilcode |
| illine |
| iltype |
| ilsalorder |
| ilsalline |
| ilshiporder |
| ilshipline |
| ilitem |
| ilitcustnam |
| ilqty |
| ilqtycust |
| iluomord |
| iluomconv |
| ilstdval |
| ilsalval |
| iltva |
| iltvaval |
| iltotval |
| ilcomment |
| ilcptsal |
| ilcptanal |
| ilnetval |
| ilorval |
| ilrist |
| ildlvt |
| ilbastva |
| ilrealtva |
| ilfatype |
| ildlvtplace |
| iltransfered |
| purhead |
| purline |

