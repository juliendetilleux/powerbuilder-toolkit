# zd_inv_followup_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT salhead.shcode,
         salline.slline,   
         salline.slqtyreq,
         salline.slqtyreal, 
         salhead.shcust,
         (select sum(invoiceline.ilqty * invoicehead.ihfacnot) 
			   from invoicehead, invoiceline 
			  where invoiceline.ilcode = invoicehead.ihcode and 
					  invoiceline.ilsalline = salline.slline and
					  invoiceline.ilsalorder = salhead.shcode and
                 invoicehead.ihcurr = salhead.shcurr ) as qtfact,
         salline.slunitprice * salline.slqtyreq as mtcom,
  	      (select sum(invoiceline.ilsalval) 
			   from invoiceline, invoicehead
			  where invoiceline.ilsalline = salline.slline and
					  invoiceline.ilsalorder = salhead.shcode and
                 invoiceline.ilcode = invoicehead.ihcode and 
                 invoicehead.ihcurr = salhead.shcurr ) as mtfact,
         (select items.itname from items where items.itcode = salline.slitem),
         salline.slfileref,
         salline.slfileline,
         (select filehead.fhdesc from filehead where filehead.fhcode = salline.slfileref),
         (select fileline.fldesc 
            from fileline 
           where fileline.flcode = salline.slfileref and
                 fileline.flline = salline.slfileline),
         (select sum(mfghead.mhmfgqty) 
				from mfghead 
			  where mfghead.mhsalline = salline.slcode 
				 and mfghead.mhsalhead = salhead.shcode) as qtbuil,
         salhead.shcurr
    FROM salhead,
         salline
   WHERE ( salhead.shcode = salline.slcode ) and
         ( salhead.shcust = :as_adcode  ) and
         ( salline.slfileref is not null ) and
         ( salline.slfileline is not null ) AND
			( salline.slstatus < '9' )
         

```

## Colonnes
| Colonne |
|---------|
| salhead_shcode |
| salline_slline |
| salline_slqtyreq |
| salline_slqtyreal |
| salhead_shcust |
| cqtfact |
| cmtcom |
| cmtfact |
| citname |
| salline_slfileref |
| salline_slfileline |
| cfhdesc |
| cfldesc |
| cqtbuil |
| salhead_shcurr |

