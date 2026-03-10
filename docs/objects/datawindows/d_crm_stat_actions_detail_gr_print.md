# d_crm_stat_actions_detail_gr_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adrsactions.aacreadate,   
         adrsactions.aaactiondate,   
         adresses.adname,   
         adrsactions.aaadrid,   
         adrsactions.aadesc,   
         adrsactions.aarespons,   
         adrsactions.aacomment, 
         adrsactions.aatiming   ,
		adresses.addesc2,
		adresses.adtype,
		adresses.adzip,
		adresses.adloc,
		adresses.adtel,   
		(select ctname from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ) ,
		(select ctline from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ) ,
		(select ctciv1 from contacts where ctmain = 'Y'and contacts.ctadcode = adresses.adcode ) civ1 ,
         (select choices.chname from choices where chtype = 'CIV1' and chcode = civ1 ) civilit,
		adresses.adcountrid,
		(select choiceline.clname from choiceline where clcode = 'ADTP' and clline = adresses.adtype ) adtypnom   
    FROM adrsactions,   
         adresses  
   WHERE ( adresses.adcode = adrsactions.aaadrid )   
 

```

## Colonnes
| Colonne |
|---------|
| adrsactions_aacreadate |
| adrsactions_aaactiondate |
| adresses_adname |
| adrsactions_aaadrid |
| adrsactions_aadesc |
| adrsactions_aarespons |
| adrsactions_aacomment |
| adrsactions_aatiming |
| adresses_addesc2 |
| adresses_adtype |
| adresses_adzip |
| adresses_adloc |
| adresses_adtel |
| ctname |
| ctline |
| civ1 |
| civilit |
| adresses_adcountrid |
| adtypnom |

