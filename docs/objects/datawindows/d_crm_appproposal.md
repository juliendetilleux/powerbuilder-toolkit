# d_crm_appproposal

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales_crm
- **Table principale**: 0

## SQL
```sql
SELECT  linkappad.laadcode,
        appline.alsort,		
		dateadd( year, datediff( year, apphead.ahmajdat, today()) , apphead.ahmajdat) as datelimite,
        (select count(adrsactions.aacode) from adrsactions where adrsactions.aaaction = apphead.ahaction and adrsactions.aaadrid = linkappad.laadcode and adrsactions.aaactiondate >= datelimite ) as actiondone,
        truncnum(datediff(day, datelimite, today())/ actionday, 0) as actionneeded,
        linkappad.lanumact as actiontotal,				
        isnull((select max(adrsactions.aaactiondate) from adrsactions where adrsactions.aaaction = apphead.ahaction and adrsactions.aaadrid = linkappad.laadcode and adrsactions.aaactiondate >= datelimite),
                isnull((select max(adrsactions.aaactiondate) from adrsactions where adrsactions.aaadrid = laadcode and apphead.ahaction = adrsactions.aaaction ), '1900-01-01 00:00:00')) as lastaction,
		round(365/actiontotal, 0) as actionday,
		dateadd( day,actionday, lastaction) as dateshould,
        datediff(day, dateshould, today()) as ecart,
        ecart/alsort as tri,
		adresses.adname,
		adresses.adzip,
		adresses.adadr1,
		adresses.adadr2,
		adresses.adloc,
		adresses.adcountrid,
		adresses.adcountr,
		adresses.adtel,
		adresses.admail,
		adresses.adlang,
		contacts.ctline,
		contacts.ctname,
		contacts.ctfirstname,
		contacts.cttel,
		contacts.ctmail,
		appline.alname,
		adresses.adsalesman,
		apphead.ahaction
    FROM linkappad
        join apphead on apphead.ahid = linkappad.laahid
        join appline on appline.alahid = apphead.ahid and appline.alid = linkappad.laalid
		join adresses on adresses.adcode = linkappad.laadcode
		join contacts on contacts.ctadcode = linkappad.laadcode and contacts.ctline = linkappad.lacontact
	WHERE actiontotal > 0
		and ( ecart > ( 0 - apphead.ahsee ) or actiondone < actionneeded )
        and laahid = :an_ahid
	GROUP BY linkappad.laadcode,
			apphead.ahmajdat,
			appline.alsort,
			actiondone,
			a
```

## Colonnes
| Colonne |
|---------|
| linkappad_laadcode |
| appline_alsort |
| datelimite |
| actiondone |
| actionneeded |
| actiontotal |
| lastaction |
| actionday |
| dateshould |
| ecart |
| tri |
| adresses_adname |
| adresses_adzip |
| adresses_adadr1 |
| adresses_adadr2 |
| adresses_adloc |
| adresses_adcountrid |
| adresses_adcountr |
| adresses_adtel |
| adresses_admail |
| adresses_adlang |
| contacts_ctline |
| contacts_ctname |
| contacts_ctfirstname |
| contacts_cttel |
| contacts_ctmail |
| appline_alname |
| adresses_adsalesman |
| apphead_ahaction |

