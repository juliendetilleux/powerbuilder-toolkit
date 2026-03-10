# d_invlines2_update

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
         invoicehead.ihcurconv,   
         invoiceline.ilnetval,   
         invoiceline.ilbastva,   
         invoiceline.ilrealtva,   
         invoiceline.iltransfered,   
         invoiceline.iltva,   
         invoiceline.ilsort,   
         invoiceline.ilshowprest  ,   
         invoiceline.iltvacalcontot,
			invoiceline.ilristorg,
			invoiceline.ilsddisc,   
         invoiceline.ilcptanal2,
		invoiceline.ilshipto 
    FROM invoiceline,   
         invoicehead  
   WHERE ( invoicehead.ihcode = invoiceline.ilcode ) and  
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
| ilqtycust |
| iluomord |
| iluomconv |
| ilstdval |
| ilsalval |
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
| invoicehead_ihcurconv |
| invoiceline_ilnetval |
| invoiceline_ilbastva |
| invoiceline_ilrealtva |
| invoiceline_iltransfered |
| iltva |
| invoiceline_ilsort |
| invoicehead_ihshowprest |
| invoiceline_iltvacalcontot |
| invoiceline_ilristorg |
| invoiceline_ilsddisc |
| invoiceline_ilcptanal2 |
| invoiceline_ilshipto |

