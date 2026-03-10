# d_crm_company_label_print

- **Type**: DataWindow
- **Style**: Tabular
- **Module**: _prints_crm
- **Table principale**: 0

## SQL
```sql
  SELECT adresses.adname,   
         adresses.adadr1,   
         adresses.adadr2,   
         adresses.adzip,   
         adresses.adloc,   
         adresses.adcountr  ,
			isnull(adresses.adphysical,'N') as adphysical,
			isnull((select first ctname + if ctfirstname is null then '' else ' ' + ctfirstname endif from contacts where ctadcode = adresses.adcode and ctmain = 'Y' and ctactiv = 'Y'),'') as ctname,
			isnull((select first ctciv1 from contacts where ctadcode = adresses.adcode and ctmain = 'Y' and ctactiv = 'Y'),'') as ctciv1,
			isnull((SELECT choices.chname
				 FROM choices  
				WHERE choices.chactiv = 'Y' AND  
						choices.chtype = 'CIV1' AND
						choices.chcode = ctciv1 ),'') as civ,
			'' as contact
    FROM adresses   
   WHERE adresses.adcode = '##########' 
 
```

## Colonnes
| Colonne |
|---------|
| adname |
| adadr1 |
| adadr2 |
| adzip |
| adloc |
| adcountr |
| adphysical |
| ctname |
| ctciv1 |
| civ |
| contact |

