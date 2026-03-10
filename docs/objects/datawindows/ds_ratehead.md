# ds_ratehead

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _edilink
- **Table principale**: 0

## SQL
```sql
  SELECT ratehead.rhcode,   
         ratehead.rhactiv,   
         ratehead.rhrpcode,   
         ratehead.rhcurr,   
         ratehead.rhdesc,   
         ratehead.rhstroke,   
         ratehead.rhtyp,   
         ratehead.rhmod,   
         ratehead.rhnet  
    FROM ratehead  
   WHERE ratehead.rhcode in ( SELECT arrateid FROM adresses , adresrate WHERE adresses.adsalesman LIKE :as_adsalesman AND adresses.adcust = 'Y' AND adresrate.arcode = adresses.adcode AND adresrate.arrateid = ratehead.rhcode )    

```

## Colonnes
| Colonne |
|---------|
| rhcode |
| rhactiv |
| rhrpcode |
| rhcurr |
| rhdesc |
| rhstroke |
| rhtyp |
| rhmod |
| rhnet |

