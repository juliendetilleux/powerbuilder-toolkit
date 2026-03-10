# d_fil_act_worker_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aadesc,   
         adrsactions.aatiming,   
         filehead.fhcode,   
         filehead.fhdesc,   
         adrsactions.aastatus,   
         adrsactions.aaadrid,   
         adresses.adname,
         adrsactions.aaaction , 
	 		adresses.adcode,
			fileline.flline,
			fileline.fldesc
    FROM adrsactions,
			filehead, 
         adresses,
			fileline  
   WHERE ( adresses.adcode = adrsactions.aaadrid ) and  
         ( adrsactions.aafileref = filehead.fhcode ) and   
			( adresses.adcode = adrsactions.aaadrid ) and  
         ( adrsactions.aaactiondate between :Start_date and :End_date ) and  
         ( adrsactions.aatiming <> 0 ) and
			(filehead.fhcode = fileline.flcode) and
			(fileline.flline = adrsactions.aafileline) and
			( adrsactions.aastatus < '4' )

 UNION ALL

  SELECT adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aadesc,   
         adrsactions.aatiming,   
         -1,   
         'Pas attaché à une affaire',   
         adrsactions.aastatus,   
         adrsactions.aaadrid,   
         adresses.adname,
         adrsactions.aaaction , 
		   adresses.adcode,
			-1,
			'Pas attaché à un sous-projet'   
    FROM adrsactions,
         adresses
   WHERE ( adresses.adcode = adrsactions.aaadrid ) and  
			(( adrsactions.aafileref is null ) or ( adrsactions.aafileref < 1 )) and
         ( adrsactions.aaactiondate between :Start_date and :End_date ) and  
         ( adrsactions.aatiming <> 0 ) and
			( adrsactions.aastatus < '4' )    
ORDER BY 1 ASC, 10 ASC, 5 ASC, 12 ASC, 2 ASC

```

## Colonnes
| Colonne |
|---------|
| adrsactions_aarespons |
| adrsactions_aaactiondate |
| adrsactions_aadesc |
| adrsactions_aatiming |
| filehead_fhcode |
| filehead_fhdesc |
| adrsactions_aastatus |
| adrsactions_aaadrid |
| adresses_adname |
| adrsactions_aaaction |
| adresses_adcode |
| fileline_flline |
| fileline_fldesc |

