# d_proforma_print

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _prints_std
- **Table principale**: 0

## SQL
```sql
  SELECT profoline.plcode,   
         profoline.plline,   
         profoline.plitem,   
         profoline.plitcustnam,   
         profoline.plqtycust,   
         profoline.plstdval,   
         profoline.plsalval,   
         profoline.pltva,   
         profoline.pltvaval,   
         profoline.pltotval,   
         profohead.phcust,   
         profohead.phdate,   
         adresses.adname,   
         adresses.adadr1,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr,   
         profohead.phcurr,   
         profoline.pluomord,   
         profohead.phsalval,   
         profohead.phtvaval,   
         profohead.phtotval,   
         profoline.pldlvt,   
         profoline.pldlvtplace,   
         choices.chname ,
			profoline.pltype 
    FROM profoline,   
         profohead,   
         adresses ,
			choices
   WHERE ( ( profoline.plcode = :ran_code ) ) and
			( profoline.plcode = profohead.phcode ) and  
         ( profohead.phcust = adresses.adcode ) and  
			( profoline.pldlvt = choices.chcode ) and
			( choices.chactiv = 'Y' ) and
			( choices.chtype = 'DLVT' ) and
         ( profohead.phactiv = 'Y' )    

```

## Colonnes
| Colonne |
|---------|
| plcode |
| plline |
| plitem |
| plitcustnam |
| plqtycust |
| plstdval |
| plsalval |
| pltva |
| pltvaval |
| pltotval |
| profohead_phcust |
| profohead_phdate |
| adresses_adname |
| adresses_adadr1 |
| adresses_adzip |
| adresses_adloc |
| adresses_adcountr |
| profohead_phcurr |
| profoline_pluomord |
| profohead_phsalval |
| profohead_phtvaval |
| profohead_phtotval |
| profoline_pldlvt |
| profoline_pldlvtplace |
| choices_chname |
| profoline_pltype |

