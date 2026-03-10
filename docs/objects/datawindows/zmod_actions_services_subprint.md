# zmod_actions_services_subprint

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_mod
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacode,   
         adrsactions.aaadrid,   
         adrsactions.aacontactid,   
         adrsactions.aaaction,   
         adrsactions.aacreator,   
         adrsactions.aarespons,   
         adrsactions.aaactiondate,   
         adrsactions.aalimitdate,   
         adrsactions.aatiming,   
         adrsactions.aaparcode,   
         adrsactions.aastatus,   
         adrsactions.aacomment,   
         adrsactions.aadesc,   
         adrsactions.aacreadate,   
         adrsactions.aaprojet,   
         adrsactions.aaread,   
         adrsactions.aareaddate,   
         adrsactions.aastsdat,   
         adrsactions.aamoddat,   
         adrsactions.aamoduser,   
         adrsactions.aafileref,   
         adrsactions.aawccost,   
         adrsactions.aauscost,   
         adrsactions.aarealcost,   
         adrsactions.aainvstatus,   
         adrsactions.aafileline,   
         adrsactions.aarealtiming,   
         adrsactions.aaextratiming,   
         adrsactions.aasalorder,   
         adrsactions.aasalline,   
         adrsactions.aainvoicehead,   
         adrsactions.aainvoiceline,   
         activities.acfacturability,   
         adrsactions.aafarunid,
         ( select fhdesc from filehead where filehead.fhcode = adrsactions.aafileref),   
         ( select fldesc from fileline where fileline.flcode = adrsactions.aafileref and fileline.flline = adrsactions.aafileline ),
			activities.acdesc,
			( select sum(fatimeinv) from fileactvar where fileactvar.farunid = adrsactions.aafarunid) as invoicable,
			(Select lkadref
				From Linkitad
				Where Linkitad.lkactiv = 'Y'
					And Linkitad.lktyp = 'S'
					And Linkitad.lkitem = Invoiceline.ilitem
					And Linkitad.lkadcode = Invoicehead.ihcust) AS lkadref,
			Invoiceline.ilitem
    FROM adrsactions,   
         activities,
			invoicehead,
			invoiceline  
   WHERE activities.accode = adrsactions.aaaction AND
		adrsactions.aainvoicehead = :al
```

## Colonnes
| Colonne |
|---------|
| aacode |
| aaadrid |
| aacontactid |
| aaaction |
| aacreator |
| aarespons |
| aaactiondate |
| aalimitdate |
| aatiming |
| aaparcode |
| aastatus |
| aacomment |
| aadesc |
| aacreadate |
| aaprojet |
| aaread |
| aareaddate |
| aastsdat |
| aamoddat |
| aamoduser |
| aafileref |
| aawccost |
| aauscost |
| aarealcost |
| aainvstatus |
| aafileline |
| aarealtiming |
| aaextratiming |
| aasalorder |
| aasalline |
| aainvoicehead |
| aainvoiceline |
| activities_acfacturability |
| adrsactions_aafarunid |
| cfhdesc |
| cfldesc |
| activities_acdesc |
| invoicable |
| clkadref |
| invoiceline_ilitem |

