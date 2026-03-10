# d_adresrate

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT ratehead.rhdesc,   
         adresrate.arstartdat,   
         adresrate.arstopdat,   
         adresrate.arrateid,   
         choices.chname  
    FROM adresrate,   
         ratehead,   
         choices  
   WHERE ( ratehead.rhcode = adresrate.arrateid ) and  
			( ratehead.rhtyp = 'T' ) AND
         ( ratehead.rhrpcode = choices.chcode ) and  
         ( ( adresrate.arcode = :Sel_adresse ) AND  
         ( choices.chtype = 'RATP' ) )   
ORDER BY adresrate.arstartdat ASC   

```

## Colonnes
| Colonne |
|---------|
| ratehead_rhdesc |
| adresrate_arstartdat |
| adresrate_arstopdat |
| adresrate_arrateid |
| choices_chname |

