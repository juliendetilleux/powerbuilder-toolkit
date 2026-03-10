# d_invlinea_update

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
- **Table principale**: 0

## SQL
```sql
  SELECT invoiceline.ilcode,   
         invoiceline.illine,   
         invoiceline.iltype,   
         invoiceline.ilsalorder,   
         invoiceline.ilsalline,   
         invoiceline.ilitem,   
         invoiceline.ilitcustnam,   
         invoiceline.ilqty,   
         invoiceline.ilqtycust,   
         invoiceline.iluomord,   
         invoiceline.iluomconv,   
         invoiceline.ilstdval,   
         invoiceline.ilsalval,   
         invoiceline.iltvaval,   
         invoiceline.iltotval,   
         invoiceline.ilcomment,   
         invoicehead.ihcurr,   
         invoiceline.ilshiporder,   
         invoiceline.ilshipline,   
         invoiceline.ilcptsal,   
         invoiceline.ilcptanal,   
         invoiceline.ilorval,   
         invoiceline.ilrist,   
         invoiceline.ildlvt,   
         invoicehead.ihcust,   
         invoiceline.ilfatype,   
         invoiceline.ildlvtplace,   
         invoiceline.ilfileref,   
         invoiceline.ilfileline,   
         invoiceline.iltva,   
         invoiceline.ilsaleprocent,   
         items.itum,
			invoiceline.ilsort,
			invoiceline.iltvacalcontot,
			invoiceline.ilristorg,
			invoiceline.ilsddisc,   
         invoiceline.ilcptanal2,
		invoiceline.ilshipto 
    FROM invoiceline,   
         invoicehead,   
         items  
   WHERE ( invoicehead.ihcode = invoiceline.ilcode ) and  
         ( invoiceline.ilitem = items.itcode ) and  
         ( ( invoiceline.ilcode = :Selected_Invoice ) AND  
         ( invoiceline.illine = :Selected_line ) )    

```

## Colonnes
| Colonne |
|---------|
| ilcode |
| illine |
| iltype |
| ilsalorder |
| ilsalline |
| ilitem |
| ilitcustnam |
| ilqty |
| base_qtycust |
| iluomord |
| iluomconv |
| ilstdval |
| base_ilsalval |
| iltvaval |
| iltotval |
| ilcomment |
| invoicehead_ihcurr |
| invoiceline_ilshiporder |
| invoiceline_ilshipline |
| invoiceline_ilcptsal |
| invoiceline_ilcptanal |
| invoiceline_ilorval |
| invoiceline_ilrist |
| invoiceline_ildlvt |
| invoicehead_ihcust |
| invoiceline_ilfatype |
| invoiceline_ildlvtplace |
| invoiceline_ilfileref |
| invoiceline_ilfileline |
| iltva |
| invoiceline_ilsaleprocent |
| items_itum |
| invoiceline_ilsort |
| invoiceline_iltvacalcontot |
| invoiceline_ilristorg |
| invoiceline_ilsddisc |
| invoiceline_ilcptanal2 |
| invoiceline_ilshipto |

