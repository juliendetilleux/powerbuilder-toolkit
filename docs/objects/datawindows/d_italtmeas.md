# d_italtmeas

- **Type**: DataWindow
- **Style**: Freeform
- **Module**: _masters
- **Table principale**: 0

## SQL
```sql
  SELECT altmeasures.amcode,   
         altmeasures.amdesc,
         ( SELECT Count( *)  
				 FROM italtmeas  
				WHERE italtmeas.imitcode    = :ras_Item          AND  
						italtmeas.imaltumcode = altmeasures.amcode     ) As Used   
    FROM altmeasures  
   WHERE altmeasures.amactiv    = 'Y'           And
         altmeasures.ambaseumid = :ras_BaseUmId    
ORDER BY 1

```

## Colonnes
| Colonne |
|---------|
| amcode |
| amdesc |
| used |

