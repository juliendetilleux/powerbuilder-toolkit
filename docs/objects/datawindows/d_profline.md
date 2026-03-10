# d_profline

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _sales
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
         profohead.phsalval,   
         profohead.phtvaval,   
         profohead.phtotval,   
         profoline.pltype,   
         profoline.pluomord,
		items.itname  
    FROM profoline left outer join items on profoline.plitem = items.itcode,   
         profohead,   
         adresses  
   WHERE ( profoline.plcode = profohead.phcode ) and  
         ( profohead.phcust = adresses.adcode ) and  
         ( ( profoline.plcode = :a_code ) )    

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
| profohead_phsalval |
| profohead_phtvaval |
| profohead_phtotval |
| profoline_pltype |
| profoline_pluomord |
| items_itname |

